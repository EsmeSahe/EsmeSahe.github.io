let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #6c5b7b;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6c5b7b;">Soy universitaria y me encanta la tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
