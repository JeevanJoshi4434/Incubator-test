import React from 'react'
import { useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';

import "./css/forgotPassword.css"
const ForgotPassword = () => {

  let history = useHistory();
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  let {token} = useParams(); 
  console.log(token);
  const eventApply = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/password/reset/${token}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password, confirmPassword
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
      window.alert("please enter right credentials / time has expired");
    }
  };
  return (
    <div className=' forgotPass'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">New Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Confirm New Password</label>
        <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="button" onClick={eventApply} class="btn btn-primary">Save changes</button>
    </div>
  )
}

export default ForgotPassword
