// Global Variables
let submitForm = document.querySelector('#form-submit')
let editBtn = document.querySelector('#edit-btn')
let editIcon = document.querySelector('#editIcon')
let deleteIcon = document.querySelector('#deleteIcon')
let movieListNode = document.querySelector('#movie-list')
// api
let url = 'https://striveschool-api.herokuapp.com/api/movies'



// Add movies
const addMoviesList = async () => {
    try {
        submitForm.addEventListener('submit', async (event) => {
            event.preventDefault()
           
            // send new movie to api 
            let response = await fetch('https://striveschool-api.herokuapp.com/api/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWZkMjRjZmY1ZjAwMTU5MGJkYjEiLCJpYXQiOjE2Mzg5NjkyOTgsImV4cCI6MTY0MDE3ODg5OH0.lsD_gQd4SZDzSyWedc_rbw92wUru5ae72RFzFCcksd0"
                },
                body: JSON.stringify({
                    name: `${event.target.name.value}`,
                    description: `${event.target.description.value}`,
                    category: `${event.target.genre.value}`,
                    imageUrl: `${event.target.imageUrl.value}`
                })
            })
            let data = await response.json()
            console.log(data)

            
            // clear form
            submitForm.reset()
            alert('Added successfully')
            
        })
    } catch (error) {
        alert(error)
    }
  
}


// Edit movies
const editMoviesList = async () => {

}

// Displaying Movie List
const displayMovieList = async () => {
   try {
       let genreList = document.querySelector('#genre-list')
       genreList.addEventListener('change', async (event) => {
           let genreVal = event.target.value
           let response = await fetch(`${url}/${genreVal}`, {
               headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWZkMjRjZmY1ZjAwMTU5MGJkYjEiLCJpYXQiOjE2Mzg5NjkyOTgsImV4cCI6MTY0MDE3ODg5OH0.lsD_gQd4SZDzSyWedc_rbw92wUru5ae72RFzFCcksd0"
               }
           }) 
           let movies = await response.json()
           console.log(movies)

           // displaying choosed movies
           movies.forEach((movie) => {
                let listItem = document.createElement('li')
                listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items')
                listItem.innerHTML = `
                <div style="line-height: 5px;">
                     <p class="font-weight-bold">${movie.name.charAt(0).toUpperCase() + movie.name.slice(1)}</p>
                     <small class="text-muted font-weight-bold">${movie.category.charAt(0).toUpperCase() + movie.category.slice(1)}</small>
                 </div>
                 <div>
                     <i data-id=${movie._id} id="editIcon" class="text-success bi bi-pencil-square mr-4" style="cursor: pointer;"></i>
                     <i data-id=${movie._id} id="deleteIcon" class="text-danger bi bi-trash-fill" style="cursor: pointer;"></i>
                 </div>
                `
                
                movieListNode.appendChild(listItem)
           });
           
       })
   } catch (error) {
       alert(error)
   }
}

window.onload = () => {
    addMoviesList()
    displayMovieList()
}


// let response = await fetch(`${url+'/'+optionVal}`, {
//     headers: {
//         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWZkMjRjZmY1ZjAwMTU5MGJkYjEiLCJpYXQiOjE2Mzg5NjkyOTgsImV4cCI6MTY0MDE3ODg5OH0.lsD_gQd4SZDzSyWedc_rbw92wUru5ae72RFzFCcksd0"
//     }
// })
// let data = await response.json()
// console.log(data)