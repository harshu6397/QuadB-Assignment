import React, { useState, useEffect } from 'react'
import UserCard from '../MovieCard/MovieCard';
import './MovieCardContainer.css';

export default function Content() {
  const [movieData, setMovieData] = useState([]);

  const apiData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const jsonData = await response.json();
      console.log(jsonData[0].show.image.original)
      setMovieData(jsonData);
    }
    catch (error) {
      console.log("Something went wrong");
    }
  }

  useEffect(() => {
    apiData();
  }, []);


  return (
    <div>
      <h1 className="heading">All Movies</h1>

      <div className="container">
        <div className="row">
          {movieData.map((movieItem) => {
            console.log(!movieItem.show.image ? "Not image found" : movieItem.show.image.original )
            return <div className="col-md-4" key={movieItem.show.url}>
              <UserCard movie={movieItem} name={movieItem.show.name} language={movieItem.show.language} image={!movieItem.show.image ? "Not image found" : movieItem.show.image.original} rating={movieItem.show.rating.average} id={movieItem.show.id} date={movieItem.show.premiered} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
