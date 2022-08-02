// alert("Hello world!");

const navbarEl = document.querySelector('.navbar');
const bottomContainerEl = document.querySelector('.bottom-Container');
// console.log(navbarEl)

console.log(bottomContainerEl.offsetHeight);

window.addEventListener("scroll", () => {
    // console.log("scroll")
    // console.log("window.scrollY");
    
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight -50){
        navbarEl.classList.add("active");
    } 

})