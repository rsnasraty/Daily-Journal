const API = {
    fetchEntries() {
        const entryLink = "http://localhost:3000/entries"
        return fetch(entryLink)
        .then(resp => resp.json()) 
    }

  
}

//Api Access Module
// This code defines how to access the data