
function darkmode() {


  document.getElementById('active').style.display = "block";
  document.getElementById('light').style.display = "block";
  document.getElementById('container').style.background = "#363062";
  document.getElementById('softdev').style.color = "#f5f5f5";
  const root = document.querySelector(':root');
  root.style.setProperty('--black', '#f5f5f5');
  root.style.setProperty('--tertiarycolor', '#435585');

}


function lightmode() {
  document.getElementById('light').style.display = "block";
  document.getElementById('active').style.display = "block";
  document.getElementById('container').style.background = "#D4D6B9";
  document.getElementById('softdev').style.color = "#383B53";

  const root = document.querySelector(':root');
  root.style.setProperty('--black', '#000');
  root.style.setProperty('--tertiarycolor', '#383B53');
}
