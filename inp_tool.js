let worstInteraction = { duration: 0 }; // Speichert die schlechteste Interaktion

function sendINPData(data) {
    //hier könnten die Daten an einem Server gesendet werden.
    //console.log("Sending INP data to server:", data);
}

// Funktion zur Aktualisierung der Tabelle
function updateTable(interaction, timeStamp, url) {
    const tableBody = document.querySelector('#inp-table tbody');
    if (!tableBody) {
        console.error("Tabelle nicht gefunden!");
        return;
    }

    // Lösche bestehende Zeilen, um nur den schlechtesten Wert anzuzeigen
    tableBody.innerHTML = '';

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${interaction.name || 'Unknown Event'}</td>
        <td>${interaction.duration.toFixed(2)} ms</td>
        <td>${timeStamp}</td>
        <td>${interaction.elementId || 'No ID'}</td>
        <td>${url}</td>
    `;

    tableBody.appendChild(row);
    //console.log("Updated Table with:", interaction);
}

// Observer zur Erfassung der INP-Daten
const observer = new PerformanceObserver((list) => {
    //console.log("PerformanceObserver triggered.");
    for (const entry of list.getEntries()) {
        //console.log("Observed Entry:", entry);

        // Speichere relevante Events
        const currentInteraction = {
            name: entry.name || "Unknown Event",
            startTime: entry.startTime,
            duration: entry.duration,
            elementId: entry.target?.id || "No ID"
        };

        // Aktualisiere nur, wenn die neue Interaktion schlechter ist
        if (currentInteraction.duration > worstInteraction.duration) {
            worstInteraction = currentInteraction;

            const inpData = {
                longestInteraction: worstInteraction,
                timeStamp: new Date().toISOString(),
                url: window.location.href // URL der aktuellen Seite
            };

            //console.log("Updated Worst INP:", inpData);
            sendINPData(inpData); // Optional: Daten an Server senden
            updateTable(worstInteraction, inpData.timeStamp, inpData.url); // Tabelle aktualisieren
        }
    }
});

// Observer starten
try {
    observer.observe({ type: 'event', buffered: true });
   // console.log("Observer gestartet!");
} catch (error) {
    console.error("PerformanceObserver Fehler:", error);
}