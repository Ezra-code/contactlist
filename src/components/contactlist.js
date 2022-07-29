import React, { useEffect, useState } from "react";
import Display from "./display";

function ContactList() {
    const [contact, setContact] = useState([])
    useEffect(() => {
        fetch("https://tourmaline-boiled-damselfly.glitch.me/contact")
            .then(r => r.json())
            .then(data => setContact(data))
    }, [contact])

    const dispContact = contact.map((item) => <Display contact={item} key={item.id}  /> )

    return (
        <div className="contact-list">
            {dispContact}
        </div>
        
    )
  
}

export default ContactList