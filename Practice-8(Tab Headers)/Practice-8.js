function show(cityName , element , color){
    let content=document.getElementsByClassName('content');
    for(let i=0;i<content.length;i++){
       content[i].style.display="none";
    }
    let buttons = document.getElementsByClassName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display= "block";
    document.getElementById(element).style.backgroundColor= color;

}