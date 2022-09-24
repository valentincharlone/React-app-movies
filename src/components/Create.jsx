import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage'

const Create = ({setListState}) => {

    const titulo = "Add Movie"
    const [movieState, setMovieState] = useState({
        title: "",
        description: ""
    })
    // const {title, description} = movieState;

    const handleSubmit = (e) => {
        e.preventDefault()
        let target = e.target
        let title = target.title.value
        let description = target.description.value

        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        setMovieState(movie)
        setListState(elements => {
            return [...elements, movie]
        })

        SaveInStorage('movies', movie)

    }
    


    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="title" 
                    name='title' 
                    placeholder="Titulo" 
                />
                <textarea 
                    id="description" 
                    name='description' 
                    placeholder="Descripción">
                </textarea>
                <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" 
                />
            </form>
        </div>
    )
}

export default Create