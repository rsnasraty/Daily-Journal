const journalEntryCollection = [
  {
    date: "4-17-2020",
    concepts: "Javascript Objects and Arrays",
    entry:
      "We just finished the first group project and are now beginning javascript.",
    mood: "Calm"
  },
  {
    date: "04/16/20",
    concepts: "Finished Group Projects and Began Javascript",
    entry:
      "We all presented our Celebrity Tribute Group Projects and then started to discuss Javascript in class.",
    mood: "Tired"
  },
  {
    date: "04/15/20",
    concepts: "Last Day of Celebrity Tribute",
    entry:
      "My group worked together to put together our Celebrity Tribute project. We chose David Bowie.",
    mood: "Determined"
  }
];

const makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  return `
   <p class="date">:${journalEntry.date}</p>
   <p class="concept">${journalEntry.concept}</p>
   <p class="entry">${journalEntry.entry}</p>
   <p class="mood">Current Mood:${journalEntry.mood}</p>
 
   `
};

const entryLog = document.querySelector(".entryLog")

const renderJournalEntries = (entries) => {
   
for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    entryLog.innerHTML += makeJournalEntryComponent(entry)
    }}


renderJournalEntries(entries);

/* const pushEntry = function(entry) {
  journalEntryCollection.push(entry);
};

pushEntry(journalEntry);
pushEntry(journalEntry2);
pushEntry(journalEntry3);
console.log(journalEntryCollection);
 */