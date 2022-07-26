import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactList() {
    const [contact, setContact] = useState("")
    useEffect(() => {
        fetch("http://localhost:4000/contact")
            .then(r => r.json())
        .then(data => data.map((contact) => setContact(contact)))
    }, [])
    return (
        <div className="card" style={{ width: 18 + "rem" }}>
            <img src="https://www.howtogeek.com/wp-content/uploads/2020/05/spilled-coffee-on-laptop-keyboard.jpg?height=200p&trim=2,2,2,2" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{contact.fname} {contact.lname}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="details" className="btn btn-primary">Full details</Link>
            </div>
        </div>
        
    )
}

export default ContactList