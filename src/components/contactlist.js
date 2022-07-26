import React, { useEffect, useState } from "react";
import Display from "./display";

function ContactList() {
    const [contact, setContact] = useState("")
    useEffect(() => {
        fetch("http://localhost:4000/contact")
            .then(r => r.json())
            .then(data => data.map((contact) => setContact(contact)))
    }, [])
    return (
        <Display contact={contact} />
    )
}

export default ContactList