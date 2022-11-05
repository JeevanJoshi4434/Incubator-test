import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./css/admin.css";
import "./css/AboutUs.css";
import CardEvent from './subcomponent/CardEvent';

const Event = () => {
   //collect event data
   const [data, setData] = useState([]);
  // fetch Event
  const fetchEvent = () => {
    fetch(`/api/events`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
      setData(data)
    })
  }
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <div>
      <div className='sections'>
        <div className='profiles'>
          Events:
          {data.events?.map((event) => {
            return (
              <CardEvent className="eventCard" Title={event.Title} Description={event.Description} onDate={event.onDate} EventID={event.Event_ID} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Event
