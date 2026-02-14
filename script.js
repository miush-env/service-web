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
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className =
    "carousel-item flex-shrink-0 w-80 h-48 md:w-96 bg-blue-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-[0_6px_18px_rgba(168,85,247,0.35)] duration-300";

  card.innerHTML = `
    <div class="aspect-video w-full overflow-hidden bg-gray-200">
      <img 
        src="${project.image}" 
        alt="${project.title}"
        class="w-full h-full object-cover"
      />
    </div>
  `;

  card.addEventListener("click", () => {
    console.log(project.id);
    window.location.href = `proyectPage.html?id=${project.id}`;
  });

  return card;
}

function initCarousel() {
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  if (!projects.length) return;

  // duplicamos para efecto infinito
  const duplicatedProjects = [...projects, ...projects];

  duplicatedProjects.forEach(project => {
    const card = createProjectCard(project);
    track.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", initCarousel);
// --==----===----------
const track = document.getElementById("carouselTrack");
const items = Array.from(track.children);

let index = 0;
let autoPlay;
let paused = false;
let manualPause = false;

const gap = 16; // gap-4 = 16px

// Clonamos elementos para infinito real
items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

function getItemWidth() {
  return items[0].offsetWidth + gap;
}

function move() {
  if (paused) return;

  index++;
  track.style.transition = "transform 700ms ease";
  track.style.transform = `translateX(-${index * getItemWidth()}px)`;

  if (index >= items.length) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      track.style.transform = `translateX(0px)`;
    }, 700);
  }
}

function start() {
  autoPlay = setInterval(move, 2500);
}

function stop() {
  clearInterval(autoPlay);
}

// Hover pausa (desktop)
track.addEventListener("mouseenter", () => {
  if (!manualPause) paused = true;
});

track.addEventListener("mouseleave", () => {
  if (!manualPause) paused = false;
});

// Click / tap pausa toggle (mobile friendly)
track.addEventListener("click", () => {
  manualPause = !manualPause;
  paused = manualPause;
});

start();

let time = 10; // ⏱ Cambia aquí el tiempo inicial
const counter = document.getElementById("counter");

counter.textContent = time;

const interval = setInterval(() => {
  if (time <= 0) {
    clearInterval(interval);
    counter.textContent = "¡Fin!";
    return;
  }

  // Fade out
  counter.classList.remove("opacity-100");
  counter.classList.add("opacity-0", "translate-y-2");

  setTimeout(() => {
    time--;
    counter.textContent = time;

    // Fade in
    counter.classList.remove("opacity-0", "translate-y-2");
    counter.classList.add("opacity-100");
  }, 250);

}, 1000);
