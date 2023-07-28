let movies = [];

if(localStorage.getItem('movies')!==null) {
    movies = JSON.parse(localStorage.getItem('movies'))
}

function displayMovieTable(arr) {

    document.getElementById('movie_data').innerHTML ="";


    arr.forEach((movie, index) => {
        let row = document.createElement("tr");

        let numbering = document.createElement('td');
        numbering.append(index + 1);
        row.appendChild(numbering);

        let title = document.createElement('td');
        title.append(movie.title);
        row.appendChild(title);

        let releaseDate = document.createElement('td');
        releaseDate.append(movie.releaseDate);
        row.appendChild(releaseDate);

        let genres = document.createElement('td');
        movie.genres.forEach((genre, index) => {
            genres.append(genre + ".")
        })
        row.appendChild(genres);

        let duration = document.createElement('td');
        duration.append(movie.duration);
        row.appendChild(duration);

        let imdbRating = document.createElement('td');
        imdbRating.append(movie.imdbRating);
        row.appendChild(imdbRating);




        let actions = document.createElement('td');


        actions.classList.add('icons');

        let eye = document.createElement('i');
        eye.classList.add("fa-solid");
        eye.classList.add("fa-eye");
        actions.appendChild(eye);
        eye.onclick = openModal.bind(this, movie.id)


        let edit = document.createElement('i');
        edit.classList.add('fa-solid');
        edit.classList.add("fa-user-pen");
        actions.appendChild(edit);



        let deleteMovie = document.createElement('i');
        deleteMovie.classList.add('fa-solid');
        deleteMovie.classList.add('fa-trash-can');
        actions.appendChild(deleteMovie);





        row.appendChild(actions);


        document.getElementById('movie_data').appendChild(row);
    })


}


displayMovieTable(movies);




function openModal(movieid) {
    let movie = movies.find((movie, index) => {
        return movie.id === movieid
    })

    document.getElementById('movie_name').innerHTML = movie.title;
    document.getElementById('movie_storyline').innerHTML = movie.storyline;
    document.getElementById('movie_actors').innerHTML = movie.actors;
    document.getElementById('movie_releaseDate').innerHTML = movie.releaseDate;
    document.getElementById('movie_duration').innerHTML = movie.duration;
    document.getElementById('movie_imdb').innerHTML = movie.imdbRating;
    document.getElementById('movie_generes').innerHTML = movie.genres;
    document.getElementById('movie_img').src = movie.posterurl;


    document.getElementById("viewmodal").style.display = 'flex';
}

function closeModal(modalID) {
    document.getElementById(modalID).style.display = 'none';
}



// change attra text to date

function changetextTodate() {
    document.getElementById('add_releasdate').type = 'date';
}

//  open add movie Modal

function openAddMovieModal() {
    document.getElementById("addmodal").style.display = 'flex';
}


// CREATE MOVIE 


function createMovie(){

    let lastId;
    if(movies.length!==0){
        lastId = movies[movies.length-1].id
    }
    else{
        lastId = 0;
    }
    
    let movie = {
        id:lastId+1,
        ratings:[]
    }
    movie.title =document.getElementById('addMovieTitle').value;
    movie.genres =document.getElementById('addMovieGenres').value.split(',');
    movie.duration =document.getElementById('addMovieDuration').value;
    movie.releaseDate =document.getElementById('add_releasdate').value;
    movie.actors =document.getElementById('addMovieActors').value.split(',');
    movie.imdbRating =document.getElementById('addMovieIMDBRating').value;
    movie.posterurl=document.getElementById('addMoviePosterURL').value;
    movie.storyline =document.getElementById('addMovieStoryline').value;
    
    movies.push(movie);
    closeModal('addmodal');
    displayMovieTable(movies);
    document.getElementById('addMovieFormID').reset();
    localStorage.setItem('movies',JSON.stringify(movies));

console.log(movie);

}