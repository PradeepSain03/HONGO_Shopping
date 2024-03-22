const showNav = document.querySelector(".show-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

showNav.addEventListener("click", () => {
 

  nav.style.width="400px"

});
closeNav.addEventListener("click", () => {
  console.log("Hii")
  nav.style.display="none"
});

