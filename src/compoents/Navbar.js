import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div className="title">
                <h2>Contact</h2>
            </div>
            <ul>
                <li>Home</li>
                <li>Add</li>
                <li>Favorites</li>
                <li>Edit</li>
            </ul>
        </nav>
    )
}

export default NavBar