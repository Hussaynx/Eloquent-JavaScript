function journalEvents(journal){
    let events = [];
    for (let entry of journal){
        for (let event of entry.events) {
            if (!events.includes(event)){
                event.push(event);
            }
        }
    }
    return events;
}

let journal = [
    {events: ["work","touched tree", "pizza",
         "running", "television"],
    squirrel: false
    },

    {events: ["work","ice cream","cauliflower",
        "lasagna", "touched tree", "brushed tree"
    ],
    squirrel: false
    },

    {events: ["weekend", "cycling", "break" , "peanuts",
        "bear"],
    squirrel: true
    },
    
];

console.log(journalEvents(journal))