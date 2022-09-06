let test;
let start = Math.floor(Math.random() * 100);
var firstWord;

document.addEventListener("DOMContentLoaded", loadXMLDoc());

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        var response = JSON.parse(xhttp.responseText);
        test = response.business_english;
        firstWord = test[start].translation;
        document.querySelector("#words").innerText = "Word: " + words + " / " + wordsInTest;
        word(firstWord);
        document.querySelector("#total").innerText = "Total: " + test.length;
      }
    };
    xhttp.open("GET", "business_english.json", true);
    xhttp.send();
  }
  function word(a) {
    document.querySelector("#en-word").innerText = a;
  }

  
  var counter = Math.floor(Math.random() * 100);
  var wordsInTest = 20;
  var words = 1;
  var score = 0;

  function next() {

    if(words == wordsInTest) {
      document.querySelector("#nextButton").disabled = true;

    } else {
      counter = Math.floor(Math.random() * 100);
      words += 1;
      //console.log(counter);
      document.querySelector("#checkButton").disabled = false;
      document.querySelector("#translation").value = "";
      document.querySelector("#en-word").innerText = test[counter].translation;
      document.querySelector("#words").innerText = "Word: " + words + " / " + wordsInTest;
    }
  }

  function showTranslate() {
    var finalScore = score / wordsInTest * 100;
    var translated = document.querySelector("#en-word");
    //console.log(counter);
    if(words == wordsInTest) {
      if (translated.innerText == firstWord) {
        translated.innerText = test[start].english_word;
        document.querySelector("#checkButton").disabled = true;
      } else {
        translated.innerText = test[counter].english_word;
        document.querySelector("#checkButton").disabled = true;
      }
      document.querySelector("#total").innerText = "Final score: " + finalScore + "%";
    } else {
      if (translated.innerText == firstWord) {
        translated.innerText = test[start].english_word;
        document.querySelector("#checkButton").disabled = true;
      } else {
        translated.innerText = test[counter].english_word;
        document.querySelector("#checkButton").disabled = true;
      }
    }
  }

  function getTranslate() {

    const input = document.querySelector("#translation").value;

    if(words == wordsInTest) {
      if(input == test[counter].english_word ) {
        console.log("True")
        score += 1;
        document.querySelector("#score").innerText = "Score: " + score;
        var textTrue = document.querySelector("#status-text");
        textTrue.innerText = "True";
        textTrue.style.color= "green";
        document.querySelector("#checkButton").disabled = true;
      } else if (input == test[start].english_word) {
        score += 1;
        document.querySelector("#score").innerText = "Score: " + score;
        var textTrue = document.querySelector("#status-text");
        textTrue.innerText = "True";
        textTrue.style.color= "green";
        document.querySelector("#checkButton").disabled = true;
      } else {
        console.log("False")
        score -= 1;
        document.querySelector("#score").innerText = "Score: " + score;
        var textFalse = document.querySelector("#status-text");
        textFalse.innerText = "False";
        textFalse.style.color = "red";
        document.querySelector("#checkButton").disabled = true;
      }
      var finalScore = score / wordsInTest * 100;
      document.querySelector("#total").innerText = "Final score: " + finalScore + "%";
    } else {
      if(input == test[counter].english_word ) {
        console.log("True")
        score += 1;
        document.querySelector("#score").innerText = "Score: " + score;
        var textTrue = document.querySelector("#status-text");
        textTrue.innerText = "True";
        textTrue.style.color= "green";
        document.querySelector("#checkButton").disabled = true;
      } else if (input == test[start].english_word) {
        score += 1;
        document.querySelector("#score").innerText = "Score: " + score;
        var textTrue = document.querySelector("#status-text");
        textTrue.innerText = "True";
        textTrue.style.color= "green";
        document.querySelector("#checkButton").disabled = true;
      } else {
        console.log("False")
        score -= 1;
        document.querySelector("#score").innerText = "Score: " + score;
        var textFalse = document.querySelector("#status-text");
        textFalse.innerText = "False";
        textFalse.style.color = "red";
        document.querySelector("#checkButton").disabled = true;
      }
    }
  }