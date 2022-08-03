import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Summary.css'

export default function Summary() {
  const { state } = useLocation();
  const { movie} = state;

  const navigate = useNavigate()

    function handleBookNow() {
       const movieName = movie.show.name;
        navigate(`/book-ticket/form`, { state: { movieName } })
    }

  return (
    <div>
      <div className='container'>
      <Link to='/' className='go-back-arrow'><i className="fa-solid fa-arrow-left"> </i> Go Back</Link>
        <div className="summary-card">
          <h2 className='text-center'>Movie   Summary</h2>
          <img alt="" src={movie.show.image.original} />
          <div className="user-info">
            <p>Name : {movie.show.name}</p><br />
            <p>Language: {movie.show.language}</p><br />
            <p>Rating: {movie.show.rating.average}</p><br />
          </div>
          <div className="description">
            <h3>Description</h3>
          <div dangerouslySetInnerHTML={{ __html: movie.show.summary }}></div>
          </div>
            <a className="know-more-btn ticket-booking-btn" type="button" href={movie.show.url}>Know More</a>  
            <button onClick={handleBookNow} className="ticket-booking-btn" type="button">Book TIcket</button>
          </div>
      </div>
  </div>
  )
}