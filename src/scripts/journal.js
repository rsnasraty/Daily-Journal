import API from "../data.js";
import renderJournalEntries from "../entriesDOM.js";
import createNewEntry from "../scripts/createEntry.js"

const recordEntry = document.querySelector("#record_Entry");
//get record Entry button from index

recordEntry.addEventListener("click",  function () {
    //select input fields in the eventListener
    const dateInput = document.querySelector("#Date");
    const conceptsInput = document.querySelector("#Concepts");
    const entryInput = document.querySelector("#Entry");
    const moodInput = document.querySelector("#Mood");
  
    //calls upon the factory function here
    const newEntry = createNewEntry(dateInput.value, conceptsInput.value, entryInput.value, moodInput.value)
    //value property gets the text you type/choose 



    API.recordJournalEntry(newEntry)
    .then(API.fetchEntries).then(renderJournalEntries)
      
});

API.fetchEntries().then(renderJournalEntries);