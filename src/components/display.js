import React from "react";
import { Link } from "react-router-dom";

function Display({ contact }) {
    return (
        <div className="card" style={{ width: 18 + "rem" }} key={contact.id}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Faenza-avatar-default-symbolic.svg/1024px-Faenza-avatar-default-symbolic.svg.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{contact.fname} {contact.lname}</h5>
                <p className="card-text">{contact.home }</p>
                <Link to={`details/${contact.id}`} className="btn btn-primary">Full details</Link>
            </div>
        </div>
    )
}

export default Display