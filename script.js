// NAV EFFECT
window.addEventListener("scroll",()=>{
const nav=document.getElementById("nav");
nav.style.background = window.scrollY>50 ? "#000" : "rgba(0,0,0,0.4)";
});

// SCROLL ANIMATION
const sections=document.querySelectorAll(".section");

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
}
});
});

sections.forEach(s=>observer.observe(s));

// COUNTERS
const counters=document.querySelectorAll(".count");

counters.forEach(counter=>{
const update=()=>{
let target=+counter.dataset.target;
let value=+counter.innerText;
let step=target/100;

if(value<target){
counter.innerText=Math.ceil(value+step);
setTimeout(update,15);
}else{
counter.innerText=target;
}
};
update();
});
