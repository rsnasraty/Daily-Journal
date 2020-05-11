const API = {
    fetchEntries() {
        return fetch("http://localhost:3000/entries")
            .then(resp => resp.json())
    },   
        recordJournalEntry(newEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    }
}; 
//Api Access Module
// This code defines how to access the data

export default API