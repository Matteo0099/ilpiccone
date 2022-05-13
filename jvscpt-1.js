var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 82,
});
      
  typewriter
    .pauseFor(100)
    .pauseFor(120)
    .typeString("Benvenuto Nel Sito \"Del Piccone\"")
    .pauseFor(700)
    .typeString("\n")
    .deleteChars(33)
    .pauseFor(700)
    .typeString("Scorri in basso per visualizzare Il PowerPoint!⛏️")
    .start();