class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG"),
    new Movie("Movie 4", "Studio 4", "PG-13"),
    new Movie("Movie 5", "Studio 5", "PG")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
