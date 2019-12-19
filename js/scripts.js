$(document).ready(function() {
  $("form#word").submit(function(event) {
  event.preventDefault();
  var word = $("#userWord").val();


      function palindromeWord(word){
          return word.split('').reverse().join().replace(/,/g , '');
      };

      palindromeWord(word);

    console.log(word);
    console.log(palindromeWord(word));


  });
});
