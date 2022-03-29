import axios from 'axios'
import React, {useState, useEffect} from 'react';
import { useRouteMatch, Link, useParams } from 'react-router-dom';
import { MOVIES_BY_ID_URL } from './constants';


export default function MovieCard (props) {
  /* store retrieved actors from external API CALL */
  const [movieInfo, setMovieInfo] = useState(null)
  // const {url} = useRouteMatch()
  const {movieId} = useParams() // get the exact same param from the routing : path='/movie/:movieId' 
  

  
  useEffect(() => {
    const getActors = () => {
      axios
        .get(`${MOVIES_BY_ID_URL}/${movieId}`) 
        .then(response => {
          setMovieInfo(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getActors();
  }, []);

  /* avoid rendering before loading info */
  if (!movieInfo) return "Hold yer horses, be back in a sec!";

  props.titlePage(`Movie:${movieInfo.title}`)
  
  return (
    <div className="movie-card">
      <h2>{movieInfo.title}</h2>
      <div className="movie-director">
        Director: <em>{movieInfo.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movieInfo.metascore}</strong>
      </div>
      <h2>Actors</h2>

      <div className="movie-metascore">
        { movieInfo.stars.map(star => (
              <Actors info={star} key={movieInfo.id} />
            ))}
      </div>


    </div>
  );
}

function Actors(props) {
  return (    
     <p>{props.info}</p>
  );


}