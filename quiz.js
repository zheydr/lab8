$(document).ready(function () {
     correct = [
          "Taylor Swift",
          "every/all",
          "Alison",
          "Best Female Video",
          "13",
          "Pennsylvania",
          "a fox"

     ];
     questions = [
          "What was Taylor's first album?",
          "How many songs did Taylor write or cowrite on her debut album?",
          "What's Taylor's middle name?",
          "What category did Taylor win when Kanye West interrupted her MTV Video Music Award acceptance speech?",
          "What's Taylor's lucky number?",
          "Where was Taylor born?",
          "What does Taylor claim as her spirit animal?"
     ]
     choice_options = [
          ["Fearless", "Speak Now", "Red", "Taylor Swift"],
          ["3", "8", "9", "every/all"],
          ["Jennifer", "Lucy", "Hayden", "Alison"],
          ["Video of the Year", "Best Female Video", "Song of the Year", "Breakthrough Video"],
          ["4", "7", "5", "13"],
          ["Tennessee", "Texas", "Pennsylvania", "New Jersey"],
          ["a kitten", "a fox", "a hippo", "a panter"]
     ]

     // Generate quiz questions
     // ...

     //let quizBox = document.getElementById ("quiz-box"); // JS way
     quizBox = $("#quiz-box"); // Jquery


     for (var i = 0; i < questions.length; i++) {
          quizBox.append("<div class='question" + i + "'>");
          $('.question' + i).append("<p class='d'> " + questions[i] + " </p>");
          for (var j = 0; j < choice_options[i].length; j++) {
               $('.question' + i).append("<label><input type='radio' name='q" + i + "' value='a'>" + choice_options[i][j] + "</label>")
          }
     }


     countCorrect = 0;
     total_questions = questions.length;
     reset = false;

     $("button").click(function (event) {
          $("#quiz-box > h2").empty();
          countCorrect = 0;

          for (var i = 0; i < questions.length; i++) {
               $("input[name=q" + i + "]").each(function (index) {
                    choice = $(this).parent().text();
                    if ($(this).prop("checked") == true && correct[i] == choice) {
                         countCorrect += 1;
                    }
               });
          }

          $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "/" + total_questions + "</h2>");
     });

});