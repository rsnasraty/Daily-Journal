import API from "../data.js";
import renderJournalEntries from "../entriesDOM.js";

API.fetchEntries().then(renderJournalEntries);

const addRecordEntryEventListener = () => {
    const recordEntry = document.querySelector("record_Entry");

    recordEntry.addEventListener("click", () => {
        const dateInput = document.getElementById("Date");
        const conceptsInput = document.getElementById("Concepts");
        const entryInput = document.getElementById("Entry");
        const moodInput = document.getElementById("Mood");

      