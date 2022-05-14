var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 84,
});
      
  typewriter
    .pauseFor(100)
    .pauseFor(700)
    //.deleteChars(33)
    //.pauseFor(700)
    .typeString("\nScorri in basso per visualizzare Il PowerPoint!⛏️")
    .start();


    