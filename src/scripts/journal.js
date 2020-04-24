const journalEntries = [
   {
      date: "4-17-2020",
      concepts: "Javascript Objects and Arrays",
      entry: "We just finished the first group project and are now beginning javascript.",
      mood: "Calm"
   },
   {
      date: "04/16/20",
      concepts: "Finished Group Projects and Began Javascript",
      entry: "We all presented our Celebrity Tribute Group Projects and then started to discuss Javascript in class.",
      mood: "Tired"
   },
   {
      date: "04/15/20",
      concepts: "Last Day of Celebrity Tribute",
      entry: "My group worked together to put together our Celebrity Tribute project. We chose David Bowie.",
      mood: "Determined"
   }
];

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


renderJournalEntries(journalEntries);