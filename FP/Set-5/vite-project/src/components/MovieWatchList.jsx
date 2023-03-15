// Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

const MovieWatchList = () => {
  const movies = [
    { id: 1, title: "Sholay", director: "omkar" },
    { id: 2, title: "Bhool bhulaiya 2", director: "lokesh" },
    { id: 3, title: "RRR", director: "prince" },
    { id: 4, title: "Kantara", director: "Modi ji" },
  ];
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li>
            {movie.title} by {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};
export { MovieWatchList };
