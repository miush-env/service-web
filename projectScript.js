// Menu Logic (Duplicated from script.js for independence)
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

if (menuButton && navLinks && closeMenu) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.remove("-translate-x-full");
    navLinks.classList.add("translate-x-0");
  });

  closeMenu.addEventListener("click", closeNav);

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeNav);
  });

  function closeNav() {
    navLinks.classList.remove("translate-x-0");
    navLinks.classList.add("-translate-x-full");
  }
}

// Data Handling
const getData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};

const SERVICE_URL = "./projects.json"

// Obtener id desde la URL (?id=1)
const params = new URLSearchParams(window.location.search);
const serviceId = Number(params.get("id"));

getData(SERVICE_URL).then(data => {
  if (!data?.projects?.length) return;

  const project = data.projects.find(p => p.id === serviceId);

  if (!project) {
    console.warn("Proyecto no encontrado para id:", serviceId);
    return;
  }

  console.log("Proyecto seleccionado:", project);
  
  // Populate Data
  const titleEl = document.querySelector('#title');
  const projectNameEl = document.querySelector('#project-name');
  const descriptionEl = document.querySelector('#description-prroject');
  const linkViewEl = document.querySelector('#link-view');
  const imageEl = document.querySelector('#project-image');

  if (titleEl) titleEl.textContent = project.title;
  if (projectNameEl) projectNameEl.textContent = project.title;
  if (descriptionEl) descriptionEl.innerHTML = project.description;
  if (linkViewEl) linkViewEl.href = project.link;
  
  if (imageEl) {
    imageEl.src = project.image;
    imageEl.alt = project.title;
  }
});

