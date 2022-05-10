var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 80,
});
      
  typewriter
    .pauseFor(100)
    .pauseFor(120)
    .typeString("Benvenuto Nel Sito \"Del Piccone\"")
    .pauseFor(525)
    .typeString("\n")
    .deleteChars(33)
    .pauseFor(800)
    .typeString("Clicca sul pulsante in basso per visualizzare Il PowerPoint!⛏️")
    .start();