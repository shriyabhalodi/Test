const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  // Adjust this value as needed to control when the button appears
  const scrollThreshold = 80;

  if (window.scrollY > scrollThreshold) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});