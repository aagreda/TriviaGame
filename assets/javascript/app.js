//Document ready Function
$(document).ready(function(){

    //Create global variable for game that lists questions objects
    var questions = [{
                    question: "\"I don't want to be afraid of being alive. Who said it?\"",
                    choices: ["Maggie", "Carl", "Beth", "Carol"],
                    answer: 1
                    },{
                    question: "\"Whats the name of the community Noah's family lived in?\"",
                    choices: ["Shirewilt Estate", "Society Estates", "Wiltshire Estates", "Terminus"],
                    answer: 4
                    },{
                    question: "\"What two characters from the TWD Tv Show do not appear in the Comic books?\"",
                    choices: ["Deanna & Aaron", "Glenn & Maggie ", "Daryl & Merie", "Tyreese & Sasha"],
                    answer: 3
                    },{
                    question: "\"The Governor is the leader of which town?\"",
                    choices: ["Macon", "Atlanta", "Savanna", "Woodbury"],
                    answer: 4
                    },{
                    question: "\"Michonne saves whose life at the end of the Season 2?\"",
                    choices: ["Andrea", "Daryl", "Lori", "Carl"],
                    answer: 1
                    },{
                    question: "\"Who kills Beth?\"",
                    choices: ["Daryl", "Carol", "Maggie", "Dawn"],
                    answer: 4
                    },{
                    question: "\"Who does Rick first meet?\"",
                    choices: ["Margon", "Daryl", "Glenn", "Shane"],
                    answer: 3
                    },{
                    question: "\"Who killed Hershel?\"",
                    choices: ["Carl", "The Governor", "Michonne", "Carol"],
                    answer: 2
                    }];


    $('#testDiv').hide();
    $('img#bm').hide();   
    
    //Create global variable for counter, round, correct, wrong, correct and wrong Arrays
    var counter = 0;
    var round = 0;
    var correct = 0;
    var wrong = 0;
    var correctArray = [];
    var wrongArray = [];
    
    //Create a function to display the Question object. Then .append()
    function displayQuestion(index){
        var currentQ = $('<div id="questionDiv">');
        var currentP = $('<p>');
        currentP.append(questions[index].question);
        currentQ.append(currentP);
        return currentQ;
    };

    //Create a function to display the 1st Question & Answer. Then .appnend()
    function displayFirst(index){
        var newDiv = $('<div id=answer1>');
        var answer1 = $('<p>');
        answer1.text(questions[index].choices[0]);
        newDiv.append(answer1)
        return newDiv;
    };

    //Create a function to display the 2nd Question & Answer. Then .appnend()
    function displaySecond(index){
        var newDiv = $('<div id=answer2>');
        var answer2 = $('<p>');
        answer2.text(questions[index].choices[1]);
        newDiv.append(answer2);
        return newDiv;
    };
    
    //Create a function to display the 3rd Questions & Answer. Then .appnend() 
    function displayThird(index){
        var newDiv = $('<div id=answer3>');
        var answer3 = $('<p>');
        answer3.text(questions[index].choices[2]);
        newDiv.append(answer3);
        return newDiv;
    };

    //Create a function to display the 4th Questions & Answer. Then .appnend() 
    function displayFourth(index){
        var newDiv = $('<div id=answer4>');
        var answer4 = $('<p>');
        answer4.text(questions[index].choices[3]);
        newDiv.append(answer4);
        return newDiv;
    };

    //Create a function thats takes you to the next Question
    function nextQuestion(){

        if (counter < questions.length){
            $('#questionDiv').remove();
            $('#answer1').remove();
            $('#answer2').remove();
            $('#answer3').remove();
            $('#answer4').remove();


            var next = displayQuestion(counter);
            $('#questionDisplay').append(next);

            var firstQ = displayFirst(counter);
            $('#firstQ').append(firstQ);

            var secondQ = displaySecond(counter);
            $('#secondQ').append(secondQ);

            var thirdQ = displayThird(counter);
            $('#thirdQ').append(thirdQ);
            
            var fourthQ = displayFourth(counter);
            $('#fourthQ').append(fourthQ);
            } else {
            $('#testDiv').hide();
            $('#start').hide();
            $('#finalAnswer').text("You got " + correctArray.length + " correct");
            $('img#bm').show();
        }
    };

    function choice(){
       var answer = document.getElementsByName('q');
        for(i = 0; i < answer.length; i++){
          if (answer[i].checked){
            if (answer[i].value == questions[counter].answer.length){
                correct++;
                correctArray.push(questions[counter].answer);
                $(".winCounter").html("correct: " + correct);
                round++;
                $(".roundCounter").html("Round: " + round);
                break;
                } 

             else if (answer[i].value !== questions[counter].answer){
                wrong++;
                $(".lossCounter").html("Wrong: " + wrong);
                wrongArray.push(questions[counter].answer);
                round++;
                $(".roundCounter").html("Round: " + round);
                break;
                }
            } 
        }   
    }; 

    $('#start').on('click', function(){
        $('#testDiv').show();
        $('#start').hide();
        nextQuestion();
    });

    $('#next').on('click', function(){
        choice();
        counter++;
        nextQuestion();
    });

    // Creat a gloval variable for the stopwatch/timer. 
    var stopwatch = {
          number: 20,
          //Create a cunt function using setInterval(.decrement, 1000)
          run: function() {
            count = setInterval(stopwatch.decrement, 1000);
          },
          decrement: function(){
            stopwatch.number--;
            $('#show-number').html('<h2>' + stopwatch.number + '<h2>');
                if (stopwatch.number === 0){
                    choice();
                    counter++;
                    nextQuestion();
                    stopwatch.clear();
                    stopwatch.resetCounter();
                    stopwatch.run();
                }   
          },
        //Create a reset counter function 
        resetCounter: function(){
                stopwatch.number = 15;
          },

        //Create a clear interval function  
        clear: function(){
                clearInterval(count);
          }
    };

    $('#start').on('click', function(){
        $('#testDiv').show();
        $('#start').hide();
        nextQuestion();
        stopwatch.run();
    });

    $('#next').on('click', function(){
        choice();
        counter++;
        nextQuestion();
        stopwatch.clear();
        stopwatch.resetCounter();
        stopwatch.run();
    }); 
})
