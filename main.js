const bars = document.querySelector(".bars");
const list = document.querySelector(".list");
const li = document.querySelectorAll(".list li");

function displayList() {
  list.classList.toggle("active");
  bars.classList.toggle("bar");

  li.forEach((element, index) => {
    if (element.style.animation) element.style.animation = "";
    else element.style.animation = `listFade 0.5s ease ${index / 6}s`;
  });
}

bars.addEventListener("click", displayList);
