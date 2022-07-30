import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
    const [contact, setContact] = ([])
 
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:4000/contact/${id}`)
        .then(r => r.json())
    .then(data => setContact(data))
    }, [id, setContact])
       const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        Email: "",
        Work: "",
        Home: "",
        linkedin: "",
        github: "",
       })
    setFormData(contact)
    function handleChange(e) {
        console.log(e.target.value)
    }
    return (
        <div>
            
            <form className="edit-form">
                <h1>EDIT CONTACT</h1>
                <input type="text"  disabled/>
                <input type="text"  onChange={handleChange }  name="firstName" value={formData.firstName}/>
                <input type="text" onChange={handleChange } name="lastName" value={formData.lastName}/>
                <input type="number" onChange={handleChange } name="number" value={formData.contact}/>
                <input type="email" onChange={handleChange } name="email" value={formData.Email}/>
                <input type="text" onChange={handleChange } name="work" value={formData.Work}/>
                <input type="text" onChange={handleChange } name="home" value={formData.Home}/>
                <input type="text" onChange={handleChange } name="linkedin" value={formData.linkedin}/>
                <input type="text" onChange={handleChange } name="github" value={formData.github}/>
            </form>
       </div>
    )
}

export default Edit