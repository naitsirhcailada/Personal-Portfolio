
  function darkmode() {


  document.getElementById('active').style.display = "block";
  document.getElementById('light').style.display="block";
  document.getElementById('container').style.background="#363062";

    const root = document.querySelector(':root');
    root.style.setProperty('--black','#f5f5f5');
    root.style.setProperty('--tertiarycolor', '#F5E8C7');

  }

  
  function lightmode() {
  document.getElementById('light').style.display = "block";
  document.getElementById('active').style.display="block";
  document.getElementById('container').style.background="#D4D6B9";
   

    const root = document.querySelector(':root');
    root.style.setProperty('--black', '#000');
    root.style.setProperty('--tertiarycolor', '#383B53');
  }
