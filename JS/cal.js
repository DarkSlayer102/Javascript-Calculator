



const testing  = "Testing"
console.log(testing);






function variables(){
    let container = document.querySelector(".container")
    

    container.style.marginLeft = "520px"


    const header = document.querySelector("#header")
    header.style.marginLeft = "520px"


   
    
}





const colorforheader = document.getElementById("header")
colorforheader.style.color = "#ae972a";




function myFunction() {
  colorforheader.style.animation = "mymove 10s 2";
  
}

colorforheader.addEventListener("animationstart", mySFunction); /* start function */
colorforheader.addEventListener("animationiteration", myRFunction); /* repeat function */
colorforheader.addEventListener("animationend", myEFunction); /* end function */

function mySFunction() {
  this.innerHTML = "Basic Calculator";
  this.style.color = "pink";
}
function myRFunction() {
  this.innerHTML = "Basic Calculator";
  this.style.color = "lightblue";
}
function myEFunction() {
  this.innerHTML = "Basic Calculator";
  this.style.color = "lightgray";
}




function hoveringbuttons(){
    const inputelement = document.querySelector("input")

    inputelement.addEventListener("mouseover",(event)=>{
        if (inputelement == true){
            inputelement.style.backgroundColor = "blue";
        }
        else{
            event.target.style.backgroundColor = "#B3B3B3";
            
            
            
            

            
            setTimeout(()=>{
                event.target.style.backgroundColor = "";
                
            },500);
        }
        
    });
}


function gettinginputadd(){
    const calc = document.querySelector("#calc")
    calc.addEventListener('click',(event)=>{
        event.target.value
    })

    
}

gettinginputadd()



function hoveringinputbuttons(){
    const forms = document.getElementsByTagName("input");
    
    for (let i = 1; i < forms.length; i++) {
        forms[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "#c4ec74"
            event.target.style.color = "black";

            if (event.target.value == "clear"){
                event.target.style.backgroundColor = "#92dc7e";
            }

            if (event.target.value == "+"){
                event.target.style.backgroundColor = "#92dc7e";
            }

            if (event.target.value == "-"){
                event.target.style.backgroundColor = "#92dc7e";
            }

            if (event.target.value == "/"){
                event.target.style.backgroundColor = "#92dc7e";
            }

            if (event.target.value == "*"){
                event.target.style.backgroundColor = "#92dc7e";
            }

            if (event.target.value == "="){
                event.target.style.backgroundColor = "#92dc7e";
            }

            setTimeout(()=>{
                event.target.style.backgroundColor = "";
                
            },200);
        })

    }
    
}

hoveringinputbuttons();

/*

function* gettingformsvalue(){
    const forms = document.getElementsByTagName("input");
    return forms

}


gen = gettingformsvalue();

*/


hoveringbuttons();


variables();



