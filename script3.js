const m = JSON.parse(localStorage.getItem("quizMarks"));

let marks = (m / 25) * 100;

document.querySelector(".progress-bar").style.width = `${marks}%`;

document.querySelector(".score").textContent = `Marks = ${m}/25----Percentage = ${marks}%`;

if (m == 25) {
  document.querySelector(".line").textContent =
    "Well done Full score, Keep it up";
}else if (m >= 20) {
  document.querySelector(".line").textContent =
    "Keep learning, you have a good score!";
} else if (m >= 10 && m < 20) {
  document.querySelector(".line").textContent =
    "Average score, you can do better!";
} else {
  document.querySelector(".line").textContent =
    "Poor performance, study harder!";
}

document.querySelector(".button").addEventListener("click", () => {
  localStorage.removeItem("quizMarks");
  window.location.href = "../first-page/index.html";
});

document.querySelector(".twitter").addEventListener("click", () => {
  window.location.href = "https://x.com/?lang=en";
});

document.querySelector(".linkedin").addEventListener("click", () => {
  window.location.href = "https://in.linkedin.com/";
});

document.querySelector(".instagram").addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/";
});
