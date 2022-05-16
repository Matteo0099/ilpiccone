var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 84,
});
      
  typewriter
    .pauseFor(950)
    //.deleteChars(33)
    //.pauseFor(700)
    .typeString("Sei nel sito del \"Piccone\"⛏️")
    .start();


    