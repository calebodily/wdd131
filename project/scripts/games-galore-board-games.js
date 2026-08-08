const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = document.lastModified;


const ham = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

ham.addEventListener("click", () => {
    navigation.classList.toggle("open");
    ham.classList.toggle("open");
});


const boardGames = [
    {
        boardGame: "Ankh Gods of Egypt",
        players: "2, 3, 4, 5",
        age: "14+",
        time: 90,
        keywords: "action retrieval, alliances, area control, asymetric, bidding",
        imageUrl:
            "images/ankh-gods-of-egypt-cover.webp"
    },
    {
        boardGame: "Beacon Patrol",
        players: "1, 2, 3, 4",
        age: "8+",
        time: 45,
        keywords: "cooperative, tile placement",
        imageUrl:
            "images/beacon-patrol-cover.webp"
    },
    {
        boardGame: "Beat the Heat",
        players: "2, 3, 4, 5, 6, 7, 8, 9, 10",
        age: "8+",
        time: 20,
        keywords: "cards",
        imageUrl:
            "images/beat-the-heat-cover.webp"
    },
    {
        boardGame: "Blood on the Clocktower",
        players: "6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21",
        age: "15+",
        time: 90,
        keywords: "bluffing, hidden roles, asymetric, team-based, deduction",
        imageUrl:
            "images/blood-on-the-clocktower-cover.webp"
    },
    {
        boardGame: "Casting Shadows",
        players: "2, 3, 4",
        age: "12+",
        time: 45,
        keywords: "action points, area movement",
        imageUrl:
            "images/casting-shadows-cover.webp"
    },
    {
        boardGame: "Catan",
        players: "3, 4",
        age: "10+",
        time: 90,
        keywords: "dice, market",
        imageUrl:
            "images/catan-cover.webp"
    },
    {
        boardGame: "Citadels",
        players: "2, 3, 4, 5, 6, 7, 8",
        age: "10+",
        time: 45,
        keywords: "income",
        imageUrl:
            "images/citadels-cover.webp"
    },
    {
        boardGame: "Cosmolancer",
        players: "2, 3, 4",
        age: "9+",
        time: 45,
        keywords: "tile placement",
        imageUrl:
            "images/cosmolancer-cover.webp"
    },
    {
        boardGame: "Da Da Da",
        players: "2, 3, 4, 5, 6, 7, 8",
        age: "8+",
        time: 22,
        keywords: "cooperative, team based",
        imageUrl:
            "images/da-da-da-cover.webp"
    },
    {
        boardGame: "Excalibur",
        players: "2, 3, 4, 5, 6, 7, 8",
        age: "14+",
        time: 20,
        keywords: "bluffing, memory",
        imageUrl:
            "images/excalibur-cover.webp"
    },
    {
        boardGame: "Flip 7",
        players: "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18",
        age: "8+",
        time: 20,
        keywords: "cards, push your luck",
        imageUrl:
            "images/flip-7-cover.webp"
    },
    {
        boardGame: "Kabuto Sumo",
        players: "2, 3, 4",
        age: "8+",
        time: 15,
        keywords: "dexterity, asymetric",
        imageUrl:
            "images/kabuto-sumo-cover.webp"
    },
    {
        boardGame: "Mastermind",
        players: "2",
        age: "8+",
        time: 20,
        keywords: "abstract, deduction",
        imageUrl:
            "images/mastermind-cover.webp"
    },
    {
        boardGame: "Mixed Doubles",
        players: "2, 3, 4, 5, 6",
        age: "6+",
        time: 22,
        keywords: "dice, bluffing",
        imageUrl:
            "images/mixed-doubles-cover.webp"
    },
    {
        boardGame: "Muffin Time",
        players: "2, 3, 4, 5, 6, 7, 8",
        age: "13+",
        time: 30,
        keywords: "card, hand management",
        imageUrl:
            "images/muffin-time-cover.webp"
    },
    {
        boardGame: "Nemesis",
        // players: "2, 3, 4, 5, 6, 7, 8",
        // age: "13+",
        // time: 30,
        // keywords: "card, hand management",
        // imageUrl:
        //     "images/muffin-time-cover.webp"
    },
    
];

function TempleCard(filteredTemples) {
    const container = document.querySelector(".card");
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p")
        let dedication = document.createElement("p")
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Size: ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".card").appendChild(card);
    });
}

TempleCard(temples);


const oldlink = document.querySelector("#old");
oldlink.addEventListener("click", (event) => {
    event.preventDefault();
    TempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900));
})

const newlink = document.querySelector("#new");
newlink.addEventListener("click", (event) => {
    event.preventDefault();
    TempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000));
})

const largelink = document.querySelector("#large");
largelink.addEventListener("click", (event) => {
    event.preventDefault();
    TempleCard(temples.filter(temple => temple.area > 90000));
})

const smalllink = document.querySelector("#small");
smalllink.addEventListener("click", (event) => {
    event.preventDefault();
    TempleCard(temples.filter(temple => temple.area < 10000));
})