import React from "react";
import { useEffect, useState } from "react";
function Details() {
        const [contact, setContact] = useState("")
        useEffect(() => {
            fetch("http://localhost:4000/contact")
                .then(r => r.json())
                .then(data => data.map((contact) => setContact(contact)))
        }, [])
    return (
          <div className="card" style={{ width: 18 + "rem" }} key={contact.id}>
            <img src="https://www.howtogeek.com/wp-content/uploads/2020/05/spilled-coffee-on-laptop-keyboard.jpg?height=200p&trim=2,2,2,2" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><strong>Name:</strong> {contact.fname} {contact.lname}</h5>
                <p className="card-text"><strong>phone</strong> {contact.number}</p>
                <p className="card-text"><strong>Work:</strong> {contact.occupation}</p>
                <p className="card-text"><strong>Home:</strong> {contact.residence}</p>
            </div>
        </div>
    )
}

export default Details