import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const CardEvent = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
    const [Student_ID, setStudent_ID] = useState('');
    const [title, setTitle] = useState('');
    const [CollageName, setCollageName] = useState('');
  const eventApply = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/registrations`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,Student_ID,title,CollageName
      })

    });
    const json = await res.json()
        if(json.success){
          
          // redirect
        window.alert("Registration Successfully");
          history.push("/");
        }else{
          window.alert("Network Error / User already registered");
        }
  };
  let { Title,Description, onDate, EventID,collageName,endDate } = props;
  return (
    <div className='event'>
      
      <div className="card my-0.5 mx-1" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{onDate}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Collage: {collageName}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Event/Course ID: {EventID}</h6>
          <p className="card-text">{Description}</p>
          <a data-bs-toggle="modal" data-bs-target="#exampleModal3">Enroll Now {endDate}</a>
          {/* <a href="#" className="card-link"></a> */}
        </div>
      </div>
      <div className='event-modal'>
        {/* Event modal */}
        <div className='course-modal'>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <p class="modal-title fs-5" id="exampleModalLabel">Enrollment form</p>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Event ID</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} name="name"  value={title} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="name"  value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Student Id</label>
                    <input type="text"onChange={(e) => setStudent_ID(e.target.value)}  name="Student_ID"  value={Student_ID} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Collage Name</label>
                    <input type="text"onChange={(e) => setCollageName(e.target.value)}  name="Student_ID"  value={CollageName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={eventApply} class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CardEvent
