import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from "react-router-dom";
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard';
import {MOVIES_URL} from './Movies/constants'
import {useDocTitle} from "./Movies/titleHook"


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const [doctitle, setDocTitle] = useDocTitle('');


  useEffect(() => {
    const getMovies = () => {
      axios
        .get(MOVIES_URL) // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
          setDocTitle('Home Page')
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);


  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>


        <Route path='/movies/:movieId'>
          <MovieCard titlePage={setDocTitle}  />
        </Route>

        <Route path='/movies' >
          <MovieList movies={movieList} titlePage={setDocTitle} ></MovieList>
        </Route>

        <Route path='/'>
          <HomeRedirect  />
        </Route>

      </Switch>
    </div>
  );

}

function HomeRedirect(params) {


  return (
    <div className="movie-card">
      <p><Link to='/movies'>Show Movies</Link></p>
    </div>
 )}