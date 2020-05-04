
const makeJournalEntry = (entry) => {
  return `
  <h3><b>Today's Entry</b></h3>
  <p class="date">${entry.date}</p>
  <p class="concepts">${entry.concepts}</p>
  <p class="entry">${entry.entry}</p>
  <p class="mood">Current Mood: ${entry.mood}</p>
  `
};

const renderJournalEntries = (entries) => {
  const container = document.querySelector(".entryLog");
  entries.forEach(entry => {
    const entryCode = makeJournalEntry(entry);
    container.innerHTML += entryCode;
  });
};

const fetchEntries = () => {
  const entryLink = "http://localhost:3000/entries"
  fetch(entryLink) // Fetch from the API
    .then(resp => resp.json()) // Parse as JSON
    .then(entries => {
      renderJournalEntries(entries);
    });

};

fetchEntries();
