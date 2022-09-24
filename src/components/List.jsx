import React, { useEffect, useState } from "react";
import Edit from "./Edit";

const List = ({ listState, setListState }) => {

  const [edit, setEdit] = useState(0)

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListState(movies);
    return movies
  };

  const deleteMovie = (id) => {
    console.log(id)
    let movies_saves = getMovies()
    //filtrar movies que no quiero
    let new_array_movies = movies_saves.filter(movie => movie.id !== parseInt(id))
    //actualizar listado
    setListState(new_array_movies)
    //actualizar datos
    localStorage.setItem('movies', JSON.stringify(new_array_movies))
  }

  return (
    <>
      {
        listState != null ?
          (
            listState.map((movie) => (
              <article className="peli-item" key={movie.id}>
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>

                <button className="edit" onClick={() => {
                  setEdit(movie.id)
                }}
                >
                  Editar
                </button>
                <button className="delete" onClick={() => deleteMovie(movie.id)}>
                  Borrar
                </button>

                {
                  edit === movie.id && (
                    <Edit
                      movie={movie}
                      getMovies={getMovies} 
                      setEdit={setEdit} 
                      setListState={setListState}
                    >
                    </Edit>
                  )
                }

              </article>
            ))
          ) : (
            <h2>No hay movies cargadas</h2>
          )
      }
    </>
  );
};

export default List;
