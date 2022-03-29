import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';

export default function MovieList(props) {
 
  
  useEffect(() => {
    props.titlePage(`All Movies`)
  }, [])
  
    /* avoid rendering before loading info */
  if (!props) return "loading...";
  

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const {url} = useRouteMatch()
  const { title, director, metascore, id } = props.movie;
  
  return (
    <div className="movie-card">
      
      <Link to={`${url}movies/${id}`}><h2>{title}</h2> </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
