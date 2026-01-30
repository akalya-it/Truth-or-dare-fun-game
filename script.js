// ===== Players =====
let players = ["Kalaiselvi","Ashika","Roshini","Bhargavi","Kamali","Amirtha","Anugraha","Akalya"];
let currentPlayerIndex = 0;

// ===== 50 Fun Truths =====
const truths = [
    "If you could be any animal for a day, what would you be?",
    "What's your favorite joke or pun?",
    "If you could swap lives with a cartoon character, who would it be?",
    "What's the silliest thing you've done for fun?",
    "If you could have a superpower, what would it be?",
    "What's your favorite snack?",
    "What's the funniest thing you've seen recently?",
    "If you could instantly learn a dance move, what would it be?",
    "What's your favorite silly word or phrase?",
    "If you could only wear one color for a week, which would it be?",
    "What's the funniest dream you've ever had?",
    "What's your favorite meme or viral video?",
    "If you had to talk like a pirate for a day, what would you say first?",
    "What's the most unusual thing you like to eat?",
    "What's your go-to silly dance move?",
    "If you could invent a holiday, what would it be?",
    "What's your favorite cartoon character?",
    "If you could only eat one food for a week, what would it be?",
    "What's the funniest sound you can make?",
    "If you were a superhero, what would your costume look like?",
    "What's your favorite funny movie scene?",
    "Have you ever laughed at something silly and couldn’t stop?",
    "What's the funniest nickname you've ever had?",
    "If you could be invisible for a day, what would you do?",
    "What's your favorite funny animal video?",
    "If you could switch voices with anyone, who would it be?",
    "What's the silliest outfit you've ever worn?",
    "If you were a cartoon character, which one would you be?",
    "What's the funniest thing your pet has done?",
    "If you could talk to any animal, which would it be?",
    "What's your favorite playground game as a kid?",
    "What's the weirdest dream you remember?",
    "If you could be a character in a video game, who would you be?",
    "What's the funniest face you can make?",
    "What's your favorite funny emoji?",
    "What's your favorite funny dance video?",
    "If you could have any fictional pet, what would it be?",
    "What's the silliest thing you've done for attention?",
    "If you could prank someone harmlessly, what would you do?",
    "What's your favorite funny song?",
    "If you could be a superhero sidekick, who would you be?",
    "What's your favorite funny cartoon show?",
    "If you had a funny catchphrase, what would it be?",
    "What's the funniest game you played as a kid?",
    "What's your favorite funny TikTok or Reels trend?",
    "If you could swap voices with a cartoon character, who?",
    "What's the funniest joke you know?",
    "What's your favorite silly hat or costume?",
    "What's the silliest thing you've drawn or doodled?"
];

// ===== 50 Fun Dares =====
const dares = [
    "Do a funny dance for 10 seconds.",
    "Make your best silly face and hold it for 5 seconds.",
    "Talk in a funny accent for 30 seconds.",
    "Pretend you're a robot walking around for 10 seconds.",
    "Sing a random line from a song in a dramatic voice.",
    "Do your best animal impression for 10 seconds.",
    "Speak like a movie villain for 10 seconds.",
    "Try to balance on one foot for 5 seconds.",
    "Pretend to be a superhero striking a pose.",
    "Make a funny sound effect for 5 seconds.",
    "Act like your favorite cartoon character for 10 seconds.",
    "Say a tongue twister three times fast.",
    "Pretend you're underwater and can't talk for 5 seconds.",
    "Do a dramatic slow-motion run across the room.",
    "Pretend to be invisible and sneak around for 5 seconds.",
    "Do a silly dance move you just made up.",
    "Walk like a crab for 10 seconds.",
    "Do a funny handshake with yourself.",
    "Pretend you're on a cooking show for 10 seconds.",
    "Make up a silly rap about your favorite food.",
    "Pretend to be a monkey eating a banana.",
    "Do 5 jumping jacks while making funny noises.",
    "Speak in rhymes for 30 seconds.",
    "Pretend to be a cat stretching.",
    "Make a funny hat using your hands and wear it.",
    "Spin in a circle and try to walk straight.",
    "Pretend to be a superhero flying.",
    "Act like a zombie for 10 seconds.",
    "Do your best funny laugh out loud.",
    "Pretend to be a DJ scratching music.",
    "Make a funny handshake with a friend or yourself.",
    "Pretend to be a mermaid or merman for 10 seconds.",
    "Do a silly walk across the room.",
    "Pretend to juggle invisible balls.",
    "Act like a baby laughing.",
    "Make a funny face and hold it for 10 seconds.",
    "Pretend to be a character from your favorite cartoon.",
    "Do 5 push-ups but make funny noises.",
    "Act like a superhero saving someone.",
    "Pretend to be a statue for 10 seconds.",
    "Make a silly commercial for an imaginary product.",
    "Pretend to ride a horse around the room.",
    "Act like a chicken for 10 seconds.",
    "Do your best dance from a movie scene.",
    "Pretend your hands are puppets and have a conversation.",
    "Do a funny runway walk across the room.",
    "Pretend you're a famous singer performing live.",
    "Make up a funny handshake and perform it.",
    "Pretend to be a wizard casting a spell.",
    "Act like a robot doing chores.",
    "Do a silly slow-motion fall and get back up."
];

// ===== Current Question =====
let currentQuestion = "";

// ===== Initialize Game =====
window.onload = () => {
    updateCurrentPlayer();
};

// ===== Update Player =====
function updateCurrentPlayer() {
    document.getElementById("currentPlayer").innerText = players[currentPlayerIndex] + "'s turn!";
    document.getElementById("result").innerText = "";
    currentQuestion = "";
}

// ===== Get Random Truth =====
function getTruth() {
    const randomIndex = Math.floor(Math.random() * truths.length);
    currentQuestion = "Truth: " + truths[randomIndex];
    displayResult();
}

// ===== Get Random Dare =====
function getDare() {
    const randomIndex = Math.floor(Math.random() * dares.length);
    currentQuestion = "Dare: " + dares[randomIndex];
    displayResult();
}

// ===== Get Another Question =====
function getAnother() {
    if (!currentQuestion) {
        alert("Choose Truth or Dare first!");
        return;
    }
    if (currentQuestion.startsWith("Truth")) {
        getTruth();
    } else {
        getDare();
    }
}

// ===== Skip Player =====
function skipPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateCurrentPlayer();
}

// ===== Display Result =====
function displayResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = players[currentPlayerIndex] + " - " + currentQuestion;
    resultDiv.style.opacity = 0;
    setTimeout(() => { resultDiv.style.opacity = 1; }, 100);
}
