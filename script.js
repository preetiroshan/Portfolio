const themeBtn = document.querySelector("#theme-btn");
const body = document.querySelector("body");
const handleClick = () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeBtn.textContent = "Light Mode";
  } else if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeBtn.textContent = "Dark Mode";
  }
};
