import makeJournalEntry from "../src/entryComponent.js"


const renderJournalEntries = (entries) => {
  const container = document.querySelector(".entryLog");
  entries.forEach(entry => {

    const date = document.getElementById("Date");
    const concepts = document.getElementById("Concepts");
    const entry = document.getElementById("Entry");
    const mood= document.getElementById("Mood");

    date.value = "",
    concepts.value = "",
    entry.value = "",
    mood.value = "",

    container.innerHTML = "";

entries.forEach(entry => {
    const entryCode = makeJournalEntry(entry);
    container.innerHTML += entryCode;
  });

  })};

export default renderJournalEntries