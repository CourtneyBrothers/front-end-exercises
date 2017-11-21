// Create an array that contains the words in the sentence
var sentence = ["The ", "walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    var mySentences = "";
    for (var i = 0; i < sentence.length; i++) {
        console.log(mySentences += sentence[i]);
    }
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */

}

// Invoke the function and pass in the array
addExcitement(sentence);
console.log("hello");