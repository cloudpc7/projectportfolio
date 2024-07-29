let names = ["Angie", "Mary", "Julie", "Hailey", "Missy", "Jules", "Kacy", "Denise", "Jojo"];
let goodWifey = ["Angie", "Julie", "Hailey"];
const maxTries = 3;
let attempts = 0;

function whoIsMyWife(names) {
    var numberOfPeople = names.length;
    var randomWifey = Math.floor(Math.random() * numberOfPeople); // Fixing the random index generation
    var randomPerson = names[randomWifey];
    return randomPerson + " is going to be your wife!";
}   

function shootYourShot() {
    if (attempts >= maxTries) {
        alert("Sorry! You have not found your soulmate. Try again next lifetime!");
        return;
    }

    const randomWifey = whoIsMyWife(names).split(' ')[0]; // Extracting the name part
    attempts++;

    if (goodWifey.includes(randomWifey)) {
        alert(`You are marrying ${randomWifey}. Congratulations. She speaks life into your purpose so you may fulfill your dharma in this lifetime. She holds space for your pain and your growing pains. She is there by your side when the going gets tough. You live a long fulfilling life with her, she is loyal, you trust her, and the sex is great!`);
        attempts = 0;
    } else {
        alert(`You are marrying ${randomWifey}. Unfortunately, she only wanted you to elevate her status and your money. She had multiple affairs behind your back, embezzled your money, and even attempted to hire a hitman to kill you for the insurance money. Luckily, you hired a private detective who foiled the assassination attempt by bribing the hitman with a higher bid and turned her in.`);
        if (attempts < maxTries) {
            alert(`You have ${maxTries - attempts} more tries.`);
        } else {
            alert("You died! You were assassinated by her hitman and she ran off with your money with a stud in his early twenties, an up and coming movie star. Better luck next lifetime!");
        }
    }
}
