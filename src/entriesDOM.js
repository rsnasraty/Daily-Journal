import makeJournalEntry from "../src/entryComponent.js"


const renderJournalEntries = (entries) => {
  const container = document.querySelector(".entryLog");
  container.innerHTML= "";

  entries.forEach(entry => {
    const entryHtml = makeJournalEntry(entry);
    container.innerHTML += entryHtml;
    
  });
};

export default renderJournalEntries