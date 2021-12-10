// fetching API
const fetchMovies = async () => {
    let response = await fetch('https://striveschool-api.herokuapp.com/api/movies', {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWZkMjRjZmY1ZjAwMTU5MGJkYjEiLCJpYXQiOjE2Mzg5NjkyOTgsImV4cCI6MTY0MDE3ODg5OH0.lsD_gQd4SZDzSyWedc_rbw92wUru5ae72RFzFCcksd0"
        }
    })
    let data = await response.json()
    console.log(data)
}

window.onload = () => {
    fetchMovies()
}