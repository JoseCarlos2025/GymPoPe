import { push as pushDatabase, ref, set, get, update, remove } from "firebase/database";
import database from "../../Firebase";

// Crear un comentario
export const crearComentario = (nombre, contenido) => {
    const nuevoComentarioRef = pushDatabase(ref(database, 'comentarios'));
    return set(nuevoComentarioRef, {
        nombre: nombre,
        contenido: contenido,
    })
        .then(() => {
            console.log("Comentario creado con ID: ", nuevoComentarioRef.key);
            return nuevoComentarioRef.key;
        })
        .catch((error) => {
            console.error("Error al crear comentario: ", error);
            throw error;
        });
};

// Leer comentarios
export const obtenerComentarios = () => {
    return get(ref(database, 'comentarios'))
        .then((snapshot) => {
            const comentarios = [];
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    comentarios.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
            }
            return comentarios;
        })
        .catch((error) => {
            console.error("Error al obtener comentarios: ", error);
            throw error;
        });
};

// Actualizar un comentario
export const actualizarComentario = (comentarioId, nuevoContenido) => {
    return update(ref(database, `comentarios/${comentarioId}`), {
        contenido: nuevoContenido,
    })
        .then(() => {
            console.log("Comentario actualizado con ID: ", comentarioId);
        })
        .catch((error) => {
            console.error("Error al actualizar comentario: ", error);
            throw error;
        });
};

// Eliminar un comentario
export const eliminarComentario = (comentarioId) => {
    return remove(ref(database, `comentarios/${comentarioId}`))
        .then(() => {
            console.log("Comentario eliminado con ID: ", comentarioId);
        })
        .catch((error) => {
            console.error("Error al eliminar comentario: ", error);
            throw error;
        });
};

