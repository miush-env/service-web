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
  document.querySelector('#title').textContent = project.title
  document.querySelector('#project-name').textContent = project.title
  document.querySelector('#description-prroject').innerHTML = project.description
  document.querySelector('#link-view').href = project.link
});

