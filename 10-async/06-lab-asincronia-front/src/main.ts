import {
    fetchPersonajes,
} from "./motor"

import {
    getDOMElements,
    renderPersonajes,
} from "./ui"

document.addEventListener("DOMContentLoaded", () => {
    try {
        const { form, searchInput, personajesContainer } = getDOMElements();

        // Evento de submit del formulario
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const nombre = searchInput.value.trim();
            const personajes = await fetchPersonajes(nombre);
            renderPersonajes(personajes, personajesContainer);
        });

        // Carga de todos los personajes al cargar la página
        fetchPersonajes().then(personajes => renderPersonajes(personajes, personajesContainer))
            .catch(error => console.error("Error al filtrar personajes", error));
    } catch (error) {
        console.error("Error al iniciar", error);
    }
});