import React, { useState, useEffect } from 'react'
import UserCard from '../UserCard/UserCard';
import './UserCardContainer.css';

export default function Content() {
  const [movieData, setMovieData] = useState([]);

  const apiData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const jsonData = await response.json();
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
            return <div className="col-md-3" key={movieItem.show.url}>
              <UserCard movie={movieItem} name={movieItem.show.name} language={movieItem.show.language} image={movieItem.show.image.original} rating={movieItem.show.rating.average} id={movieItem.show.id} date={movieItem.show.premiered} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
