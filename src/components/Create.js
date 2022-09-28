import React from 'react';
import { Link } from 'react-router-dom';


const Create = () => {
    return (
        <div>
            This is the Create Page
            {/* Linked button goes to Event Page */}
            <Link to="/event"> <button>Create Event</button> </Link>
        </div>
    );
}

export default Create;
