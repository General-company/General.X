// NAV SCROLL EFFECT
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

counters.forEach(c=>{
const update=()=>{
let target=+c.dataset.target;
let value=+c.innerText;
let step=target/100;

if(value<target){
c.innerText=Math.ceil(value+step);
setTimeout(update,20);
}else{
c.innerText=target;
}
};
update();
});
