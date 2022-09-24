export const SaveInStorage = (key, element) => {
    //conseguir elementos que ya tenemos en localstorage
    let elements = JSON.parse(localStorage.getItem(key))

    //comprobar array
    if (Array.isArray(elements)) {
        // añadir dentro del array un elemento nuevo
        elements.push(element)
    }
    else{
        //crear un array con el nuevo elemento
        elements = [element]
    }
    localStorage.setItem(key, JSON.stringify(elements))

    return element
}

