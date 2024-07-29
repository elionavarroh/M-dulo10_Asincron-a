import {
    Personaje,
} from "./model"


export const fetchPersonajes = async (nombre: string = ''): Promise<Personaje[]> => {
    const response = await fetch(`http://localhost:3000/personajes?nombre_like=${nombre}`);
    if (!response.ok) {
        throw new Error('Error al obtener personajes');
    }
    const personajes: Personaje[] = await response.json();
    return personajes;
};

