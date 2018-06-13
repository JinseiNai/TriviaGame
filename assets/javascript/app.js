// create object to hold game questions and answers
let game = {
    questions: [
        one = {
            ask: 'What is the Italian word for pie?',
            correctAnswer: 'Pizza',
            wrongAnswer: ['Pasta', 'Piano', 'Dutch']
        },
        two = {
            ask: 'What is the national flower of Wales?',
            correctAnswer: 'Daffodil',
            wrongAnswer: ['Clover', 'Dahlia', 'Azalea']
        },
        three = {
            ask: 'Which Australian marsupial enjoys eating eucalptus leaves?',
            correctAnswer: 'Koala',
            wrongAnswer: ['Kangaroo', 'Dingo', 'Quoll']
        },
        four = {
            ask: 'In nautical terms, what is the opposite of port?',
            correctAnswer: 'Starboard',
            wrongAnswer: ['Portside', 'Land ho', 'Plank']
        },
        five = {
            ask: 'Name the port of Rome',
            correctAnswer: 'Ostia',
            wrongAnswer: ['Albania', 'Cyprus', 'Romania']
        },
        six = {
            ask: "What was Marilyn Monroe's natural hair color?",
            correctAnswer: 'Ginger',
            wrongAnswer: ['Brunette', 'Black', 'Blonde']
        },
        seven = {
            ask: 'Which city does the River Lagan flow through?',
            correctAnswer: 'Belfast',
            wrongAnswer: ['Beslow', 'Berlin', 'Prague']
        },
        eight = {
            ask: 'What is one quarter of 1,000?',
            correctAnswer: 250,
            wrongAnswer: [25, 750, 1250]
        },
        nine = {
            ask: 'How many sides, in total, would three triangles and three rectangles have?',
            correctAnswer: 21,
            wrongAnswer: [10, 24, 17]
        },
        ten = {
            ask: 'When did the French Revolution end?',
            correctAnswer: 1799,
            wrongAnswer: [1679, 1809, 1899]
        }
    ],
    // Set variables
    wins: 0,
    losses: 0,
    pickedQuestions: [],
    questionAnswers: [],

    // Get questions randomly (no duplicate)
    getQuestions: function () {
        let qNumber = Math.floor(Math.random() * (game.questions.length));
        // No duplicates
        while (game.pickedQuestions.indexOf(qNumber) !== -1) {
            qNumber = Math.floor(Math.random() * (game.questions.length));
        }
        game.pickedQuestions.push(qNumber);
        console.log(qNumber); // Delete Later
    },
    // Display the question
    // Display answers
    showQuestions: function () {
        // Create new div to hold question and answers.
        let newDiv = $('<div>').addClass('trivia');
        // Create new element for the question
        let question = $('<h2>').html(game.questions[game.pickedQuestions[0]].ask);
        // append the element to the new div
        newDiv.append(question);
        // Show question on the DOM
        $('.main-content').append(newDiv);
        // For the question picked, show answers.
        // Add wrong answer to questionAnswers Array.
        for (j = 0; j < game.questions[game.pickedQuestions[0]].wrongAnswer.length; j++) {
            game.questionAnswers.push(game.questions[game.pickedQuestions[0]].wrongAnswer[j]);
        }
        // Add class to know which answer is correct
        let answer = $('<button>').addClass('btn-answers correct').html(game.questions[game.pickedQuestions[0]].correctAnswer);
        // Make sure correct answer is in different positions in the array.
        let newPosition = Math.floor(Math.random() * (game.questionAnswers.length));
        // Add correct answer to questionAnswers array.
        game.questionAnswers.splice(newPosition, 0, (answer));
        console.log(game.questionAnswers); // Delete Later
        // Show answers on the DOM
        for (i = 0; i < game.questionAnswers.length; i++) {
            if (i == newPosition) {
                $('.main-content').append(answer);
            } else {
                $('.main-content').append($('<button>').addClass('btn-answers').html(game.questionAnswers[i]));
            }
        }
    }
}

$(document).ready(function () {
    // When answer button is clicked
    $('.btn-answers').on('click', function (e) {
        // Know which button is clicked on
        let target = $(e.target);
        // Check if target is correct
        if (target.is('.correct')) {
            console.log('You are correct');
        } else {
            console.log('Wrong!');
        }
    })
})
game.getQuestions();
game.showQuestions();
console.log(game.questions[game.pickedQuestions[0]].ask);
console.log(game.pickedQuestions);