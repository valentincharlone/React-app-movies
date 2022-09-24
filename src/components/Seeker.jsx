import React, { useState } from 'react'

const Seeker = ({listState, setListState}) => {

    const [busqueda, setBusqueda] = useState('')
    const [notFound, setNotFound] = useState(false)

    const searchMovie = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
        let find_movies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(busqueda.toLowerCase())
        })

        if(busqueda.length <= 1 || find_movies <= 0){
            find_movies = JSON.parse(localStorage.getItem('movies'))
            setNotFound(true)
        }
        else{
            setNotFound(false)
        }
        setListState(find_movies)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {
                notFound == true && <span className='not_found'>Movies no econtradas</span>
            }
            <form>
                <input 
                    type="text" 
                    id="search_field" 
                    name='search'
                    autoComplete='off'
                    value={busqueda}
                    onChange={ searchMovie}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default Seeker