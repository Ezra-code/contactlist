import React, { useEffect, useState } from "react";

function ContactList() {
    const [contact, setContact] = useState("")
    useEffect(() => {
        fetch("http://localhost:4000/contact")
            .then(r => r.json())
        .then(data => data.map((contact) => setContact(contact)))
    }, [])
    return (
        <>
            <h1><strong>Name:</strong> {contact.fname} {contact.lname}</h1>
            <h3><strong>Number:</strong> +{contact.number}</h3>
            <p><strong>Work:</strong> {contact.occupation}</p>
            <p><strong>Place of Residence:</strong> {contact.residence}</p>
        </>
        
    )
}

export default ContactList