import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


export default function MovieList(props) {
  
  props.titlePage(`All Movies`)


  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const {url} = useRouteMatch()


  return (
    <div className="movie-card">
      
      <Link to={`${url}/${id}`}><h2>{title}</h2> </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
