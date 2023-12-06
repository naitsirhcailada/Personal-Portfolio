
function darkmode() {


  document.getElementById('active').style.display = "block";
  document.getElementById('light').style.display = "block";
  document.getElementById('container').style.background = "#363062";
  document.getElementById('prog').style.color = "#f5f5f5";
  
  const root = document.querySelector(':root');
  root.style.setProperty('--black', '#f5f5f5');
  root.style.setProperty('--tertiarycolor', '#66717E');

  document.getElementsByTagName('img')[1].style.mixBlendMode = "normal";
  document.getElementsByTagName('img')[0].style.mixBlendMode = "normal";

}


function lightmode() {
  document.getElementById('light').style.display = "block";
  document.getElementById('active').style.display = "block";
  document.getElementById('container').style.background = "#D4D6B9";
  document.getElementsByTagName('img')[0].style.mixBlendMode = "darken";

  const root = document.querySelector(':root');
  root.style.setProperty('--black', '#000');
  root.style.setProperty('--tertiarycolor', '#383B53');
}
