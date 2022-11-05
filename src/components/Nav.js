import React from 'react'
import { useHistory } from 'react-router-dom';
import './css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  let history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/logout", {
      method: 'GET',
    });
    const json = await res.json()
    if (json.success) {
      // redirect
      localStorage.removeItem('jwt', json.token);
      localStorage.removeItem('user', JSON.stringify(json.user));
      window.alert("logout Successfuly");
      history.push("/login");
    } else {
      window.alert("Network Error");
    }
  }


  return (
    <div className='navbar'>
      <div className='left'>
        <h5><Link to="/">Incubator</Link></h5>
        <p><Link to="/course-event">Events</Link></p>
        <p><Link to="/course-event">Course</Link></p>
        <p><Link to="/aboutus">About us</Link></p>
      </div>
      <div className='right'>
        {/* <h5>Get started</h5> */}
        {!localStorage.getItem('user','jwt') ? <form className="d-flex">
          <Link className="btn btn-primary mx-2" to="/signup" role="button">Get Started</Link>
          </form> : 
          <p onClick={handleLogout}>Logout</p>   
        }
        {
          localStorage.getItem('user','jwt')?
          <p><Link to='/changepassword'>Change Password</Link></p>:
          <p></p>
        }

      </div>
    </div>
  )
}

export default Nav
