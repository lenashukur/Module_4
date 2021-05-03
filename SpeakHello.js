(function (window) {
    var speakWord = "Hello";
    var helloSpeaker = {};
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
    window.helloSpeaker = helloSpeaker;
  })(window);