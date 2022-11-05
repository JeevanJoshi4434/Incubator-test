import React from 'react';
import Animesh from "./images-clipart/Animesh.jpg";
import Anjali from "./images-clipart/Anjali.jpg";
import Jeevan from "./images-clipart/Jeevan.jpg";
import Prakhar from "./images-clipart/prakhar.jpg";
import sankalp from "./images-clipart/sankalp.jpg";
import Vasu from "./images-clipart/Vasu.jpg";
import fb from "./images-clipart/facebook.png";
import instagram from "./images-clipart/instagram.png";
import linkedin from "./images-clipart/linkedId.png";
// import { Link } from 'react-router-dom';
import "./css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className='profiles'>
      <div className='profile mx-3 my-1'>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Prakhar} class="card-img-top" alt="Jeevan Joshi" />
          <div class="card-body">
            <h5 class="card-title">Prakhar Singh</h5>
            <h6 className="card-subtitle mb-2 text-muted">Founder | Director</h6>
            <p class="card-text">A very passionate entrepreneur and a driven individual with an aim to create impact</p>
            {/* <a target="_blank" href="https://www.facebook.com/jeewan.joshi.3133"><img src={fb} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.facebook.com/jeewan.joshi.3133" /></a> */}
            <a target="_blank" href="https://www.instagram.com/prakhar_thakur_315"><img src={instagram} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.instagram.com/prakhar_thakur_315" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/prakhar-singh-73291b"><img src={linkedin} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.linkedin.com/in/jeevan-joshi-5a19a8225/" /></a>
          </div>
        </div>
      </div>
      <div className='profile mx-3 my-1'>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Jeevan} class="card-img-top" alt="Jeevan Joshi" />
          <div class="card-body">
            <h5 class="card-title">Jeevan Joshi(CTO)</h5>
            <h6 className="card-subtitle mb-2 text-muted">Full Stack | Java Developer</h6>
            <p class="card-text">A highly driven individual with a spirit to make a diffrence Jeevan Joshi is the epitome of technical knowledge probably more comfortable in javascript then his mother tongue pun intended</p>
            <a target="_blank" href="https://www.facebook.com/jeewan.joshi.3133"><img src={fb} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.facebook.com/jeewan.joshi.3133" /></a>
            <a target="_blank" href="https://www.instagram.com/jeevan_joshi_4434"><img src={instagram} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.instagram.com/jeevan_joshi_4434" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jeevan-joshi-5a19a8225"><img src={linkedin} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.linkedin.com/in/jeevan-joshi-5a19a8225/" /></a>
          </div>
        </div>
      </div>
      <div className='profile mx-3 my-1'>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Anjali} class="card-img-top" alt="Anjali Joshi" />
          <div class="card-body">
            <h5 class="card-title">Anjali Joshi</h5>
            <h6 className="card-subtitle mb-2 text-muted">Managing director | Content head</h6>
            <p class="card-text">Anjali till now has been a major contributor in the content and presentation on things And is keen to the functioning of this venture anjali is the true defination of getting it done.</p>
            <a target="_blank" href="https://www.instagram.com/anjali_joshi_1402"><img src={instagram} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.instagram.com/anjali_joshi_1402" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/anjali-joshi-78aa70255"><img src={linkedin} className="mx-1" style={{ width: "20px", height: "20px" }} alt="https://www.linkedin.com/in/anjali-joshi-78aa70255/" /></a>
          </div>
        </div>
      </div>
      <div className='profile mx-3 my-1'>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Vasu} class="card-img-top" alt="Jeevan Joshi" />
          <div class="card-body">
            <h5 class="card-title">Vashudev Agrawal</h5>
            <h6 className="card-subtitle mb-2 text-muted">Managing director</h6>
            <p class="card-text">Charm and light of our team likes to put a question mark on everything henceforth he is managing tests and competitions</p>
          </div>
        </div>
      </div>
      <div className='profile mx-3 my-1'>
        <div class="card" style={{ width: "18rem" }}>
          <img src={sankalp} class="card-img-top" alt="Jeevan Joshi" />
          <div class="card-body">
            <h5 class="card-title">Sankalp dev</h5>
            <h6 className="card-subtitle mb-2 text-muted">CEO</h6>
            <p class="card-text">The CEO has been playing a key role in the public relations. From teachers to students he's been communicating messages undoubtedly and laying down the idea for the company</p>
          </div>
        </div>
      </div>
      <div className='profile mx-3 my-1'>
        <div class="card" style={{ width: "18rem" }}>
          <img src={Animesh} class="card-img-top" alt="Jeevan Joshi" />
          <div class="card-body">
            <h5 class="card-title">Animesh Singh</h5>
            <h6 className="card-subtitle mb-2 text-muted">Managing director</h6>
            <p class="card-text">He is a solid foundation to our venture, ensuring that everything is done smoothly and within time limits.Giving us that necessary consistency.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
