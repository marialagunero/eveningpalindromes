$(document).ready(function() {
  $("form#word").submit(function(event) {
  event.preventDefault();
  var word = $("#userWord").val();


      function palindromeWord(word){
          return word.split('').reverse().join().replace(/,/g , '');
      };

      if (word === palindromeWord(word)){
        alert("is a palindrome");
      } else {
        alert("is not a palindrome");
      }

      palindromeWord(word);

    console.log(word);
    console.log(palindromeWord(word));


  });
});
