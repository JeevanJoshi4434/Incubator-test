import React from 'react'
import './css/home.css';
import { useHistory } from 'react-router-dom';
import Image1 from './images-clipart/background1.png';
import Image2 from './images-clipart/clipart.png';
import { useEffect,useState } from 'react';
import CardEvent from './subcomponent/CardEvent';
const Home = () => {

    let history = useHistory();
    
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem('user', 'jwt')) {
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [])
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
        <>
            <div className='home'>
                <img className='img1' src={Image1}></img>
                <h5 className='heading'>Upgrade your skills with</h5>
                <p className='gradient-text'>Incubator's Competive Events</p>
                <img className='img2' src={Image2}></img>
                <div className='home-event'>
                    <div className='title'>
                        <p>Participate on <span className='gradient-text'>Events</span></p>
                        <p>now</p>
                        <div className='cards'>
                            {data.events?.map((event) => {
                                return (
                                    <CardEvent className="eventCard" collageName={event.cName} Title={event.Title} Description={event.Description} onDate={event.onDate} EventID={event._id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
