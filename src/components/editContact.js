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
                <input type="text"  disabled/>
                <input type="text"  onChange={handleChange } />
                <input type="text" onChange={handleChange }/>
                <input type="number" onChange={handleChange }/>
                <input type="email" onChange={handleChange }/>
                <input type="text" onChange={handleChange }/>
                <input type="text" onChange={handleChange }/>
                <input type="text" onChange={handleChange }/>
                <input type="text" onChange={handleChange }/>
            </form>
       </div>
    )
}

export default Edit