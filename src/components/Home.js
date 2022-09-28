import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Imagine if</h1>
            <h1>SnapChat</h1>
            <h1>had events.</h1>

            <p>Easily host and share events with your</p>
            <p>Friends across any social media.</p>
            {/* Linked Button goes to Create Page */}
            <Link to="/create"> <button>Create my event</button> </Link>
        </div>
    );
}

export default Home;
