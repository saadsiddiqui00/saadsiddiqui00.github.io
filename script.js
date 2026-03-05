document.getElementById("y").textContent=new Date().getFullYear()

document.querySelectorAll('.nav a[href^="#"]').forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault()
const target=document.querySelector(this.getAttribute("href"))
if(target)target.scrollIntoView({behavior:"smooth"})
})
})

const reveals=document.querySelectorAll(".reveal")
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})

reveals.forEach(el=>observer.observe(el))
