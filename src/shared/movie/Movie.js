import './Movie.css';

function Movie(props) {
    return (
      <div className="movie p-1 text-center">
        <h1>{props.movie.title}</h1>
        <p>{props.movie.year}</p>
        <p>dir.{props.movie.director}</p>
      </div>
    );
}

export default Movie;