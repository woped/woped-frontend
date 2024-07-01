# 

**Über arc42**

arc42, das Template zur Dokumentation von Software- und
Systemarchitekturen.

Template Version 8.2 DE. (basiert auf AsciiDoc Version), Januar 2023

Created, maintained and © by Dr. Peter Hruschka, Dr. Gernot Starke and
contributors. Siehe <https://arc42.org>.

<div class="note">

Diese Version des Templates enthält Hilfen und Erläuterungen. Sie dient
der Einarbeitung in arc42 sowie dem Verständnis der Konzepte. Für die
Dokumentation eigener System verwenden Sie besser die *plain* Version.

</div>

# Einführung und Ziele

Dieses Projekt dient zur Erweiterung der bereits vorhandenen Funktionen des WoPed-Clients https://woped.dhbw-karlsruhe.de/. 
Dabei soll der biherige Process to Text Service (P2T) um die Anbindung eines Large Language Models (LLM) ergänzt werden. Der P2T-Servide dienet zur Umwandlung von BPMN- Diagrammen in menschlich verstehbaren Text.

![Kategorien von
Qualitätsanforderungen](images/Arcitecture.png)

Die Hauptidee des Projekts ist es, den bestehenden P2T-Service um die Integration eines Large Language Models (LLM) zu erweitern. Dies soll durch die Nutzung von REST-APIs erfolgen, um eine nahtlose Kommunikation zwischen den verschiedenen Komponenten zu ermöglichen.

**Komponenten des Systems und ihre Interaktionen**

Client-Web: Dies ist die webbasierte Benutzeroberfläche, die Benutzer zur Interaktion mit WoPed verwenden. Sie ermöglicht die Erstellung, Bearbeitung und Analyse von BPMN-Diagrammen (Business Process Model and Notation).

Client-Fat: Dies ist eine lokal installierte, umfangreichere Version des Clients mit erweiterten Funktionalitäten im Vergleich zur Webversion.

P2T: Der Process to Text Service, der derzeitige Dienst zur Umwandlung von BPMN-Diagrammen in Textbeschreibungen.

LLM (Large Language Model): Ein leistungsfähiges Sprachmodell, das in der Lage ist, komplexe Texte zu generieren und zu verstehen. Es wird eingesetzt, um die Textgenerierung aus BPMN-Diagrammen zu verbessern und umgekehrt.

Transformer: Ein weiterer Dienst, der zur Konvertierung zwischen verschiedenen Prozessdarstellungen wie Petri-Netzen und BPMN verwendet wird.


## Aufgabenstellung

<div class="formalpara-title">

DIe Aufgabe des Teams besteht darin den Web-Client des WoPed-Projekts zu erweitern und die Integration eines LLM zu realisieren. 

**Inhalt**

</div>

Erweiterung des Web-Clients: Verbesserung der Benutzeroberfläche, um neue Funktionen zu integrieren, die durch die Einbindung des LLM ermöglicht werden. Dazu zählen:

1. Ein Toggle-Switch-Button zur Auswahl der al­go­rith­mischen Lösung oder der LLM-Lösung des P2T-Services.
2. Eingabefenster für die Eingabe eines verwenderspezifischen API-Key für Chat-GPT.
3. Ein ausgegrautes Fenster zur Darstellung des LLM-Prompt.
4. Button zur Bearabreitung des LLM-Prompt.

Anbindung des LLM: Entwicklung von Schnittstellen zur Kommunikation zwischen dem Web-Client und Chat.GPT mittels einer REST-API.

<div class="formalpara-title">

**Motivation**

</div>

Verbesserte Textgenerierung: Durch die Einbindung eines LLM kann die Qualität und Genauigkeit der Textbeschreibungen aus BPMN-Diagrammen erheblich verbessert werden.

Erweiterte Analysemöglichkeiten: Mit den Fähigkeiten des LLM können komplexere Analysen und Verarbeitungen der Prozessbeschreibungen durchgeführt werden.

Flexibilität bei der Prozessdarstellung: Die Möglichkeit, zwischen verschiedenen Prozessdarstellungen (BPMN und Petri-Netze) zu konvertieren, erhöht die Flexibilität und Anpassungsfähigkeit des Systems.

## Qualitätsziele

<div class="formalpara-title">

**Inhalt**

</div>

Die ISO 25010 Norm definiert acht Qualitätsmerkmale für Softwareprodukte. Für das Projekt zur Erweiterung des WoPed-Clients und der Integration eines Large Language Models (LLM) sind die folgenden fünf Qualitätskriterien besonders relevant:

Hier ein Überblick möglicher Themen (basierend auf dem ISO 25010
Standard):
![Kategorien von 
Qualitätsanforderungen](images/01_2_iso-25010-topics-DE.drawio.png)

1. Funktionalität: Die Fähigkeit des Systems, die festgelegten Aufgaben zu erfüllen. Dies umfasst die Korrektheit der Konvertierung von BPMN-Diagrammen in Text und umgekehrt sowie die Integration des LLM.

2. Zuverlässigkeit: Die Fähigkeit des Systems, unter festgelegten Bedingungen über einen festgelegten Zeitraum hinweg eine fehlerfreie Leistung zu erbringen. Dies umfasst die Verfügbarkeit des Systems und die Fähigkeit zur Fehlerbehebung.
3. Benutzbarkeit (Usability): Die Fähigkeit des Systems, von bestimmten Benutzern in einem bestimmten Nutzungskontext effizient und zufriedenstellend genutzt zu werden. Dies umfasst die Benutzeroberfläche und die Benutzerfreundlichkeit.

4. Effizienz: Die Fähigkeit des Systems, angemessene Leistung relativ zu der Menge der verwendeten Ressourcen zu erbringen. Dies umfasst die Reaktionszeit und die Ressourcennutzung.

5. Sicherheit: Die Fähigkeit des Systems, Informationen und Daten so zu schützen, dass nur autorisierte Benutzer darauf zugreifen können. Dies umfasst die Authentifizierung, Autorisierung und Datenverschlüsselung.

<div class="formalpara-title">

**Stakeholder und deren Qualitätsziele**

</div>

 Verwender (Benutzer): 

Benutzbarkeit (Usability): <br> Die Benutzer erwarten eine intuitive und leicht verständliche Benutzeroberfläche. Dies beeinflusst die Wahl der Frontend-Technologien und die Gestaltung der Benutzeroberfläche.

Funktionalität:<br>  Die Benutzer benötigen zuverlässige und korrekte Konvertierungen zwischen BPMN-Diagrammen und Texten. Dies beeinflusst die Qualitätssicherungsmaßnahmen und die Integration des LLM.

Programmierer (Entwickler):

Wartbarkeit:<br>  Die Entwickler müssen den Code leicht verstehen, modifizieren und erweitern können. Dies beeinflusst die Wahl der Programmiersprachen, Frameworks und die Struktur des Codes.

Zuverlässigkeit:<br>  Die Entwickler müssen sicherstellen, dass das System unter verschiedenen Bedingungen zuverlässig funktioniert. Dies beeinflusst die Implementierung von Logging, Monitoring und Teststrategien.

Veröffentlicher (Betreiber):

Effizienz:<br>  Die Betreiber müssen sicherstellen, dass das System ressourceneffizient arbeitet, um Kosten zu minimieren. Dies beeinflusst die Wahl der Hosting-Umgebung und die Skalierungsstrategien.

Sicherheit:<br>  Die Betreiber müssen sicherstellen, dass das System vor unbefugtem Zugriff geschützt ist. Dies beeinflusst die Implementierung von Sicherheitsprotokollen und Datenschutzmaßnahmen.


<div class="formalpara-title">

**Form**



| Priorität | Stakeholder       | Qualitätsziel       | Szenario                                                                                              | Einfluss auf Architekturentscheidungen                                              |
|-----------|-------------------|---------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| 1         | Verwender         | Funktionalität      | BPMN-Diagramme werden korrekt in Text und umgekehrt konvertiert.                                       | Implementierung robuster Testfälle und Validierungsmechanismen für die Konvertierungen. |
| 2         | Verwender         | Benutzbarkeit       | Die Benutzeroberfläche ist intuitiv und einfach zu bedienen.                                           | Einsatz von UX-Design-Prinzipien und modernen Frontend-Frameworks (z.B. React, Angular). |
| 3         | Programmierer     | Wartbarkeit         | Der Code ist gut strukturiert und dokumentiert, sodass Änderungen leicht vorgenommen werden können.     | Einsatz von Clean Code-Prinzipien und Erstellung umfassender Dokumentationen.       |
| 4         | Veröffentlicher   | Effizienz           | Das System reagiert schnell auf Benutzeranfragen und nutzt Ressourcen effizient.                       | Nutzung skalierbarer Cloud-Dienste und Optimierung der API-Kommunikation.           |
| 5         | Veröffentlicher   | Sicherheit          | Nur autorisierte Benutzer können auf die neuen Funktionen zugreifen.                                    | Implementierung von Authentifizierungs- und Autorisierungsmechanismen (z.B. OAuth). |


## Stakeholder

<div class="formalpara-title">


| Rolle        | Kontakt        | Erwartungshaltung |
|--------------|----------------|-------------------|
| Verwender    | Benutzer       | Intuitive und leicht verständliche Benutzeroberfläche. Zuverlässige und korrekte Konvertierungen zwischen BPMN-Diagrammen und Texten. |
| Programmierer| Entwickler     | Leicht verständlicher, modifizierbarer und erweiterbarer Code. Zuverlässiges Funktionieren des Systems unter verschiedenen Bedingungen. |
| Veröffentlicher| Betreiber     | Ressourceneffizientes Arbeiten des Systems. Schutz vor unbefugtem Zugriff auf die neuen Funktionen. |

# Randbedingungen

<div class="formalpara-title">

## Technische Randbedingungen

| Randbedingung                | Erläuterung                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------|
| Nutzung von REST-APIs        | Die Kommunikation zwischen Web-Client, P2T-Service und LLM erfolgt über standardisierte REST-APIs.   |
| Web-Technologien             | Der Web-Client muss mit modernen Web-Technologien wie React oder Angular entwickelt werden.          |
| Cloud-Infrastruktur          | Das System soll auf einer skalierbaren Cloud-Infrastruktur wie AWS oder Azure betrieben werden.      |
| Sicherheit                   | Es müssen OAuth und HTTPS für Authentifizierung und Datenverschlüsselung verwendet werden.           |
| API-Rate-Limits              | Die Nutzung der Chat-GPT API unterliegt bestimmten Rate-Limits, die berücksichtigt werden müssen.    |

## Organisatorische Randbedingungen

| Randbedingung                | Erläuterung                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------|
| Einhaltung von Unternehmensrichtlinien | Alle Entwicklungs- und Betriebsprozesse müssen den internen Unternehmensrichtlinien entsprechen. |
| Datenschutzbestimmungen      | Das System muss den geltenden Datenschutzbestimmungen (z.B. DSGVO) entsprechen.                      |
| Projektzeitplan              | Der Entwicklungszyklus und die Meilensteine müssen dem vorgegebenen Projektzeitplan entsprechen.     |
| Budgetbeschränkungen         | Die Entwicklung und der Betrieb des Systems müssen innerhalb des festgelegten Budgets erfolgen.      |

## Politische Randbedingungen

| Randbedingung                | Erläuterung                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------|
| Open-Source-Vorgaben         | Der Einsatz von Open-Source-Software ist erwünscht, aber es müssen Lizenzbedingungen beachtet werden.|
| Compliance-Richtlinien       | Das System muss den gesetzlichen und regulatorischen Vorgaben entsprechen, die für die Branche gelten.|
| Firmenweite Technologievorgaben | Es gibt Vorgaben, welche Technologien und Tools firmenweit verwendet werden dürfen.                  |


# Kontextabgrenzung

<div class="formalpara-title">

**Inhalt**

</div>

Die Kontextabgrenzung grenzt das System gegen alle Kommunikationspartner
(Nachbarsysteme und Benutzerrollen) ab. Sie legt damit die externen
Schnittstellen fest und zeigt damit auch die Verantwortlichkeit (scope)
Ihres Systems: Welche Verantwortung trägt das System und welche
Verantwortung übernehmen die Nachbarsysteme?

Differenzieren Sie fachlichen (Ein- und Ausgaben) und technischen
Kontext (Kanäle, Protokolle, Hardware), falls nötig.

<div class="formalpara-title">

**Motivation**

</div>

Die fachlichen und technischen Schnittstellen zur Kommunikation gehören
zu den kritischsten Aspekten eines Systems. Stellen Sie sicher, dass Sie
diese komplett verstanden haben.

<div class="formalpara-title">

**Form**

</div>

Verschiedene Optionen:

-   Diverse Kontextdiagramme

-   Listen von Kommunikationsbeziehungen mit deren Schnittstellen

Siehe [Kontextabgrenzung](https://docs.arc42.org/section-3/) in der
online-Dokumentation (auf Englisch!).

## Fachlicher Kontext

<div class="formalpara-title">

## Inhalt

Das System interagiert mit den folgenden externen Akteuren und Systemen:

- **Benutzer:** Erstellen und bearbeiten BPMN-Diagramme über den Web-Client.
- **Chat-GPT API:** Zur Generierung von Texten aus BPMN-Diagrammen.
- **P2T-Service:** Bestehender Dienst zur Umwandlung von BPMN-Diagrammen in Text.
- **Transformationsdienst:** Konvertiert zwischen verschiedenen Prozessdarstellungen wie Petri-Netzen und BPMN.


## Kommunikationsbeziehungen

| Kommunikationsbeziehung           | Eingabe          | Ausgabe                  |
|-----------------------------------|------------------|--------------------------|
| Benutzer                          | BPMN-Diagramm    | Textbeschreibung         |
| Web-Client -> Chat-GPT API        | BPMN-Diagramm    | Generierter Text         |
| Web-Client -> P2T-Service         | BPMN-Diagramm    | Textbeschreibung         |
| Web-Client -> Transformationsdienst | BPMN-Diagramm    | Konvertiertes Prozessmodell |


## Technischer Kontext

<div class="formalpara-title">

## Technisches Kontextdiagramm

- **Benutzer:** HTTP/S über Webbrowser
- **Chat-GPT API:** REST API über HTTPS
- **P2T-Service:** REST API über HTTPS
- **Transformationsdienst:** REST API über HTTPS


# Lösungsstrategie

<div class="formalpara-title">

## Technologieentscheidungen

### Technologieentscheidungen

- **Verwendung von React.js** für die Web-Client-Entwicklung.
- **Integration von REST-APIs** für die Kommunikation mit Chat-GPT und P2T-Service.
- **Nutzung von Node.js** für serverseitige Logik.

### Top-Level-Zerlegung

- **Aufteilung des Systems** in Frontend (Web-Client) und Backend (Server, REST-APIs).
- **Verwendung des MVC-Architekturmusters**.

### Erreichung der wichtigsten Qualitätsanforderungen

- **Einsatz von Unit-Tests und Integrationstests** zur Sicherstellung der Funktionalität.
- **Nutzung von OAuth** für Authentifizierung und Autorisierung zur Erhöhung der Sicherheit.


# Bausteinsicht

<div class="formalpara-title">

## Bausteinsicht


#### Enthaltene Bausteine

| **Name**             | **Verantwortung**                                                                         |
|----------------------|-------------------------------------------------------------------------------------------|
| Web-Client           | Bietet eine Benutzeroberfläche zur Erstellung und Bearbeitung von BPMN-Diagrammen.        |
| API-Gateway          | Verwaltet die REST-API-Kommunikation zwischen Frontend und Backend.                       |
| P2T-Service          | Konvertiert BPMN-Diagramme in Text.                                                       |
| Chat-GPT Adapter     | Schnittstelle zur Kommunikation mit der Chat-GPT API zur Textgenerierung.                 |
| Transformationsdienst| Konvertiert zwischen verschiedenen Prozessmodellen (BPMN und Petri-Netze).                |

#### Wichtige Schnittstellen
- **Web-Client zu API-Gateway**: HTTP/S
- **API-Gateway zu P2T-Service**: REST API über HTTPS
- **API-Gateway zu Chat-GPT Adapter**: REST API über HTTPS
- **API-Gateway zu Transformationsdienst**: REST API über HTTPS

### Web-Client

#### Zweck/Verantwortung
Der Web-Client bietet eine intuitive Benutzeroberfläche zur Erstellung, Bearbeitung und Analyse von BPMN-Diagrammen.

#### Schnittstellen
- **HTTP/S**: Kommunikation mit dem API-Gateway
- **Benutzerinteraktionen**: über das Webinterface

### API-Gateway

#### Zweck/Verantwortung
Das API-Gateway verwaltet die REST-API-Kommunikation zwischen dem Frontend und den Backend-Diensten.

#### Schnittstellen
- **REST API**: Kommunikation mit Web-Client, P2T-Service, Chat-GPT Adapter und Transformationsdienst

### P2T-Service

#### Zweck/Verantwortung
Der P2T-Service konvertiert BPMN-Diagramme in menschenlesbaren Text.

#### Schnittstellen
- **REST API**: Eingabe von BPMN-Diagrammen und Ausgabe von Textbeschreibungen

### Chat-GPT Adapter

#### Zweck/Verantwortung
Der Chat-GPT Adapter ermöglicht die Kommunikation mit der Chat-GPT API zur Generierung von Texten aus BPMN-Diagrammen.

#### Schnittstellen
- **REST API**: Übertragung der BPMN-Diagramme an die Chat-GPT API und Empfang der generierten Texte

### Transformationsdienst

#### Zweck/Verantwortung
Der Transformationsdienst konvertiert zwischen verschiedenen Prozessmodellen wie Petri-Netzen und BPMN.

#### Schnittstellen
- **REST API**: Eingabe von BPMN-Diagrammen und Ausgabe von konvertierten Prozessmodellen

### Ebene 2

#### Whitebox Web-Client

Der Web-Client enthält mehrere Unterkomponenten, die für spezifische Funktionen verantwortlich sind. 

##### Komponenten

| **Name**              | **Verantwortung**                                                          |
|-----------------------|----------------------------------------------------------------------------|
| Diagrammeditor        | Ermöglicht das Erstellen und Bearbeiten von BPMN-Diagrammen                |
| Textanzeige           | Zeigt die aus den BPMN-Diagrammen generierten Texte an                     |
| Einstellungsverwaltung| Verwaltung der Benutzereinstellungen und API-Keys                          |
| Kommunikationsmodul   | Handhabt die Kommunikation mit dem API-Gateway                             |

#### Whitebox API-Gateway

Das API-Gateway ist in mehrere Module unterteilt, die jeweils für bestimmte Aspekte der API-Verwaltung verantwortlich sind.

##### Module

| **Name**            | **Verantwortung**                                                   |
|---------------------|---------------------------------------------------------------------|
| Routing-Modul       | Leitet Anfragen an die entsprechenden Backend-Services weiter       |
| Sicherheitsmodul    | Stellt die Authentifizierung und Autorisierung sicher               |
| Überwachungsmodul   | Überwacht die API-Nutzung und protokolliert relevante Ereignisse    |

#### Whitebox P2T-Service

Der P2T-Service umfasst verschiedene Verarbeitungsschritte, die zur Konvertierung von BPMN-Diagrammen in Text notwendig sind.

##### Verarbeitungsschritte

| **Name**             | **Verantwortung**                                                              |
|----------------------|--------------------------------------------------------------------------------|
| Parser               | Analysiert die BPMN-Diagramme und extrahiert relevante Informationen           |
| Textgenerator        | Generiert aus den extrahierten Informationen menschenlesbare Textbeschreibungen|

### Ebene 3

#### Whitebox Diagrammeditor

Der Diagrammeditor des Web-Clients ist in verschiedene Funktionsmodule unterteilt, die spezifische Bearbeitungsaufgaben ermöglichen.

##### Funktionsmodule

| **Name**             | **Verantwortung**                                            |
|----------------------|--------------------------------------------------------------|
| Zeichenwerkzeuge     | Bietet Werkzeuge zum Zeichnen und Anpassen von Diagrammelementen|
| Speichermodul        | Ermöglicht das Speichern und Laden von Diagrammen            |
| Validierungsmodul    | Überprüft die Korrektheit der Diagramme                      |

#### Whitebox Routing-Modul

Das Routing-Modul des API-Gateways enthält mehrere Komponenten, die zusammenarbeiten, um Anfragen effizient weiterzuleiten.

##### Komponenten

| **Name**             | **Verantwortung**                                  |
|----------------------|----------------------------------------------------|
| Anfrageparser        | Analysiert eingehende Anfragen und extrahiert Parameter|
| Weiterleitungslogik  | Bestimmt den Ziel-Service für die Anfrage          |
| Antworthandler       | Verarbeitet die Antworten der Backend-Services     |

Diese hierarchische Beschreibung der Bausteine ermöglicht eine detaillierte Sicht auf die Systemarchitektur, die sowohl für Entwickler als auch für andere Stakeholder von Nutzen ist.


# Laufzeitsicht

<div class="formalpara-title">

## Laufzeitsicht

### Inhalt

Diese Sicht erklärt konkrete Abläufe und Beziehungen zwischen Bausteinen in Form von Szenarien aus den folgenden Bereichen:

- **Wichtige Abläufe oder Features**: Wie führen die Bausteine der Architektur die wichtigsten Abläufe durch?
- **Interaktionen an kritischen externen Schnittstellen**: Wie arbeiten Bausteine mit Nutzern und Nachbarsystemen zusammen?
- **Betrieb und Administration**: Inbetriebnahme, Start, Stop.
- **Fehler- und Ausnahmeszenarien**

Anmerkung: Das Kriterium für die Auswahl der möglichen Szenarien (d.h. Abläufe) des Systems ist deren Architekturrelevanz. Es geht nicht darum, möglichst viele Abläufe darzustellen, sondern eine angemessene Auswahl zu dokumentieren.

### Motivation

Sie sollten verstehen, wie (Instanzen von) Bausteine(n) Ihres Systems ihre jeweiligen Aufgaben erfüllen und zur Laufzeit miteinander kommunizieren.

Nutzen Sie diese Szenarien in der Dokumentation hauptsächlich für eine verständlichere Kommunikation mit denjenigen Stakeholdern, die die statischen Modelle (z.B. Bausteinsicht, Verteilungssicht) weniger verständlich finden.

### Form

Für die Beschreibung von Szenarien gibt es zahlreiche Ausdrucksmöglichkeiten. Nutzen Sie beispielsweise:

- Nummerierte Schrittfolgen oder Aufzählungen in Umgangssprache
- Aktivitäts- oder Flussdiagramme
- Sequenzdiagramme
- BPMN (Geschäftsprozessmodell und -notation) oder EPKs (Ereignis-Prozessketten)
- Zustandsautomaten

Siehe [Laufzeitsicht](https://docs.arc42.org/section-6/) in der online-Dokumentation (auf Englisch!).

### Textgenerierungsszenario

1. Benutzer erstellt ein BPMN-Diagramm im Web-Client.
2. Benutzer wählt die LLM-Option und sendet das Diagramm zur Verarbeitung.
3. Web-Client sendet das BPMN-Diagramm an das API-Gateway.
4. API-Gateway leitet die Anfrage an den Chat-GPT Adapter weiter.
5. Chat-GPT Adapter kommuniziert mit der Chat-GPT API und erhält den generierten Text.
6. Der generierte Text wird an den Web-Client zurückgesendet und dem Benutzer angezeigt.

#### Besonderheiten bei dem Zusammenspiel der Bausteine in diesem Szenario
- **Web-Client**: Bietet die Benutzeroberfläche und initiiert die Anfragen.
- **API-Gateway**: Leitet die Anfragen an die entsprechenden Dienste weiter.
- **Chat-GPT Adapter**: Vermittelt zwischen dem API-Gateway und der Chat-GPT API.
- **Chat-GPT API**: Generiert den Text basierend auf dem übermittelten BPMN-Diagramm.

### Fehlerbehandlungsszenario

1. Benutzer sendet ein fehlerhaftes BPMN-Diagramm zur Verarbeitung.
2. Web-Client sendet das BPMN-Diagramm an das API-Gateway.
3. API-Gateway leitet die Anfrage an den P2T-Service weiter.
4. P2T-Service erkennt den Fehler im BPMN-Diagramm und sendet eine Fehlermeldung zurück an das API-Gateway.
5. API-Gateway leitet die Fehlermeldung an den Web-Client weiter.
6. Web-Client zeigt die Fehlermeldung dem Benutzer an und fordert zur Korrektur des Diagramms auf.

#### Besonderheiten bei dem Zusammenspiel der Bausteine in diesem Szenario
- **P2T-Service**: Führt eine Validierung des BPMN-Diagramms durch und erkennt Fehler.
- **API-Gateway**: Handhabt die Fehlerkommunikation zwischen dem P2T-Service und dem Web-Client.

### Inbetriebnahmeszenario

1. Administrator startet das System.
2. API-Gateway wird zuerst gestartet und stellt sicher, dass alle Verbindungen zu den Backend-Diensten korrekt konfiguriert sind.
3. Web-Client wird gestartet und überprüft die Verbindung zum API-Gateway.
4. P2T-Service und Chat-GPT Adapter werden nacheinander gestartet und ihre Verfügbarkeit wird durch das API-Gateway geprüft.
5. Administrator überprüft die Systemlogs und stellt sicher, dass alle Dienste ordnungsgemäß laufen.

#### Besonderheiten bei dem Zusammenspiel der Bausteine in diesem Szenario
- **Administrator**: Führt den Start des Systems durch und überwacht die Logs.
- **API-Gateway**: Stellt sicher, dass alle Dienste verfügbar und korrekt konfiguriert sind.


# Verteilungssicht

<div class="formalpara-title">


# Querschnittliche Konzepte

<div class="formalpara-title">

**Inhalt**

</div>

Dieser Abschnitt beschreibt übergreifende, prinzipielle Regelungen und
Lösungsansätze, die an mehreren Stellen (=*querschnittlich*) relevant
sind.

Solche Konzepte betreffen oft mehrere Bausteine. Dazu können vielerlei
Themen gehören, beispielsweise:

-   Modelle, insbesondere fachliche Modelle

-   Architektur- oder Entwurfsmuster

-   Regeln für den konkreten Einsatz von Technologien

-   prinzipielle — meist technische — Festlegungen übergreifender Art

-   Implementierungsregeln

<div class="formalpara-title">

**Motivation**

</div>

Konzepte bilden die Grundlage für *konzeptionelle Integrität*
(Konsistenz, Homogenität) der Architektur und damit eine wesentliche
Grundlage für die innere Qualität Ihrer Systeme.

Manche dieser Themen lassen sich nur schwer als Baustein in der
Architektur unterbringen (z.B. das Thema „Sicherheit“).

<div class="formalpara-title">

**Form**

</div>

Kann vielfältig sein:

-   Konzeptpapiere mit beliebiger Gliederung,

-   übergreifende Modelle/Szenarien mit Notationen, die Sie auch in den
    Architektursichten nutzen,

-   beispielhafte Implementierung speziell für technische Konzepte,

-   Verweise auf „übliche“ Nutzung von Standard-Frameworks
    (beispielsweise die Nutzung von Hibernate als Object/Relational
    Mapper).

<div class="formalpara-title">

**Struktur**

</div>

Eine mögliche (nicht aber notwendige!) Untergliederung dieses
Abschnittes könnte wie folgt aussehen (wobei die Zuordnung von Themen zu
den Gruppen nicht immer eindeutig ist):

-   Fachliche Konzepte

-   User Experience (UX)

-   Sicherheitskonzepte (Safety und Security)

-   Architektur- und Entwurfsmuster

-   Unter-der-Haube

-   Entwicklungskonzepte

-   Betriebskonzepte

![Possible topics for crosscutting
concepts](images/08-Crosscutting-Concepts-Structure-DE.png)

Siehe [Querschnittliche Konzepte](https://docs.arc42.org/section-8/) in
der online-Dokumentation (auf Englisch).

## *\<Konzept 1>*

*\<Erklärung>*

## *\<Konzept 2>*

*\<Erklärung>*

…

## *\<Konzept n>*

*\<Erklärung>*

# Architekturentscheidungen

<div class="formalpara-title">

**Inhalt**

</div>

Wichtige, teure, große oder riskante Architektur- oder
Entwurfsentscheidungen inklusive der jeweiligen Begründungen. Mit
"Entscheidungen" meinen wir hier die Auswahl einer von mehreren
Alternativen unter vorgegebenen Kriterien.

Wägen Sie ab, inwiefern Sie Entscheidungen hier zentral beschreiben,
oder wo eine lokale Beschreibung (z.B. in der Whitebox-Sicht von
Bausteinen) sinnvoller ist. Vermeiden Sie Redundanz. Verweisen Sie evtl.
auf Abschnitt 4, wo schon grundlegende strategische Entscheidungen
beschrieben wurden.

<div class="formalpara-title">

**Motivation**

</div>

Stakeholder des Systems sollten wichtige Entscheidungen verstehen und
nachvollziehen können.

<div class="formalpara-title">

**Form**

</div>

Verschiedene Möglichkeiten:

-   ADR ([Documenting Architecture
    Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions))
    für jede wichtige Entscheidung

-   Liste oder Tabelle, nach Wichtigkeit und Tragweite der
    Entscheidungen geordnet

-   ausführlicher in Form einzelner Unterkapitel je Entscheidung

Siehe [Architekturentscheidungen](https://docs.arc42.org/section-9/) in
der arc42 Dokumentation (auf Englisch!). Dort finden Sie Links und
Beispiele zum Thema ADR.

# Qualitätsanforderungen

<div class="formalpara-title">

**Inhalt**

</div>

Dieser Abschnitt enthält möglichst alle Qualitätsanforderungen als
Qualitätsbaum mit Szenarien. Die wichtigsten davon haben Sie bereits in
Abschnitt 1.2 (Qualitätsziele) hervorgehoben.

Nehmen Sie hier auch Qualitätsanforderungen geringerer Priorität auf,
deren Nichteinhaltung oder -erreichung geringe Risiken birgt.

<div class="formalpara-title">

**Motivation**

</div>

Weil Qualitätsanforderungen die Architekturentscheidungen oft maßgeblich
beeinflussen, sollten Sie die für Ihre Stakeholder relevanten
Qualitätsanforderungen kennen, möglichst konkret und operationalisiert.

<div class="formalpara-title">

**Weiterführende Informationen**

</div>

Siehe [Qualitätsanforderungen](https://docs.arc42.org/section-10/) in
der online-Dokumentation (auf Englisch!).

## Qualitätsbaum

<div class="formalpara-title">

**Inhalt**

</div>

Der Qualitätsbaum (à la ATAM) mit Qualitätsszenarien an den Blättern.

<div class="formalpara-title">

**Motivation**

</div>

Die mit Prioritäten versehene Baumstruktur gibt Überblick über
die — oftmals zahlreichen — Qualitätsanforderungen.

-   Baumartige Verfeinerung des Begriffes „Qualität“, mit „Qualität“
    oder „Nützlichkeit“ als Wurzel.

-   Mindmap mit Qualitätsoberbegriffen als Hauptzweige

In jedem Fall sollten Sie hier Verweise auf die Qualitätsszenarien des
folgenden Abschnittes aufnehmen.

## Qualitätsszenarien

<div class="formalpara-title">

**Inhalt**

</div>

Konkretisierung der (in der Praxis oftmals vagen oder impliziten)
Qualitätsanforderungen durch (Qualitäts-)Szenarien.

Diese Szenarien beschreiben, was beim Eintreffen eines Stimulus auf ein
System in bestimmten Situationen geschieht.

Wesentlich sind zwei Arten von Szenarien:

-   Nutzungsszenarien (auch bekannt als Anwendungs- oder
    Anwendungsfallszenarien) beschreiben, wie das System zur Laufzeit
    auf einen bestimmten Auslöser reagieren soll. Hierunter fallen auch
    Szenarien zur Beschreibung von Effizienz oder Performance. Beispiel:
    Das System beantwortet eine Benutzeranfrage innerhalb einer Sekunde.

-   Änderungsszenarien beschreiben eine Modifikation des Systems oder
    seiner unmittelbaren Umgebung. Beispiel: Eine zusätzliche
    Funktionalität wird implementiert oder die Anforderung an ein
    Qualitätsmerkmal ändert sich.

<div class="formalpara-title">

**Motivation**

</div>

Szenarien operationalisieren Qualitätsanforderungen und machen deren
Erfüllung mess- oder entscheidbar.

Insbesondere wenn Sie die Qualität Ihrer Architektur mit Methoden wie
ATAM überprüfen wollen, bedürfen die in Abschnitt 1.2 genannten
Qualitätsziele einer weiteren Präzisierung bis auf die Ebene von
diskutierbaren und nachprüfbaren Szenarien.

<div class="formalpara-title">

**Form**

</div>

Entweder tabellarisch oder als Freitext.

# Risiken und technische Schulden

<div class="formalpara-title">

**Inhalt**

</div>

Eine nach Prioritäten geordnete Liste der erkannten Architekturrisiken
und/oder technischen Schulden.

> Risikomanagement ist Projektmanagement für Erwachsene.
>
> —  Tim Lister Atlantic Systems Guild

Unter diesem Motto sollten Sie Architekturrisiken und/oder technische
Schulden gezielt ermitteln, bewerten und Ihren Management-Stakeholdern
(z.B. Projektleitung, Product-Owner) transparent machen.

<div class="formalpara-title">

**Form**

</div>

Liste oder Tabelle von Risiken und/oder technischen Schulden, eventuell
mit vorgeschlagenen Maßnahmen zur Risikovermeidung, Risikominimierung
oder dem Abbau der technischen Schulden.

Siehe [Risiken und technische
Schulden](https://docs.arc42.org/section-11/) in der
online-Dokumentation (auf Englisch!).

# Glossar

<div class="formalpara-title">

**Inhalt**

</div>

Die wesentlichen fachlichen und technischen Begriffe, die Stakeholder im
Zusammenhang mit dem System verwenden.

Nutzen Sie das Glossar ebenfalls als Übersetzungsreferenz, falls Sie in
mehrsprachigen Teams arbeiten.

<div class="formalpara-title">

**Motivation**

</div>

Sie sollten relevante Begriffe klar definieren, so dass alle Beteiligten

-   diese Begriffe identisch verstehen, und

-   vermeiden, mehrere Begriffe für die gleiche Sache zu haben.

Zweispaltige Tabelle mit \<Begriff> und \<Definition>.

Eventuell weitere Spalten mit Übersetzungen, falls notwendig.

Siehe [Glossar](https://docs.arc42.org/section-12/) in der
online-Dokumentation (auf Englisch!).

| Begriff        | Definition        |
|----------------|-------------------|
| *\<Begriff-1>* | *\<Definition-1>* |
| *\<Begriff-2*  | *\<Definition-2>* |
