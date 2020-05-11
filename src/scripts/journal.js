import API from "../data.js";
import renderJournalEntries from "../entriesDOM.js";


//Factory Function to make the new entry
const createNewEntry = (date, concepts, entry, mood) => {
    return {
    'date': dateInput.value,
    'concepts': conceptsInput.value,
    'entry': entryInput.value,
    'mood': moodInput.value
  }

}

const recordEntry = document.querySelector("#record_Entry");
//get record Entry button from index


recordEntry.addEventListener("click", () => {

const dateInput = document.querySelector("#Date");
const conceptsInput = document.querySelector("#Concepts");
const entryInput = document.querySelector("#Entry");
const moodInput = document.querySelector("#Mood");


//calls upon the factory function here
const newEntry = createNewEntry(dateInput.value, conceptsInput.value, entryInput.value, moodInput.value)


API.saveJournalEntry(newEntry)
   .then(API.fetchEntries)
   .then(renderJournalEntries);
})




API.fetchEntries().then(renderJournalEntries); 

