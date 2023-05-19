import React, { useState, useEffect } from 'react';
import { crearComentario, obtenerComentarios, actualizarComentario, eliminarComentario } from '../../components/Crud/Crud';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Comentarios.css';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [nuevoContenido, setNuevoContenido] = useState('');
  const [editandoComentarioId, setEditandoComentarioId] = useState(null);

  useEffect(() => {
    cargarComentarios();
  }, []);

  const cargarComentarios = () => {
    obtenerComentarios()
      .then((comentarios) => {
        setComentarios(comentarios);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearComentario('Nombre Usuario', nuevoComentario)
      .then(() => {
        setNuevoComentario('');
        cargarComentarios();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleActualizar = (comentarioId) => {
    actualizarComentario(comentarioId, nuevoContenido)
      .then(() => {
        cargarComentarios();
        setNuevoContenido('');
        setEditandoComentarioId(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEliminar = (comentarioId) => {
    eliminarComentario(comentarioId)
      .then(() => {
        cargarComentarios();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleEditarComentario = (comentarioId) => {
    if (editandoComentarioId === comentarioId) {
      setEditandoComentarioId(null);
    } else {
      setEditandoComentarioId(comentarioId);
      setNuevoContenido('');
    }
  };

  return (
    <>
      <Header />
      <div className='Comentarios'>
        <h2>Comentarios</h2>
        <form onSubmit={handleSubmit}>
          <input className='Comentario-text' type="text" value={nuevoComentario} onChange={(e) => setNuevoComentario(e.target.value)} />
          <button type="submit">Agregar comentario</button>
        </form>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario.id}>
              <span>{comentario.contenido}</span>
              {editandoComentarioId === comentario.id ? (
                <>
                  <input type="text" value={nuevoContenido} onChange={(e) => setNuevoContenido(e.target.value)} />
                  <button onClick={() => handleActualizar(comentario.id)}>Guardar</button>
                </>
              ) : (
                <>
                  <button onClick={() => toggleEditarComentario(comentario.id)}>Editar</button>
                  <button onClick={() => handleEliminar(comentario.id)}>Eliminar</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Comentarios;
