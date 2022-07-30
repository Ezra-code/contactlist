import React, { useEffect, useState } from "react";
import Display from "./display";
// import NewContact from "./newcontact";
function ContactList() {
    const [contact, setContact] = useState([])
    useEffect(() => {
        fetch("https://living-bolder-agustinia.glitch.me/contact")
            .then(r => r.json())
            .then(data => setContact(data))
    }, [contact])

    const dispContact = contact.map((item) => <Display contact={item} key={item.id} />)
    // { <NewContact postContact={postContact} /> }

    return (
        <div className="contact-list">
            {dispContact}
        </div>
        
    )
  
}

export default ContactList