# Bachelorarbeit - INP-Messung und Optimierung

Repository für meine Bachelorarbeit. Dieses Projekt beinhaltet den JavaScript-Code zur Messung und Analyse der **Interaction to Next Paint (INP)**-Metrik. Das Ziel ist es, die Benutzerfreundlichkeit und Performance von Webseiten durch die Erfassung und Optimierung kritischer Interaktionsdaten zu verbessern.

## Projektbeschreibung

Das Script überwacht Interaktionen auf einer Webseite und ermittelt die längste Interaktion (worst-case INP). Diese Daten werden verwendet, um Schwachstellen in der Web-Performance zu identifizieren und gezielte Optimierungsmaßnahmen vorzunehmen.
Dieses Script wurde im Rahmen meiner Bachelorarbeit entwickelt, die sich mit dem Thema "Inwieweit beeinflusst die Metrik Interaction to Next Paint (INP) die Nutzererfahrung und Suchmaschinenoptimierung (SEO) von E-Commerce-Webseiten im Vergleich zu vorherigen Performance-Metriken, und welche spezifischen Maßnahmen können zur Optimierung der INP-Werte implementiert werden?" auseinandersetzt. Ziel des Projekts ist es, praktische Ansätze zur Optimierung von INP-Werten zu entwickeln, um die Benutzererfahrung und die Sichtbarkeit in Suchmaschinen nachhaltig zu verbessern.

### Hauptfunktionen
1. **PerformanceObserver**: Überwacht Interaktionen und zeichnet relevante Daten auf.
2. **Datenvisualisierung**: Aktualisiert eine HTML-Tabelle mit den Informationen zur schlechtesten Interaktion.
3. **Datenexport**: Optional können die INP-Daten an einen Server gesendet werden (vorbereitet, aktuell auskommentiert).

---

## Dateistruktur

- `index.html`: Enthält eine Beispielseite, die mit dem Script aus `script.js` ausgestattet ist, um die INP-Messung direkt zu testen. Die HTML-Datei enthält auch eine Tabelle zur Anzeige der Ergebnisse.
- `inp_tool.js`: Implementiert den Hauptcode für die INP-Messung. Der Code ist so gestaltet, dass er leicht erweiterbar ist und unabhängig von lokalen Elementen funktioniert.
- `style.css`: Optional, für die Gestaltung der HTML-Tabelle.

---

## Voraussetzungen

Für die Nutzung dieses Scripts wird keine zusätzliche Installation benötigt. Es läuft direkt im Browser und erfordert lediglich eine aktuelle Version, die die `PerformanceObserver`-API unterstützt (z. B. Chrome, Edge).

---

## Installation und Verwendung

1. Klonen Sie das Repository:
   ```bash
   git clone https://github.com/dein-repo/bachelorarbeit.git
