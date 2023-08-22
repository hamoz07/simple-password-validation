// DOM Elements
let input = document.querySelector("input");
let counter = document.querySelector(".counter");
let progress_bar = document.querySelector(".progress");
let maxLn = input.getAttribute("maxlength");
//*

counter.textContent = maxLn;

input.oninput = () => {

  counter.textContent = input.value.length;
  if (input.value.length === 25) {
    counter.classList.add("zero");
  }

  progress_bar.style.width = `${(input.value.length / maxLn) * 100}%`;
  if (progress_bar.style.width === "100%") {
    progress_bar.style.backgroundColor = "rgb(72, 240, 172)";
  }

};
