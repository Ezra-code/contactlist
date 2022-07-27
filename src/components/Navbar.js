import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="title">
                <h2>Contact</h2>
            </div>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? 'blue' : '#f0f0f0',
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="Add"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? 'blue' : '#f0f0f0',
                        })}
                    >
                        Add
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="favorites"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? 'blue' : '#f0f0f0',
                        })}
                    >
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="edit"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? 'blue' : '#f0f0f0',
                        })}
                    >
                        Edit
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar