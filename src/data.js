const API = {
    fetchEntries() {
        const entryLink = "http://localhost:3000/entries"
        return fetch(entryLink)
            .then(resp => resp.json())
    },   
        recordJournalEntry(entry) {
        return fetch(entryLink, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    }
};
//Api Access Module
// This code defines how to access the data

export default API