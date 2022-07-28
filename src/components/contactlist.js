import React, { useEffect, useState } from "react";
import Display from "./display";

function ContactList() {
    const [contact, setContact] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/contact")
            .then(r => r.json())
            .then(data => setContact(data))
    }, [])

    const dispContact = contact.map((item) => <Display contact={item} key={item.id}  /> )

    return (
        <div className="contact-list">
            {dispContact}
        </div>
        
    )
  
}

export default ContactList