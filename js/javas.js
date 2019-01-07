// FRONT-END LOGIC

function check() {
    var questionOne = document.Form.questionOne.value;
    console.log("questionOne");
    var questionTwo = document.Form.questionTwo.value;
    console.log("questionTwo");
    var questionThree = document.Form.questionThree.value;
    console.log("questionThree");
    var questionFour = document.Form.questionFour.value;
    console.log("questionFour");
    var questionFive = document.Form.questionFive.value;
    console.log("questionFive");
    var questionSix = document.Form.questionSix.value;
    console.log("questionSix");
    var questionSeven = document.Form.questionSeven.value;
    console.log("questionSeven");
    var questionEight = document.Form.questionEight.value;
    console.log("questionEight");
    var questionNine = document.Form.questionNine.value;
    console.log("questionNine");
    var questionTen = document.Form.questionTen.value;
    console.log("questionTen");
    var right = 0;


    if (questionOne == "true") {
        right = right + 2;
    };
    if (questionTwo == "true") {
        right = right + 2;
    };
    if (questionThree == "true") {
        right = right + 2;
    };
    if (questionFour == "true") {
        right = right + 2;
    };
    if (questionFive == "true") {
        right = right + 2;
    };
    if (questionSix == "true") {
        right = right + 2;
    };
    if (questionSeven == "true") {
        right = right + 2;
    };
    if (questionEight == "true") {
        right = right + 2;
    };
    if (questionNine == "true") {
        right = right + 2;
    };
    if (questionTen == "true") {
        right = right + 2;
    };


    
    document.getElementById("point").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "Your Score is: " + right + "/20";
    $(".container").fadeOut();

};

// // BUSINESS LOGIC

// function getScore(answers) {
//     var score = 0;

//     answers.forEach.value(function(answer) {
//         if (answer === true) {
//             score=score+;
//         }
//     });

//     return score;
// }
