import React from 'react';
import { Link } from 'react-router-dom';
import { BsCardImage } from 'react-icons/bs'

const Create = () => {
    return (
        <div className="create">
            <div className="createHeading">
                <h1>Create</h1>
                <h1 className="headingSpecial">Your</h1>
                <h1> Event</h1>
            </div>

            <form className="createForm">
                <input className="formInput" placeholder="🎉 Event name"/>
                <input className="formInput" placeholder="✋ Your name"/>
                <input className="formInput" type="date" placeholder="🎉 Start Time"/>
                <input className="formInput" type="date" placeholder="🎉 End Time"/>
                <input className="formInput" placeholder="📍 Location"/>
                    <input style={{display: "none"}} type="file" id="file" placeholder="Photo" />
                    <label htmlFor="file">
                    <div className="formImage">
                        <p className="imageLabel">Add an Image</p>
                        <BsCardImage />
                    </div>
                    </label>
            {/* Linked button goes to Event Page */}
            <Link to="/event"> <button className="button">Create Event</button> </Link>
            </form>
        </div>
    );
}

export default Create;
