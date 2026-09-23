const projects = [
  {
    title: "Kattenproject",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis at purus iaculis pulvinar. Aenean hendrerit, elit in suscipit imperdiet, felis est dapibus erat, nec euismod justo metus dapibus ligula. Pellentesque porta turpis vitae augue efficitur tincidunt. Nullam sed sodales diam. Pellentesque cursus eros nec dictum suscipit. Cras hendrerit mi velit, in vestibulum enim interdum eu. Vestibulum iaculis scelerisque diam, ac rutrum leo imperdiet vitae. Etiam sit amet ex ac ligula bibendum consectetur. Cras dignissim dolor vel quam posuere, at finibus diam sagittis. Mauris vel massa in mi aliquam suscipit in a eros. Aenean porta vel sem feugiat laoreet. Aenean id ante facilisis, vestibulum ante sed, elementum mauris. Vivamus a pellentesque lectus, ac sollicitudin mi. Ut efficitur pretium mattis. Vestibulum iaculis vestibulum augue, ut luctus ante faucibus vitae. Proin suscipit nibh ac ipsum malesuada condimentum.`,
    image: "assets/images/project1.jpg",
    imageAlt: "colorful image that says 'graphic design is my passion' with a cat",
    link: "project/project1.html",
    buttonLabel: "Project 1",
  },
  {
    title: "Zonnenproject",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius nisl sit amet justo molestie elementum. Maecenas vitae porttitor mauris. Maecenas tincidunt lacinia eros, in dictum ante tempor a. Aliquam sed tincidunt orci. Sed dictum dolor faucibus turpis ultrices dictum. Nunc venenatis, est eu feugiat interdum, magna tortor euismod felis, at vehicula erat massa id tortor. Ut semper sodales suscipit. Pellentesque ac quam et ante rhoncus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut turpis diam, molestie id ultrices sit amet, iaculis ac mauris. Integer in neque porttitor, malesuada lectus eget, ornare quam.`,
    image: "assets/images/project2.jpg",
    imageAlt: "colorful image that says 'graphic design is my passion' with a sun",
    link: "project/project2.html",
    buttonLabel: "Project 2",
  },
];

function createProjectArticle(project) {
  const article = document.createElement("article");

  const heading = document.createElement("h2");
  heading.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.imageAlt;
  image.className = "content-image";

  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = project.buttonLabel;
  link.className = "button";

  article.append(heading, description, image, link);
  return article;
}

function showProjects(projectList, container) {
  container.innerHTML = "";
  projectList.forEach((project) => {
    const article = createProjectArticle(project);
    container.appendChild(article);
  });
}

const projectSection = document.querySelector("section");
showProjects(projects, projectSection);

