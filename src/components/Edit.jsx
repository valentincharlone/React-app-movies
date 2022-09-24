import React from 'react'

const Edit = ({movie, getMovies, setEdit, setListState}) => {

    const titleComponent = "Edit Movie"

    const saveEdit = (e, id) => {
        e.preventDefault()
        //conseguimos target del evento
        let target = e.target
        //buscar el indice del objeto de la pelicula a actualizar
        let movies_almacenadas = getMovies()
        const index = movies_almacenadas.findIndex(movie => movie.id === parseInt(id))

        //creamos objeto con ese indice, title, description
        let update_movie = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        //actualizar elemento con ese indice
        movies_almacenadas[index] = update_movie
        //guardar datos en el localstorage
        localStorage.setItem('movies', JSON.stringify(movies_almacenadas))
        //actualizamos el estado
        setListState(movies_almacenadas)
        setEdit(0)
        
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titleComponent}</h3>
            <form onSubmit={(e) => saveEdit(e, movie.id)}>
                <input 
                    type="text" 
                    name='title' 
                    className='titulo_editado' 
                    defaultValue={movie.title} 
                />
                <textarea 
                    name="description" 
                    cols="10" 
                    rows="8" 
                    defaultValue={movie.description}
                    className='descripcion_editada'>

                </textarea>
                <input type="submit" className='editar' value='update' />
            </form>
        </div>
    )
}

export default Edit