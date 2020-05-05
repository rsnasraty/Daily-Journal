import makeJournalEntry from "../src/entryComponent.js"


const renderJournalEntries = (entries) => {
  const container = document.querySelector(".entryLog");
  entries.forEach(entry => {
    const entryCode = makeJournalEntry(entry);
    container.innerHTML += entryCode;
  });
};

export default renderJournalEntries