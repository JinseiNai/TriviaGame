// Set variables
let randomQuestion;
let intervalId;
let timer = 10;
let wins = 0;
let losses = 0;
let images = ["assets/images/yes.gif", "assets/images/nope.gif"];
// Question object array
let questionArray = [{
    question: "What is the Italian word for pie?",
    answers: ["Pasta", "Pizza", "Piano", "Dutch"],
    correctAnswer: "Pizza",
}, {
    question: "What is the national flower of Wales?",
    answers: ["Clover", "Dahlia", "Daffodil", "Azalea"],
    correctAnswer: "Daffodil",
}, {
    question: "Which Australian marsupial enjoy eating eucalyptus leaves?",
    answers: ["Dingo", "Quoll", "Koala", "Kangaroo"],
    correctAnswer: "Koala",
}, {
    question: "In nautical terms, what is the opposite of port?",
    answers: ["Starboard", "Portside", "Land ho", "Plank"],
    correctAnswer: "Starboard",
}, {
    question: "Name the port of Rome",
    answers: ["Albania", "Ostia", "Cyprus", "Romania"],
    correctAnswer: "Ostia",
}, {
    question: "What was Marilyn Monroe's natural hair color?",
    answers: ["Blonde", "Ginger", "Brunette", "Black"],
    correctAnswer: "Ginger",
}, {
    question: "Which city does the River Lagan flow through?",
    answers: ["Beslow", "Berlin", "Belfast", "Prague"],
    correctAnswer: "Belfast",
}, {
    question: "What is one quarter of 1,000?",
    answers: [250, 25, 1250, 750],
    correctAnswer: 250,
}, {
    question: "How many sides, in total, would three triangles and three rectangles have?",
    answers: [24, 17, 21, 10],
    correctAnswer: 21,
}, {
    question: "When did the French Revolution end?",
    answers: [1899, 1679, 1809, 1799],
    correctAnswer: 1799,
}, {
    question: "Which ocean surrounds the Maldives?",
    answers: ["Pacific", "Atlantic", "Indian", "Artic"],
    correctAnswer: "Indian",
}, {
    question: "Name the Chinese writer, born in 551 BCE, known for preaching high moral standards.",
    answers: ["Buddha", "Confucius", "Bruce Lee", "Jesus"],
    correctAnswer: "Confucius",
}, {
    question: "I have a cake and a table named after me, and I'm used all around the world. What am I?",
    answers: ["Coffee", "Sugar", "Sweet", "Kiddie"],
    correctAnswer: "Coffee",
}, {
    question: "Which country does the sport of pelato come from?",
    answers: ["Argentina", "Germany", "Spain", "Africa"],
    correctAnswer: "Spain",
}, {
    question: "What takes place in Hong Kong's Happy Valley?",
    answers: ["Cock Fighting", "Horse Racing", "Red Light District", "Triads"],
    correctAnswer: "Horse Racing",
}, {
    question: "What was Louis Armstrong's chosen form of music?",
    answers: ["RnB", "EDM", "Jazz", "Country"],
    correctAnswer: "Jazz",
}, {
    question: "Who sang about being an eggman and a walrus?",
    answers: ["The Beatles", "NSYNC", "Jackson 5", "Maroon 5"],
    correctAnswer: "The Beatles",
}, {
    question: "How many bones are there on a Skull & Crossbones flag?",
    answers: [4, 3, 7, 2],
    correctAnswer: 3,
}, {
    question: "Alfred, an ancient King of Wessex, is famous for burning what?",
    answers: ["Women", "Cats", "Cakes", "Hair"],
    correctAnswer: "Cakes",
}, {
    question: "Who went to school with a lamb?",
    answers: ["Joe", "David", "Jesus", "Mary"],
    correctAnswer: "Mary",
}, {
    question: "Which sea creature has three hearts?",
    answers: ["Sharks", "Octopus", "Squid", "Jellyfish"],
    correctAnswer: "Octopus",
}, {
    question: "How many tails does a Manx cat have?",
    answers: [0, 1, 2, 3, 9],
    correctAnswer: 0,
}, {
    question: "How many pedals do most modern pianos have?",
    answers: [0, 1, 2, 3],
    correctAnswer: 3,
}, {
    question: "How many bones does and adult human have?",
    answers: [176, 206, 193, 216, 288],
    correctAnswer: 206,
}, {
    question: "In Fahrenheit, water boils at what degree?",
    answers: [180, 315, 224, 160, 212],
    correctAnswer: 212,
}, {
    question: "Which instrument has forty-seven strings and seven pedals?",
    answers: ["Harp", "Piano", "Organ", "Lutes"],
    correctAnswer: "Harp",
}, {
    question: "Which item of a nursery furniture was set on top of a tree?",
    answers: ["Rocker", "Crib", "Cradle", "Rug"],
    correctAnswer: "Cradle",
}, {
    question: "Which is larger, 50% or five eights?",
    answers: ["50%", "Five Eights"],
    correctAnswer: "Five Eights",
}, {
    question: "Who was the lover of the Roman known as Marc Anthony?",
    answers: ["Cleopatra", "Hancock", "Cersei", "Selene"],
    correctAnswer: "Cleopatra",
}
];

// Create a timer 
// ================
function startTimer() {
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    timer--;
    $('.display').html(`<h2>${timer}</h2>`).addClass('card');

    if (timer === 0) {
        stopTimer();
        wrong();
    }
};

function stopTimer() {
    timer = 8;
    clearInterval(intervalId);
}
// ================

// Grab a random question from question array
function getQuestion() {
    if ((wins + losses) < 5) {
        timer = 10;
        startTimer();
        decrement();
        randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
        $('.question-area').html(`<h2>${randomQuestion.question}</h2>`);
        createButtons(randomQuestion);
    } else {
        gameOver();
    }
}

// Creates answer buttons based off the randomQuestion chosen
function createButtons(randomQuestion) {
    // Clear any buttons made previously
    $('.answer-area').empty();
    $('.image-area').empty();
    // Create a button for each answer
    for (i = 0; i < randomQuestion.answers.length; i++) {
        // Create variable to hold a button element
        let btn = $('<button>');
        // Add classes to your button
        if (randomQuestion.answers[i] == randomQuestion.correctAnswer) {
            btn.addClass('btn-answer correct');
        } else {
            btn.addClass('btn-answer wrong');
        }
        // Add a data attribute
        btn.data('name', randomQuestion.answers[i]);
        // Put the answer text in each button
        btn.html(randomQuestion.answers[i]);
        // Display the buttons
        $('.answer-area').append(btn);
    }
}

// Create a start game button
function startButton() {
    wins = 0;
    losses = 0;
    // Clear any buttons made previously
    $('.answer-area').empty();
    // Create variable to hold a button element
    let btn = $('<button>');
    // Add a startGame class to your button
    btn.addClass('startGame');
    // Add text for the button
    btn.text('Play!');
    // Display the button
    $('.answer-area').append(btn);
}

// If wins and losses = 5, game over
function gameOver() {
    emptyDisplay();
    $('.display').html(`<h3>Score</h3>`);
    $('.question-area').html(`<h3>Correct guesses: ${wins}</h3> <h3>Wrong guesses: ${losses}</h3>`);
    startButton();
}

// Display info for when answer chosen is correct
function correct() {
    // Create image element
    let image = $('<img>');
    image.attr("src", images[0]);
    image.addClass("pic");
    emptyDisplay();
    $('.question-area').html('<h2>You Are Correct!</h2>');
    $('.answer-area').html(`Answer is: ${randomQuestion.correctAnswer}`);
    $('.image-area').append(image);
    wins++;
    setTimeout(getQuestion, 3000);
}

// Display info for when answer chosen is wrong
function wrong() {
    // Create image element
    let image = $('<img>');
    image.attr("src", images[1]);
    image.addClass("pic");
    emptyDisplay();
    $('.question-area').html('<h2>You Are Wrong!</h2>');
    $('.answer-area').html(`Answer is: ${randomQuestion.correctAnswer}`);
    $('.image-area').append(image);
    losses++;
    setTimeout(getQuestion, 3000);
}

// Function to empty display
function emptyDisplay() {
    $('.display').empty();
    $('.display').removeClass('card');
    $('.question-area').empty();
    $('.answer-area').empty();
    $('.image-area').empty();
}

// When an answer button is clicked
$('.answer-area').on('click', function (e) {
    let target = $(e.target);
    // Check if answer picked is correct or wrong
    if (target.is('.correct')) {
        console.log('Correct!');
        stopTimer();
        correct();
    }

    if (target.is('.wrong')) {
        console.log('Wrong!');
        stopTimer();
        wrong();
    }

    if (target.is('.startGame')) {
        getQuestion();
    }
})

// When browser loads up
$(document).ready(function () {
    $('.question-area').html('<h2>Click to Start!</h2>');
    startButton();
})