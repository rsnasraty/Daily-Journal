const journalEntry = {
date: "4-17-2020",
concepts:"Javascript Objects and Arrays",
entry:"We just finished the first group project and are now beginning javascript.",
mood:"Calm"
}

const journalEntry2 = {
    date: "04/16/20",
    concepts: "Finished Group Projects and Began Javascript",
    entry: "We all presented our Celebrity Tribute Group Projects and then started to discuss Javascript in class.",
    mood: "Tired"
 }
  
 const journalEntry3 = {
    date: "04/15/20",
    concepts: "Last Day of Celebrity Tribute",
    entry: "My group worked together to put together our Celebrity Tribute project. We chose David Bowie.",
    mood: "Determined"
 }
  
 const journalEntryCollection = [];
  
 const pushEntry = function (entry) {
    journalEntryCollection.push(entry);
 };
  
 pushEntry(journalEntry);
 pushEntry(journalEntry2);
 pushEntry(journalEntry3);
 console.log(journalEntryCollection);