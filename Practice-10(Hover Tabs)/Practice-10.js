function show(evt, cityName) {
   let content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    let buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
  }