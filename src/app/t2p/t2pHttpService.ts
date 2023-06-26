import { Injectable } from '@angular/core';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import * as vis from 'vis';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { SpinnerService } from './t2p.SpinnerService';
import { DomSanitizer } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: '*/*',
    'Content-Type': 'application/json', // We send Text
  }),
  responseType: 'text' as 'json', // We accept plain text as response.
};

@Injectable({
  providedIn: 'root',
})
export class t2pHttpService {
  private urlBPMN = 'http://localhost:8081/t2p/generateBPMNv2';
  private urlPetriNet = 'http://localhost:8081/t2p/generatePNML';
  public domparser = new DOMParser();
  fileUrl;
  private plainDocumentForDownload: string;

  // private url = 'https://woped.dhbw-karlsruhe.de/t2p/generateText';
  //private text: string;
  constructor(
    private t2phttpClient: HttpClient,
    public spinnerService: SpinnerService,
    private sanitizer: DomSanitizer
  ) {}
  postt2pBPMN(text: string) {
    return this.t2phttpClient
      .post<string>(this.urlBPMN, text, httpOptions)
      .subscribe(
        (response: any) => {
          this.spinnerService.hide();
          // Call Method to Display the BPMN Model.
          this.displayBPMNModel(response);
          this.plainDocumentForDownload = response;
        },
        (error: any) => {
          // Error Handling User Feedback
          this.spinnerService.hide();
          document.getElementById('error-container-text').innerHTML =
            'This is an error 403!' + error.status + ' ' + error.statusText;
          document.getElementById('error-container-text').style.display =
            'block';
        }
      );
  }

  async displayBPMNModel(modelAsBPMN: string) {
    // Empty the Container
    document.getElementById('model-container').innerHTML = '';

    // Create a new Viewer
    const viewer = new BpmnJS({ container: '#model-container' });

    try {
      // Display the BPMN Model
      await viewer.importXML(modelAsBPMN);
    } catch (err) {
    }
  }

  downloadModelAsText() {
    let filename = 't2p';
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' +
        encodeURIComponent(this.plainDocumentForDownload)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  }

  postt2pPetriNet(text: string) {
    return this.t2phttpClient
      .post<string>(this.urlPetriNet, text, httpOptions)
      .subscribe(
        (response: any) => {
          this.spinnerService.hide();
          // Call Method to Display the BPMN Model.
          this.generatePetriNet(response);
          this.plainDocumentForDownload = response;
        },
        (error: any) => {
          this.spinnerService.hide();
          // Error Handling User Feedback
          document.getElementById('error-container').innerHTML =
            error.status + ' ' + error.statusText + ' ' + error.error;
        }
      );
  }
  async generatePetriNet(modelAsPetriNet: string) {
    try {
      let xmlDoc = this.domparser.parseFromString(modelAsPetriNet, 'text/xml');
      this.petrinetController(xmlDoc);
    } catch (err) {
    }
  }

  // Todo: Methode Auslagern in eigene Datei
  petrinetController(petrinet) {
    var generateWorkFlowNet = false; //Determines wether WoPeD specific Elements like XOR Split are created
    let prettyPetriNet = getPetriNet(petrinet);
    generatePetrinetConfig(prettyPetriNet);
    function generatePetrinetConfig(petrinet) {
      var data = getVisElements(petrinet);

      // create a network
      var container = document.getElementById('model-container');

      var options = {
        layout: {
          randomSeed: undefined,
          improvedLayout: true,
          hierarchical: {
            enabled: true,
            levelSeparation: 150,
            nodeSpacing: 100,
            treeSpacing: 200,
            blockShifting: true,
            edgeMinimization: true,
            parentCentralization: true,
            direction: 'LR', // UD, DU, LR, RL
            sortMethod: 'directed', // hubsize, directed
          },
        },
        groups: {
          places: {
            color: { background: '#4DB6AC', border: '#00695C' },
            borderWidth: 3,
            shape: 'circle',
          },
          transitions: {
            color: { background: '#FFB74D', border: '#FB8C00' },
            shape: 'square',
            borderWidth: 3,
          },
          andJoin: {
            color: { background: '#DCE775', border: '#9E9D24' },
            shape: 'square',
            borderWidth: 3,
          },
          andSplit: {
            color: { background: '#DCE775', border: '#9E9D24' },
            shape: 'square',
            borderWidth: 3,
          },
          xorSplit: {
            color: { background: '#9575CD', border: '#512DA8' },
            shape: 'square',
            borderWidth: 3,
            image: '/img/and_split.svg',
          },
          xorJoin: {
            color: { background: '#9575CD', border: '#512DA8' },
            shape: 'square',
            borderWidth: 3,
          },
        },
        interaction: {
          zoomView: true,
          dragView: true,
        },
      };
      // initialize your network!
      var network = new vis.Network(container, data, options);
    }
    var gateways = [];
    function getPetriNet(PNML) {
      var places = PNML.getElementsByTagName('place');
      var transitions = PNML.getElementsByTagName('transition');
      var arcs = PNML.getElementsByTagName('arc');

      var petrinet = {
        places: [],
        transitions: [],
        arcs: [],
      };

      for (var x = 0; x < arcs.length; x++) {
        var arc = arcs[x];
        petrinet.arcs.push({
          id: arc.getAttribute('id'),
          source: arc.getAttribute('source'),
          target: arc.getAttribute('target'),
        });
      }

      for (var x = 0; x < places.length; x++) {
        var place = places[x];
        petrinet.places.push({
          id: place.getAttribute('id'),
          label: place.getElementsByTagName('text')[0].textContent,
        });
      }

      for (var x = 0; x < transitions.length; x++) {
        var transition = transitions[x];
        var isGateway = transition.getElementsByTagName('operator').length > 0;
        var gatewayType = undefined;
        var gatewayID = undefined;
        if (isGateway) {
          gatewayType = transition
            .getElementsByTagName('operator')[0]
            .getAttribute('type');
          gatewayID = transition
            .getElementsByTagName('operator')[0]
            .getAttribute('id');
        }
        petrinet.transitions.push({
          id: transition.getAttribute('id'),
          label: transition.getElementsByTagName('text')[0].textContent,
          isGateway: isGateway,
          gatewayType: gatewayType,
          gatewayID: gatewayID,
        });
      }
      return petrinet;
    }

    function resetGatewayLog() {
      gateways = [];
    }

    function logContainsGateway(transition) {
      for (var x = 0; x < gateways.length; x++) {
        if (gateways[x].gatewayID === transition.gatewayID) return true;
      }
      return false;
    }

    function logGatewayTransition(transition) {
      if (logContainsGateway(transition) === true) {
        for (var x = 0; x < gateways.length; x++) {
          if (gateways[x].gatewayID === transition.gatewayID)
            gateways[x].transitionIDs.push({ transitionID: transition.id });
        }
      } else {
        gateways.push({
          gatewayID: transition.gatewayID,
          transitionIDs: [{ transitionID: transition.id }],
        });
      }
    }

    function getGatewayIDsforReplacement(arc) {
      var replacement = { source: null, target: null };
      for (var x = 0; x < gateways.length; x++) {
        for (var i = 0; i < gateways[x].transitionIDs.length; i++) {
          if (arc.source === gateways[x].transitionIDs[i].transitionID) {
            replacement.source = gateways[x].gatewayID;
          }
          if (arc.target === gateways[x].transitionIDs[i].transitionID) {
            replacement.target = gateways[x].gatewayID;
          }
        }
      }
      return replacement;
    }

    function replaceGatewayArcs(arcs) {
      for (var x = 0; x < arcs.length; x++) {
        var replacement = getGatewayIDsforReplacement(arcs[x]);
        if (replacement.source !== null) {
          arcs[x].source = replacement.source;
        }
        if (replacement.target !== null) {
          arcs[x].target = replacement.target;
        }
      }
    }

    function getVisElements(PetriNet) {
      // provide the data in the vis format
      var edges = new vis.DataSet([]);
      var nodes = new vis.DataSet([]);
      for (var x = 0; x < PetriNet.places.length; x++) {
        nodes.add({
          id: PetriNet.places[x].id,
          group: 'places',
          label: PetriNet.places[x].label,
        });
      }

      for (var x = 0; x < PetriNet.transitions.length; x++) {
        if (
          !PetriNet.transitions[x].isGateway ||
          generateWorkFlowNet === false
        ) {
          nodes.add({
            id: PetriNet.transitions[x].id,
            group: 'transitions',
            label: PetriNet.transitions[x].id,
            title: PetriNet.transitions[x].label,
          });
        } else {
          var gatewayGroup = '';
          var label = '';
          switch (PetriNet.transitions[x].gatewayType) {
            case '101':
              gatewayGroup = 'andSplit';
              break;
            case '102':
              gatewayGroup = 'andJoin';
              break;
            case '104':
              gatewayGroup = 'xorSplit';
              break;
            case '105':
              gatewayGroup = 'xorJoin';
              break;
          }
          if (!logContainsGateway(PetriNet.transitions[x])) {
            nodes.add({
              id: PetriNet.transitions[x].gatewayID,
              group: gatewayGroup,
              label: label,
              title: PetriNet.transitions[x].label,
            });
          }
          logGatewayTransition(PetriNet.transitions[x]);
        }
      }

      if (generateWorkFlowNet === true) {
        replaceGatewayArcs(PetriNet.arcs);
      }

      for (var x = 0; x < PetriNet.arcs.length; x++) {
        edges.add({
          from: PetriNet.arcs[x].source,
          to: PetriNet.arcs[x].target,
          arrows: 'to',
        });
      }
      resetGatewayLog();
      return { nodes: nodes, edges: edges };
    }
  }
}
