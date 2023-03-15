console.log('Hello World!')

const message = document.querySelector('#message')

let addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span') 
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click',crossOffMovie)

    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'

}
document.querySelector('form').addEventListener('submit',addMovie)

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    
    } else {
        message.textContent = 'Movie added back!'
     
    }
}


