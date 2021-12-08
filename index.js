
let string = "Hello"


function shout(string) {
  string == string.toUpperCase();
    return string.toUpperCase();
  }

  function whisper(string) {
    string == string.toLowerCase();
    return string.toLowerCase();
  }

  function logShout(string) {
    string == string.toUpperCase();
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    string == string.toLowerCase();
    console.log(string.toLowerCase());
  }

  
function sayHiToGrandma(string) {

    if (string === "HELLO") {
      return ('YES INDEED!')
    }
    else if (string === "I love you, Grandma."){
        return ("I love you, too.");
    }
    else if (string === 'hello') {
      return ('I can\'t hear you!')
  }
}
shout(string);
whisper(string);
logShout(string);
logWhisper(string);
sayHiToGrandma('hello');
sayHiToGrandma('HELLO');