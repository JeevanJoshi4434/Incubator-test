import React from 'react'
import { useHistory } from 'react-router-dom';
import './css/Nav.css';
import { Link } from 'react-router-dom';
import imgLogo from './images-clipart/LOGO.png';

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
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img alt="Incubator" src={imgLogo} style={{height:"50px", weight:"50px"}} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Course</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  See more
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/collageteams">Collage Teams</Link></li>
                  <li><Link className="dropdown-item" to="/yourteam">Your team</Link></li>
                  {!localStorage.getItem('user', 'jwt') ? <form className="d-flex">
                    <Link className="btn btn-primary mx-2 dropdown-item" to="/signup" role="button">Get Started</Link>
                  </form> :
                    <p className="dropdown-item" onClick={handleLogout}>Logout</p>
                  }
                  {
                    localStorage.getItem('user', 'jwt') ?
                      <p><Link className="dropdown-item" to='/changepassword'>Change Password</Link></p> :
                      <p></p>
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className='left'>
        <h5><Link to="/">Incubator</Link></h5>
        <p><Link to="/course-event">Events</Link></p>
        <p><Link to="/course-event">Course</Link></p>
        <p><Link to="/aboutus">About us</Link></p>
      </div> */}
      {/* <div className='right'> */}
      {/* <h5>Get started</h5> */}
      {/* {!localStorage.getItem('user', 'jwt') ? <form className="d-flex">
          <Link className="btn btn-primary mx-2" to="/signup" role="button">Get Started</Link>
        </form> :
          <p onClick={handleLogout}>Logout</p>
        }
        {
          localStorage.getItem('user', 'jwt') ?
            <p><Link to='/changepassword'>Change Password</Link></p> :
            <p></p>
        } */}

      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Nav
