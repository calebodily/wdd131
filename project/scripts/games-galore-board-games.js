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
        players: "1, 2, 3, 4, 5",
        age: "12+",
        time: 120,
        keywords: "hand management, cooperative, team based, hidden roles, asymetric, dice",
        imageUrl:
            "images/nemesis-cover.webp"
    },
    {
        boardGame: "Pounce",
        players: "2, 3, 4, 5, 6",
        age: "8+",
        time: 20,
        keywords: "word",
        imageUrl:
            "images/pounce-cover.webp"
    },
    {
        boardGame: "Signal",
        players: "2, 3, 4, 5, 6",
        age: "10+",
        time: 15,
        keywords: "cooperative, deduction",
        imageUrl:
            "images/signal-cover.webp"
    },
    {
        boardGame: "Silver and Gold",
        players: "2, 3, 4",
        age: "8+",
        time: 20,
        keywords: "set collection, paper and pencil",
        imageUrl:
            "images/silver-and-gold-cover.webp"
    },
    {
        boardGame: "Spooktacular",
        players: "1, 2, 3, 4, 5",
        age: "12+",
        time: 45,
        keywords: "set collection, asymetric",
        imageUrl:
            "images/spooktacular-cover.webp"
    },
    {
        boardGame: "Stardew Valley the Board Game",
        players: "1, 2, 3, 4",
        age: "13+",
        time: 100,
        keywords: "cooperative, dice, worker placement",
        imageUrl:
            "images/stardew-valley-the-board-game-cover.webp"
    },
    {
        boardGame: "Thats Not a Hat",
        players: "3, 4, 5, 6, 7, 8",
        age: "8+",
        time: 15,
        keywords: "cards, memory, bluffing",
        imageUrl:
            "images/thats-not-a-hat-cover.webp"
    },
    {
        boardGame: "The Crew: The Quest for Planet Nine",
        players: "2, 3, 4, 5",
        age: "10+",
        time: 20,
        keywords: "cooperative, hand management, trick-taking",
        imageUrl:
            "images/the-crew-quest-planet-nine-cover.webp"
    },
    {
        boardGame: "The Gang",
        players: "3, 4, 5, 6",
        age: "10+",
        time: 20,
        keywords: "cooperative, deduction",
        imageUrl:
            "images/the-gang-cover.webp"
    },
    {
        boardGame: "This or That",
        players: "2, 3, 4, 5, 6, 7, 8, 9, 10",
        age: "6+",
        time: 30,
        keywords: "cards",
        imageUrl:
            "images/this-or-that-cover.webp"
    },
    {
        boardGame: "Three-Dragon Ante",
        players: "2, 3, 4, 5, 6",
        age: "14+",
        time: 30,
        keywords: "cards, trick-taking, set collection, hand management",
        imageUrl:
            "images/three-dragon-ante-cover.webp"
    },
    {
        boardGame: "Throw Throw Buritto",
        players: "2, 3, 4, 5, 6",
        age: "7+",
        time: 15,
        keywords: "cards, set collection",
        imageUrl:
            "images/throw-throw-burrito-cover.webp"
    },
    {
        boardGame: "Thunderroad Vendetta",
        players: "2, 3, 4",
        age: "10+",
        time: 60,
        keywords: "dice, area movement",
        imageUrl:
            "images/thunderroad-vendetta-cover.webp"
    },
    {
        boardGame: "Toy Battle",
        players: "2",
        age: "8+",
        time: 15,
        keywords: "area control",
        imageUrl:
            "images/toy-battle-cover.webp"
    },
    {
        boardGame: "Ultimate Werewolf",
        players: "5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22+",
        age: "14+",
        time: 30,
        keywords: "team based, asymetric, bluffing, deduction",
        imageUrl:
            "images/ultimate-werewolf-cover.webp"
    },
    {
        boardGame: "Uno",
        players: "2, 3, 4, 5, 6, 7, 8, 9, 10",
        age: "6+",
        time: 30,
        keywords: "hand management, cards",
        imageUrl:
            "images/uno-cover.webp"
    },
    {
        boardGame: "Uno Show Em No Mercy",
        players: "2, 3, 4, 5, 6",
        age: "7+",
        time: 22,
        keywords: "hand management, cards",
        imageUrl:
            "images/uno-show-em-no-mercy-cover.webp"
    },
    {
        boardGame: "What Next?",
        players: "1, 2, 3, 4",
        age: "10+",
        time: 45,
        keywords: "cooperative, dexterity",
        imageUrl:
            "images/what-next-cover.webp"
    },
    {
        boardGame: "Wink",
        players: "3, 4, 5, 6, 7, 8",
        age: "8+",
        time: 20,
        keywords: "cards",
        imageUrl:
            "images/wink-cover.webp"
    }

];

function BoardGamesCard(filteredBoardGames) {
    const container = document.querySelector(".card");
    container.innerHTML = "";
    filteredBoardGames.forEach(boardGame => {
        let card = document.createElement("section");
        card.classList.add("game-card");
        let name = document.createElement("h1");
        let players = document.createElement("p")
        let age = document.createElement("p")
        let time = document.createElement("p");
        let keywords = document.createElement("p")
        let img = document.createElement("img");

        name.textContent = boardGame.boardGame;
        players.textContent = `Players: ${boardGame.players}`;
        age.textContent = `Age Rating: ${boardGame.age}`;
        time.textContent = `Time: ${boardGame.time} minutes`;
        keywords.textContent = `Keywords: ${boardGame.keywords}`
        img.setAttribute("src", boardGame.imageUrl);
        img.setAttribute("alt", `${boardGame.boardGame}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(players);
        card.appendChild(age);
        card.appendChild(time);
        card.appendChild(keywords);
        card.appendChild(img);

        document.querySelector(".card").appendChild(card);
    });
}

BoardGamesCard(boardGames);


const oneplayer = document.getElementById("1player");
oneplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("1")));
})

const twoplayer = document.getElementById("2players");
twoplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("2")));
})

const threeplayer = document.getElementById("3players");
threeplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("3")));
})

const fourplayer = document.getElementById("4players");
fourplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("4")));
})

const fiveplayer = document.getElementById("5players");
fiveplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("5")));
})

const sixplayer = document.getElementById("6players");
sixplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("6")));
})

const sevenplusplayer = document.getElementById("7+players");
sevenplusplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").some(player => {
            const number = parseInt(player);
            return number >= 7;
        })))
})

const age6 = document.getElementById("age6+");
age6.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 6;
    }))
})

const age8 = document.getElementById("age8+");
age8.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 8;
    }))
})

const age10 = document.getElementById("age10+");
age10.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 10;
    }))
})

const age12 = document.getElementById("age12+");
age12.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 12;
    }))
})

const abstract = document.getElementById("abstract");
abstract.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("abstract")}));
})

const actionretrieval = document.getElementById("actionretrieval");
actionretrieval.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("action retrieval")
    }));
})

const actionpoints = document.getElementById("actionpoints");
actionpoints.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("action points")
    }));
})

const alliances = document.getElementById("alliances");
alliances.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("alliances")
    }));
})

const areacontrol = document.getElementById("areacontrol");
areacontrol.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("area control")
    }));
})

const areamovement = document.getElementById("areamovement");
areamovement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("area movement")
    }));
})

const asymetric = document.getElementById("asymetric");
asymetric.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("asymetric")
    }));
})

const bidding = document.getElementById("bidding");
bidding.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("bidding")
    }));
})

const bluffing = document.getElementById("bluffing");
bluffing.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("bluffing")
    }));
})

const cards = document.getElementById("cards");
cards.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("cards")
    }));
})

const cooperative = document.getElementById("cooperative");
cooperative.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("cooperative")
    }));
})

const deduction = document.getElementById("deduction");
deduction.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("deduction")
    }));
})

const dexterity = document.getElementById("dexterity");
dexterity.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("dexterity")
    }));
})

const dice = document.getElementById("dice");
dice.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("dice")
    }));
})

const handmanagement = document.getElementById("handmanagement");
handmanagement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("hand management")
    }));
})

const hiddenroles = document.getElementById("hiddenroles");
hiddenroles.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("hidden roles")
    }));
})

const income = document.getElementById("income");
income.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("income")
    }));
})

const market = document.getElementById("market");
market.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("market")
    }));
})

const memory = document.getElementById("memory");
memory.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("memory")
    }));
})

const paperpencil = document.getElementById("paperpencil");
paperpencil.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("paper and pencil")
    }));
})

const pushyourluck = document.getElementById("pushyourluck");
pushyourluck.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("push your luck")
    }));
})

const setcollection = document.getElementById("setcollection");
setcollection.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("set collection")
    }));
})

const teambased = document.getElementById("teambased");
teambased.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("team based")
    }));
})

const tileplacement = document.getElementById("tileplacement");
tileplacement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("tile placement")
    }));
})

const tricktaking = document.getElementById("trick-taking");
tricktaking.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("trick-taking")
    }));
})

const word = document.getElementById("word");
word.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("word")
    }));
})

const workerplacement = document.getElementById("workerplacement");
workerplacement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("worker placement")
    }));
})