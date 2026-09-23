const projectContext = document.querySelector(".project-context");
const button = document.querySelector("button");

if (projectContext && button) {
  projectContext.style.display = "none";

  button.addEventListener("click", () => {
    if (projectContext.style.display === "none") {
      projectContext.style.display = "block";
      button.textContent = "See less";
    } else {
      projectContext.style.display = "none";
      button.textContent = "See more";
    }
  });
}