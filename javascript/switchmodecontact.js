
function darkmode() {


  document.getElementById('active').style.display = "block";
  document.getElementById('light').style.display = "block";
  document.getElementById('container').style.background = "#363062";
  document.getElementById('planeicon').style.color = "#f5f5f5";
  const root = document.querySelector(':root');
  root.style.setProperty('--black', '#f5f5f5');
  root.style.setProperty('--tertiarycolor', '#435585');
  document.getElementsByTagName('img')[0].style.mixBlendMode = "normal";
}


function lightmode() {
  document.getElementById('light').style.display = "block";
  document.getElementById('active').style.display = "block";
  document.getElementById('container').style.background = "#D4D6B9";
  document.getElementById('planeicon').style.color = "#383B53";
  document.getElementsByTagName('img')[0].style.mixBlendMode = "darken";
  const root = document.querySelector(':root');
  root.style.setProperty('--black', '#000');
  root.style.setProperty('--tertiarycolor', '#383B53');
}
