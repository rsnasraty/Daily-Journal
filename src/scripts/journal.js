import API from "../data.js"
import renderJournalEntries from "../entriesDOM.js"

API.fetchEntries().then(renderJournalEntries);
