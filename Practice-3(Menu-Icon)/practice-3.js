let x=document.getElementById('content')
let count=0;
function change(){
    if(count==0){
       x.style.display = "block";
       count=1;
    }
    else if(count==1){
        x.style.display = "none";
        count=0;
    }
}