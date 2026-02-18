const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

// abrir menú
menuButton.addEventListener("click", () => {
  navLinks.classList.remove("-translate-x-full");
  navLinks.classList.add("translate-x-0");
});

// cerrar menú (botón)
closeMenu.addEventListener("click", () => {
  closeNav();
});

// cerrar menú al hacer click en un link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// función reutilizable
function closeNav() {
  navLinks.classList.remove("translate-x-0");
  navLinks.classList.add("-translate-x-full");
}

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste</p> <ul class='list-disc px-5'> <li>Landing Page</li> <li>Marketing</li> <li>SEO</li> <li>4 meses</li> </ul>",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste</p> <ul class='list-disc px-5'> <li>Landing Page</li> <li>Marketing</li> <li>SEO</li> <li>4 meses</li> </ul>",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste</p> <ul class='list-disc px-5'> <li>Landing Page</li> <li>Marketing</li> <li>SEO</li> <li>4 meses</li> </ul>",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste</p> <ul class='list-disc px-5'> <li>Landing Page</li> <li>Marketing</li> <li>SEO</li> <li>4 meses</li> </ul>",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop",
    link: "https://youtube.com"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste quasi earum optio dolores, distinctio aperiam explicabo totam veritatis nam. Eveniet assumenda, nam deleniti placeat esse vel! <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut ea omnis maxime commodi voluptatem reprehenderit error odio tempora accusantium soluta, deserunt iste</p> <ul class='list-disc px-5'> <li>Landing Page</li> <li>Marketing</li> <li>SEO</li> <li>4 meses</li> </ul>",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=450&fit=crop",
    link: "#"
  }
];
// Función para crear una tarjeta de proyecto
// Función para crear una tarjeta de proyecto
function createProjectCard(project) {
  const card = document.createElement("div");
  // Diseño premium: h-[400px], w-80, rounded-xl, overflow-hidden
  card.className = "relative h-[400px] group rounded-xl overflow-hidden w-80 flex-shrink-0 cursor-pointer";

  // Extraemos texto simple de la descripción (quitando tags HTML)
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = project.description;
  const textDescription = tempDiv.textContent || tempDiv.innerText || "";
  const shortDescription = textDescription.length > 80 ? textDescription.substring(0, 80) + "..." : textDescription;

  card.innerHTML = `
    <img
      class="h-full w-full group-hover:blur-sm object-cover object-center transition-all duration-300 delay-150"
      alt="${project.title}"
      src="${project.image}"
    />
    <div
      class="absolute inset-0 flex group-hover:opacity-100 opacity-0 transition-opacity flex-col justify-end p-10 text-white bg-black/50 duration-300 delay-150"
    >
      <h1 class="text-2xl font-semibold">${project.title}</h1>
      <p class="text-sm mt-2">
        ${shortDescription}
      </p>
    </div>
  `;

  card.addEventListener("click", () => {
    console.log(project.id);
    window.location.href = `proyectPage.html?id=${project.id}`;
  });

  return card;
}

function initCarousel() {
  const track = document.getElementById("carrouselTrack"); // Fixed ID to match HTML
  if (!track) return;

  if (!projects.length) return;

  // Duplicamos los proyectos para lograr el efecto infinito
  // Al tener dos sets, podemos animar del 0% al -50% y resetear visualmente sin que se note
  const duplicatedProjects = [...projects, ...projects];

  duplicatedProjects.forEach(project => {
    const card = createProjectCard(project);
    track.appendChild(card);
  });
  
  // Añadimos la clase de animación definida en input.css
  track.classList.add("animate-scroll");
  
  // Añadimos padding-right igual al gap (gap-4 = 1rem) para que la animación sea perfecta
  // Total width = 2 * (Width + Gap)
  track.classList.add("pr-4");

  
  // Aseguramos que el contenedor padre tenga overflow-hidden (ya lo tiene en HTML, pero por seguridad)
  track.parentElement.classList.add("overflow-hidden");
}

document.addEventListener("DOMContentLoaded", initCarousel);
