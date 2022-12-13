const data = [
    {
        name: "Lelah Nichols",
        loc: "Troy, MI",
        img: "./images/nichol.png",
        tags: ["clothes", "stem"],
    },
    {
        name: "Jesus Weiss",
        loc: "Fort Worth, TX",
        img: "./images/jesus.png",
        tags: ["headset", "gadget", "speed", "winter"],
    },
    {
        name: "Annie Rice",
        loc: "Austin, TX",
        img: "./images/annie.png",
        tags: ["road", "mountain", "trip", "earth", "nature"],
    },
    {
        name: "Robert Brower",
        loc: "Cincinnati, OH",
        img: "./images/robert.png",
        tags: ["Maintenance", "games", "frames", "repair"],
    },
    {
        name: "Amy Campbell",
        loc: "Warrior, AL",
        img: "./images/amy.png",
        tags: ["music", "disks"],
    },
    {
        name: "Anthony S. Morin",
        loc: "Lyndhurst, NJ",
        img: "./images/anthony.png",
        tags: ["vintage", "electric"],
    },
];

let container = document.getElementById("components");

const createPerson = (data) => {
    container.innerHTML = "";
    data.forEach((person) => {
        let collectTags = "";
        person.tags.forEach((tag) => {
            collectTags += `<div class="tag">${tag}</div>`;
        });
        container.innerHTML += `
        <div class="persons">
            
            <div class="image">
                        <img src="${person.img}" alt="" />
                    </div>
                    <div class="info">
                    
                        <div class="name">${person.name}</div>
                        <div class="tags">
                            ${collectTags}
                        </div>
                    </div>
        </div>
        `;
    });
};

createPerson(data);
