function shout(string) {
return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  logShout(string)
  function logShout(string) {
    console.log("HELLO")
  }
  function logWhisper(string) {
    console.log("hello")
  }  
  sayHiToHeadphonedRoomate(string)
  function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
  }