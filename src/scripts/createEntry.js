//Factory Function to make the new entry

const createNewEntry = (dateInput, conceptsInput, entryInput, moodInput) => {
    return {
        "date": dateInput.value,
        "concepts": conceptsInput.value,
        "entry": entryInput.value,
        "mood": moodInput.value
    }
}

export default createNewEntry