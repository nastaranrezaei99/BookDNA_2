
const landing = document.getElementById("landing");
const landing2 = document.getElementById ("step1");
const  form2 = document.getElementById("secque");     
const moodForm = document.getElementById("firstque");   
const btnMood  = document.getElementById("second-Button"); 
const btn2 = document.getElementById ("button1");
const back1 = document.getElementById("button22");
const landing3 = document.getElementById("step2");

const form3 = document.getElementById("thirdque")
const landing4 = document.getElementById("step3");
const button2 = document.getElementById("button2");
const back2 = document.getElementById("button32");

const form4 = document.getElementById("f4que")
const landing5 = document.getElementById("step4");
const button3 = document.getElementById("button3");
const back3 = document.getElementById("button42");

const form5 = document.getElementById("f5que")
const landing6 = document.getElementById("step5");
const button4 = document.getElementById("button4");
const back4 = document.getElementById("button52");



btnMood.addEventListener("click", () => {
  
  landing.style.display = "none";

  
  moodForm.style.display = "block";
});

btn2.addEventListener("click" , () => {
    landing2.style.display="none";

    form2.style.display = "block";
    landing3.style.display = "block";
});

back1.addEventListener("click" , () => {
    landing3.style.display = "none";
    moodForm.style.display = "block";
    landing2.style.display = "block"; 

});

button2.addEventListener("click" , () => {
    landing3.style.display = "none";
    form3.style.display = "block"
    landing4.style.display = "block";
    

})

back2.addEventListener("click" , () => {
    landing4.style.display = "none";
    form2.style.display = "block";
    landing3.style.display = "block"; 

});

button3.addEventListener("click" , () => {
    landing4.style.display = "none";
    form4.style.display = "block"
    landing5.style.display = "block";
    

})

back3.addEventListener("click" , () => {
    landing5.style.display = "none";
    form3.style.display = "block";
    landing4.style.display = "block"; 

});

button4.addEventListener("click" , () => {
    landing5.style.display = "none";
    form5.style.display = "block"
    landing6.style.display = "block";
    

})


back4.addEventListener("click" , () => {
    landing6.style.display = "none";
    form4.style.display = "block";
    landing5.style.display = "block"; 

});