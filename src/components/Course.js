import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './subcomponent/Card';
import CardEvent from './subcomponent/CardEvent';

const Course = () => {
  //collect event data
  const [data, setData] = useState([]);
  // collect course data
  const [courseData, setCourseData] = useState([]);
  // fetchCourse 
  const fetchCourse = () => {
    fetch(`/api/courses`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      return response.json();
    }).then((file) => {
      console.log(file)
      setCourseData(file)
    })
  }
  useEffect(() => {
    fetchCourse();
  }, []);
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
      <div className='eventList'>
        Courses :
        {courseData.course?.map((i) => {
          return (
            <Card className="eventCard" Title={i.title} Description={i.description} />
          )
        })}
      </div>
      <div className='eventList'>
        Events:
        {data.events?.map((event) => {
          return (
            <CardEvent className="eventCard" Title={event.Title} Description={event.Description} onDate={event.onDate} EventID={event.Event_ID} />
          )
        })}
      </div>
    </div>
  )
}

export default Course
