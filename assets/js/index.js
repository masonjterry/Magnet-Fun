$(document).ready(function() {

  $("#reset").click(reset);

  function reset() {
    let newDiv = $("<div></div>").text("");
    $("#letterDivs").html(newDiv);
  }

  $("#generateWord").on("click", function(e){

    e.preventDefault();

    // word array
    let wordArr = ["javascript", "react", "angular", "node", "bootstrap", "computer", "laptop"];
    // randdom word picker
    let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

    reset();

    scrammble(randomWord);

  });

  $("#ownWord").on("click", function(e) {

    e.preventDefault();

    let userWord = $("#word").val().trim();

    reset();

    scrammble(userWord);

  });

  function scrammble(word) {

    // jummbled word
    let newWordArr = [];
    // iteration to turn word into an array
    for (let i = 0; i < word.length; i++) {
      newWordArr.push(word[i]);
    }
    shuffle(newWordArr);
  }

    function shuffle(word) {
      let currentIndex = word.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = word[currentIndex];
        word[currentIndex] = word[randomIndex];
        word[randomIndex] = temporaryValue;
      }

      for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        let newDiv = $("<div class=\"letter draggable\"></div>").text(letter);
        $("#letterDivs").append(newDiv);
      }

    $("#word").val("");

    $(function() {
      $( ".draggable" ).draggable({snap: 'inner'});
    });

  }

});
