import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
    const[contact, setContact] = useState("")
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/contact/${id}`)
        .then(r => r.json())
    .then(data => setContact(data))
    }, [id])
    
    function handleChange(e) {
        console.log(e.target.value)
    }
    return (
        <div>
            
            <form className="edit-form">
                <h1>EDIT CONTACT</h1>
                <input type="text" value={contact.id} disabled/>
                <input type="text" value={contact.fname} onChange={handleChange } />
                <input type="text" value={contact.lname}/>
                <input type="number" value={contact.number}/>
                <input type="email" value={contact.email}/>
                <input type="text" value={contact.home}/>
                <input type="text" value={contact.work}/>
                <input type="text" value={contact.linkedIn}/>
                <input type="text" value={contact.gitHub}/>
            </form>
       </div>
    )
}

export default Edit