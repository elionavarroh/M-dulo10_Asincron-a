import {
    Personaje,
} from "./model"


export const getDOMElements = () => {
    const form = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const personajesContainer = document.getElementById("personajesContainer");

    if (form !== null && searchInput !== null && personajesContainer !== null &&
        form instanceof HTMLFormElement && searchInput instanceof HTMLInputElement && personajesContainer instanceof HTMLDivElement) {
        return { form, searchInput, personajesContainer };
    } else {
        throw new Error("Uno o más elementos del DOM no se han encontrados");
    }
};

export const renderPersonajes = (personajes: Personaje[], personajesContainer: HTMLDivElement) => {
    personajesContainer.innerHTML = "";

    personajes.forEach(personaje => {
        const personajeDiv = document.createElement("div");
        personajeDiv.classList.add("personaje");

        const imagenPersonaje = document.createElement("img");
        imagenPersonaje.src = `http://localhost:3000/${personaje.imagen}`;
        imagenPersonaje.setAttribute("alt", personaje.nombre);

        const nombrePersonaje = document.createElement("h2");
        nombrePersonaje.innerText = personaje.nombre;

        const apodoPersonaje = document.createElement("p");
        apodoPersonaje.classList.add("apodo");
        apodoPersonaje.innerText = personaje.apodo;

        const especialidadPersonaje = document.createElement("p");
        especialidadPersonaje.classList.add("especialidad");
        especialidadPersonaje.innerText = personaje.especialidad;

        const amigoPersonaje = document.createElement("p");
        amigoPersonaje.classList.add("amigo");
        amigoPersonaje.innerText = personaje.amigo;

        personajeDiv.appendChild(imagenPersonaje);
        personajeDiv.appendChild(nombrePersonaje);
        personajeDiv.appendChild(apodoPersonaje);
        personajeDiv.appendChild(especialidadPersonaje);
        personajeDiv.appendChild(amigoPersonaje);

        personajesContainer.appendChild(personajeDiv);
    });
};