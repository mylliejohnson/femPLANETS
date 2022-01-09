import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav>
            <h2 id="nav-title"><a href="/mercury">THE PLANETS</a></h2>
            <ul>
                <Link to="/mercury"><li >MERCURY</li></Link>
                <Link to="/venus"><li>VENUS</li></Link>
                <Link to="/earth"><li>EARTH</li></Link>
                <Link to="/mars"><li>MARS</li></Link>
                <Link to="/jupiter"><li>JUPITER</li></Link>
                <Link to="/saturn"><li>SATURN</li></Link>
                <Link to="/uranus"><li>URANUS</li></Link>
                <Link to="/neptune"><li>NEPTUNE</li></Link>

            </ul>
        </nav>
    );
}

export default Navbar;