function searchMovies() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        const title = movie.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}
