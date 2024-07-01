import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { t2pHttpService } from '../Services/t2pHttpService';
// import { SpinnerService } from './t2p.SpinnerService';
import html2canvas from 'html2canvas';
import { SpinnerService } from '../utilities/SpinnerService';

@Component({
  selector: 'app-t2p',
  templateUrl: './t2p.component.html',
  styleUrls: ['./t2p.component.css'],
})
export class T2PComponent {
  protected text = '';
  protected selectedDiagram = 'bpmn';
  protected textResult = '';

  @ViewChild('stepperRef') stepper!: MatStepper;
  @ViewChild('dropZone', { static: true }) dropZone: ElementRef<HTMLDivElement>;
  protected isFiledDropped = false;
  protected droppedFileName = '';
  @ViewChild('fileInputRef') fileInputRef!: ElementRef<HTMLInputElement>;
  isFileDropped = false;
  constructor(
    private http: t2pHttpService,
    public spinnerService: SpinnerService
  ) {}
  //Triggers a corresponding HTTP request to the backend depending on the selection of the radio buttons.
  //The input text is first revised (all umlauts are removed) and then sent with the request.
  protected generateProcess(inputText: string) {
    document.getElementById('error-container-text')!.style.display = 'none';
    this.spinnerService.show();
    let text = inputText;
    text = this.replaceUmlaut(text);
    if (this.selectedDiagram === 'bpmn') {
      //Send request to backend
      this.http.postT2PBPMN(text);
      //Show input text as input in the last step
      this.setTextResult(text);
    }
    if (this.selectedDiagram === 'petri-net') {
      this.http.postT2PPetriNet(text);
      this.setTextResult(text);
    }
  }
  //Revise the input text. The umlauts are replaced by normal letters so that the text can be read correctly by the backend.
  protected replaceUmlaut(text: string) {
    return text
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace('ü', 'ue')
      .replace('ß', 'ss')
      .replace('Ä', 'Ae')
      .replace('Ö', 'Oe')
      .replace('Ü', 'Ue');
  }
  //Returns the value selected for the radio buttons in step 3 of the mat-stepper.
  protected onSelectedDiagram(event: any) {
    switch (event.target.value) {
      case 'bpmn':
        this.selectedDiagram = 'bpmn';
        break;
      case 'petri-net':
        this.selectedDiagram = 'petri-net';
        break;
    }
  }
  //Registers that a document has been entered in the drag & drop field and displays its name. Causes the input file to be read out.
  protected onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;

    this.processDroppedFiles(files);
    this.isFiledDropped = true;
    this.droppedFileName = files[0].name;
  }

  protected onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  //Reads out the file and inserts the text into the text input field
  processDroppedFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Handle each dropped file here

      // Example: Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        window.dropfileContent = reader.result as string;
        this.setTextInTextBox(window.dropfileContent);
        // Do something with the file content
      };
      reader.readAsText(file);
    }
  }
  //Inserts the text extracted from the input file into the text field.
  protected setTextInTextBox(text: string) {
    this.text = text;
  }
  //Inserts the text extracted from the entered file into the text field.
  protected setTextResult(text: string) {
    this.textResult = text;
  }
  //The user can now select and insert a .txt file from his explorer.
  protected selectFiles() {
    this.fileInputRef.nativeElement.click();
  }
  //Registers that a document has been entered in the drag & drop field and displays its name. Causes the input file to be read out.
  protected onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    if (files && files.length > 0) {
      this.processDroppedFiles(files);
      this.isFileDropped = true;
      this.droppedFileName = files[0].name;
    }
  }
  //Triggers the download of a text file containing the diagram in .pnml format. --> save pnml?
  protected onDownloadText() {
    this.http.downloadModelAsText();
  }
  //Triggers the download of a image (png) of the diagram.
  // Method makes use of html2canvas library (locally imported)
  onDownloadImage() {
    const element = document.getElementById('model-container')!; // ID of the div to be converted

    html2canvas(element).then((canvas) => {
      // Convert the canvas into an image data URL
      const imgData = canvas.toDataURL('image/png');

      // Create a download link
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 't2p.png'; // File name for the downloaded image

      // Add the link to the document and click it automatically
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}
