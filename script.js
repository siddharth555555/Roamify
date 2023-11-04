const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

var navbtn = Array.from(document.querySelectorAll(".navigation-button"));


navbtn.forEach((e)=>{
    e.addEventListener("click",()=>{
        console.log(e.parentElement.parentElement.classList.toggle("change"))
        e.parentElement.parentElement.classList.toggle(".change")
    })
})

const colors = ["#6495ed", "#7fffd4","#ffa07a","#f08080","#afeeee"];
let c = 0;
Array.from(document.querySelectorAll('.nav-link')).forEach((i)=>{
    i.style.cssText = `background-color:${colors[c++]}`
})
