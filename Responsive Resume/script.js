
var navMenuAnchorTags= document.querySelectorAll(".nav-menu a");
// console.log(navMenuAnchorTags);
 
for(let i=0; i<navMenuAnchorTags.length; i++){
     navMenuAnchorTags[i].addEventListener("click", function(event){
        event.preventDefault();
        var targetSectionId= this.textContent.trim().toLowerCase();
        console.log(targetSectionId);

        var targetSection = document.getElementById(targetSectionId);
        console.log(targetSection);

   
        
        var interval= setInterval(()=>{

            var targetSectionCoordinates= targetSection.getBoundingClientRect();
            // console.log(targetSectionCoordinates);
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 30);

     })
}

 var progressBars = document.querySelectorAll('.skill-progress > div ');
// console.log(progressBars);
var skillContainer=document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone=false;

function initializeBars(){
for(var bar of progressBars){
// console.log(bar);
bar.style.width=0+ '%';
// console.log(bar.style.width);
}
}

initializeBars();
function fillBars(){
 for(let bar of progressBars){
    let currentWidth=0;
     let targetWidth=bar.getAttribute("data-bar-width");
    var intervalId= setInterval(()=>{
     
    //  console.log(targetWidth);
     if(currentWidth>targetWidth){
        clearInterval(intervalId);
        return;
     }
     currentWidth++;
     bar.style.width=currentWidth+'%';
    },20);
}

}

function checkScroll(){
    //we have to check weather skill section is visible or not;
 var coordinate=   skillContainer.getBoundingClientRect();
 if(!animationDone && coordinate.top<=window.innerHeight){
    animationDone=true;
    console.log("skill section visible");
    fillBars();
 }
 else if(coordinate.top>window.innerHeight){
    animationDone=false;
    initializeBars();
 }
}