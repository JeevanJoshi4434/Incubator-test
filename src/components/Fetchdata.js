import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CardEvent from './subcomponent/CardEvent';
const Fetchdata = () => {
    
    const [data, setData] = useState([]);
    const fetchEvent = ()=>{
        fetch(`/api/events`,{
          method:'GET',
          headers: {
              "Content-Type": "application/json"
            },
        }).then((response) =>{
          return response.json();
        }).then((data)=>{
          console.log(data)
          setData(data)
        })
      }
      useEffect(()=>{
        fetchEvent();
      },[]);

      const user = {
        "success": true,
        "events": [
          {
            "_id": "63593c178805cbc7ec5cccf4",
            "Title": "Java Core",
            "Description": "This is a course of java core",
            "onDate": "27 March 2022",
            "toDate": "27 March 2023",
            "__v": 0
          },
          {
            "_id": "63593c428805cbc7ec5cccf7",
            "Title": "c++ Core",
            "Description": "This is a course of C++ core",
            "onDate": "27 March 2022",
            "toDate": "27 March 2023",
            "__v": 0
          },
          {
            "_id": "63593c538805cbc7ec5cccfa",
            "Title": "c++ Core",
            "Description": "This is a course of C++ core",
            "onDate": "27 March 2022",
            "toDate": "27 March 2023",
            "__v": 0
          },
          {
            "_id": "63635875179800da945bfaec",
            "Title": "Paper 1 - GEHU (2022)",
            "Description": "Hey everyone, participate and increase your growth in coding field. Register Now!",
            "onDate": "10 November",
            "Event_ID": "GEHUB01",
            "__v": 0
          }
        ]
      }
  
  return (
  <>
    {/* {user.events.map((events)=>(
        <p>{events.Title}</p>
    ))} */}
    <div>
      Hii
    </div>
    {data.events?.map((event)=>{
        return(
        console.log(event.Description)
        // <p>{event.Title}</p>
        // <CardEvent Title={event.Title} Description={event.Description} onDate={event.onDate} EventID={event.Event_ID} />
        )
})}
    </>
  )
}

export default Fetchdata
