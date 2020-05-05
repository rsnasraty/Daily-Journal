const makeJournalEntry = (entry) => {
  return `
    <h3><b>Today's Entry</b></h3>
    <p class="date">${entry.date}</p>
    <p class="concepts">${entry.concepts}</p>
    <p class="entry">${entry.entry}</p>
    <p class="mood">Current Mood: ${entry.mood}</p>
    `
};

export default makeJournalEntry