import React from 'react';
import { Link } from 'react-router-dom';

import birthday from '../img/birthday.png';
import { FaCalendar } from 'react-icons/fa';
import { GrFormNext, GrLocation } from 'react-icons/gr';

const Event = () => {
    return (
        <div>
            <img className="birthday" src={birthday} alt="Birthday Cake"/>
            <h1 className="eventtitle">Birthday Bash</h1>
            <p className="host">Hosted by <span className="bold">Elysia</span></p>
            
            <div className="details">
                <div className="iconAndInfo">
                    <div className="icon">
                        <FaCalendar />
                    </div>
                    <div className="info">
                        <p className="bold">18 August 6:00PM</p>
                        <p>to <span className="bold">19 August 1:00PM UTC +10</span></p>
                    </div>
                </div>
                <div className="next">
                    <GrFormNext />
                </div>
            </div>

            <div className="details">
                <div className="iconAndInfo">
                    <div className="icon">
                        <GrLocation />
                    </div>
                    <div className="info">
                        <p className="bold">Street Name</p>
                        <p>Suburb, State, Postcode</p>
                    </div>
                </div>
                <div className="next">
                    <GrFormNext />
                </div>
            </div>
            <Link to="/"> <button>Home</button> </Link>
        </div>
    );
}

export default Event;
