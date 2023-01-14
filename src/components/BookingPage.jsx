import React from 'react'
import './booking.css'
import { useReducer } from 'react';
import axios from 'axios';


let apiData = [];

function Main() {

  const [state, dispatch] = useReducer(updateTimes, { date: '', availableTimes: [] });
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';
  
  axios.get(CORS_PROXY + API_URL)
  .then(response => {
      const apiData = response.data;
  })
  .catch(error => {
      console.log(error);
  });

  
  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_DATE':
        return { ...state, date: action.date, availableTimes: initializeTimes(action.date) };
      default:
        return state;
    }
  }

    

      function initializeTimes(date) {
        
        // use the apiData to retrieve the available times for the selected date
        const selectedDateData = apiData.find(data => data.date === date);
        return selectedDateData ? selectedDateData.availableTimes : [];
      }
    

  return (
    <div>
      <BookingForm state={state} dispatch={dispatch} />
    </div>
  );
}

function BookingForm({ state, dispatch }) {
  return (
    <div className='Form-container'>
      <form className='reservation-form' style={{ display: "grid", maxWidth: 200, gap: 20 }}>
        <label htmlFor="res-date" className='reservation-label'>Choose date</label>
        <input
          type="date"
          id="res-date"
          className='reservation-input'
          value={state.date}
          onChange={e => dispatch({ type: 'UPDATE_DATE', date: e.target.value })}
        />
        <label htmlFor="res-time" className='reservation-label'>Choose time</label>
        <select id="res-time" className='reservation-select'>
          {state.availableTimes ? state.availableTimes.map(time => <option key={time}>{time}</option>) : null}
        </select>
        <label htmlFor="guests" className='reservation-label'>Number of guests</label>
        <input
          type="number"
          placeholder={1}
          min={1} max={10}
          id="guests"
          className='reservation-input'
        />
        <label htmlFor="occasion" className='reservation-label'>Occasion</label>
        <select id="occasion" className='reservation-select'>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" defaultValue="Make Your reservation" className='reservation-submit' />
      </form>
    </div>
  );
}

export default Main;