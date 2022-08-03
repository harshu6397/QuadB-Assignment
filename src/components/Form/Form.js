import React, { useState } from 'react'
import "./Form.css";
import { Link, useLocation } from "react-router-dom";
import SelfDismissAlert from './SelfDismissAlert';

export default function Form() {
  const { state } = useLocation();
  const [alert, setAlert] = useState(null)

  const showAlert = (message) => {
    setAlert({
        msg: message
    })

    setTimeout(() => {
        setAlert(null)
    }, 2000);
}
  const { movieName } = state;

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: ""
  })

  function handleChange(e) {
    setUserDetail({
      ...userDetail, [e.target.name]: e.target.value
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // Creating the Movie Booking Detail object
    let movieBookingDetail = {
      MovieName: movieName,
      userDetail
    }

    let localStorageMoviesData = localStorage.movieBookingDetail

    // Add the data to the local Stroage
    if (!localStorageMoviesData) {
      localStorage.setItem('movieBookingDetail', JSON.stringify([movieBookingDetail]));
    }
    else {
      let parseArray = JSON.parse(localStorageMoviesData)
      let newArrayStorage = [
        ...parseArray, movieBookingDetail
      ]
      localStorage.setItem('movieBookingDetail', JSON.stringify(newArrayStorage));
    }
    setUserDetail({
      name: "",
      email: ""
    })
    showAlert("You Booked your ticket succefully!")
  }
  
  return (
    <div className='container'>
      <SelfDismissAlert alert={alert}/>
      <Link to='/' className='go-back-arrow'><i className="fa-solid fa-arrow-left"> </i> Go to Home</Link>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group" >
          <label htmlFor="exampleInputEmail1">Movie Name</label>
          <input type="text" className="form-control" id="exampleInputName" defaultValue={movieName} aria-describedby="nameHelp" placeholder="Enter movie name" />
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" required name="name" id="name" value={userDetail.name} onChange={handleChange} aria-describedby="nameHelp" placeholder="Enter your name" />
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" required name="email" id="email" value={userDetail.email} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter your email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
