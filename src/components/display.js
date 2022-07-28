import React from "react";
import { Link } from "react-router-dom";

function Display({ contact }) {
    return (
        <div className="card" style={{ width: 18 + "rem" }} key={contact.id}>
            <img src="https://www.howtogeek.com/wp-content/uploads/2020/05/spilled-coffee-on-laptop-keyboard.jpg?height=200p&trim=2,2,2,2" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{contact.fname} {contact.lname}</h5>
                <p className="card-text">{contact.home }</p>
                <Link to={`details/${contact.id}`} className="btn btn-primary">Full details</Link>
                <Link to="edit" className="btn btn-success"> Edit</Link>
            </div>
        </div>
    )
}

export default Display