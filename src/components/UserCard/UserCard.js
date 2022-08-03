import React from 'react'
import './UserCard.css';
import { useNavigate } from "react-router-dom";

export default function UserCard(props) {
   const {movie, name, language, image, rating, id, date } = props;
   const navigate = useNavigate()

    function handleClick() {
        navigate(`/summary/${id}`, { state: { movie} })
    }

  return (
    <div className='user-card-container'>
      <div className="user-card">
        <div className='rating-tag'>
          <span className="badge rounded-pill text-light bg-danger">Rating : {rating?rating:'7.2'}</span>
        </div>
        <img alt="" src={image} />
        <div className="user-info">
          <p>Name : {name}</p><br />
          <p>Language: {language}</p><br />
          <p >Premiered Date: <small >{new Date(date).toUTCString()}</small></p>
        </div>
        <button onClick={handleClick} className="btn" type="button">Get Summary</button>
      </div>
    </div>
  )
}
