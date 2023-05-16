let x= document.getElementById('bar1');
let y= document.getElementById("bar2");
let z = document.getElementById("bar3");
let count=0;
function change(){
    if(count==0){
        y.style.opacity= "0%";
        x.style.transform = "translate(0px,16px) rotate(-45deg)";
       
        z.style.transform = "translate(0px,-16px) rotate(45deg)";
        count=1;
    }
    else if(count==1){
        y.style.opacity= "100%";
        x.style.transform = "rotate(0deg)";
       
        z.style.transform = "rotate(0deg)";
        count=0;
    }
}
