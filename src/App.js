import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import Admin from './components/Admin';
import ChangePassword from './components/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Fetchdata from './components/Fetchdata';
import Course from './components/Course';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
    <Router >
      <Nav />
      <Switch>
      <Route exact path="/">
        <Home /> 
      </Route>  
          <Route exact path="/login" >
            <Signin />
          </Route>
          <Route exact path="/changepassword" >
            <ChangePassword />
          </Route>
          <Route exact path="/testing" >
            <Fetchdata />
          </Route>
          <Route exact path="/course-event" >
            <Course />
          </Route>
          <Route exact path="/forgotpassword" >
            <ResetPassword />
          </Route>
          <Route exact path="/password/reset/:token" >
            <ForgotPassword />
          </Route>
          
          <Route exact path="/signup" >
            <SignUp />
          </Route>
          <Route exact path='/admin'>
            <Admin />
          </Route>
          <Route exact path='/aboutus'>
            <AboutUs />
          </Route>
          
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
