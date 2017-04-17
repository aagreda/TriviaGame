//Document ready Function
$(document).ready(function(){

    //Create global variable for game that lists questions objects
    var questions = [{
                    question: "\"\"",
                    choices: ["", "", ""],
                    answer: 2
                    },{
                    question: "\"\"",
                    choices: ["", "", ""],
                    answer: 1
                    },{
                    question: "\"\' \"",
                    choices: ["", "", ""],
                    answer: 1
                    },{
                    question: "\"\"",
                    choices: ["", "", ""],
                    answer: 2
                    },{
                    question: "\“\”",
                    choices: [""],
                    answer: 1
                    },{
                    question: "\"\"",
                    choices: [""],
                    answer: 1
                    },{
                    question: "\"\"",
                    choices: [""],
                    answer: 1
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

    //Create a function thats takes you to the next Question
    function nextQuestion(){

        if (counter < questions.length){
            $('#questionDiv').remove();
            $('#answer1').remove();
            $('#answer2').remove();
            $('#answer3').remove();


            var next = displayQuestion(counter);
            $('#questionDisplay').append(next);

            var firstQ = displayFirst(counter);
            $('#firstQ').append(firstQ);

            var secondQ = displaySecond(counter);
            $('#secondQ').append(secondQ);

            var thirdQ = displayThird(counter);
            $('#thirdQ').append(thirdQ);
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
                } //2nd if
            

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


    var stopwatch = {
          number: 20,
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
        resetCounter: function(){
                stopwatch.number = 16;
          },
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
