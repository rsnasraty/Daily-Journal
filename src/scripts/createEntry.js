//Factory Function to make the new entry

const createNewEntry = (date, concepts, entry, mood) => {
    return {
        "date": date,
        "concepts": concepts,
        "entry": entry,
        "mood": mood
    }
}

export default createNewEntry