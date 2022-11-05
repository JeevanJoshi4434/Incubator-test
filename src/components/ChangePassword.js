import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./css/ChangePassword.css"

const ChangePassword = () => {
  let history = useHistory();
  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const eventApply = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/password/update`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        oldPassword, newPassword, confirmPassword
      })

    });
    const json = await res.json()
    if (json.success) {

      // redirect
      localStorage.setItem('jwt', json.token);
      localStorage.setItem('user', JSON.stringify(json.user));
      window.alert("Successfully Changed the Password");
      history.push("/");
    } else {
      window.alert("please enter right credentials");
    }
  };
  return (
    <div className='mainChangePassword'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Old Password</label>
        <input type="password" onChange={(e) => setoldPassword(e.target.value)} value={oldPassword} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">New Password</label>
        <input type="password" onChange={(e) => setnewPassword(e.target.value)} value={newPassword} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div><div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Confirm New Password</label>
        <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="button" onClick={eventApply} class="btn btn-primary">Save changes</button>
    </div>
  )
}

export default ChangePassword
