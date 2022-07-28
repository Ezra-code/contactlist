import React from "react";
import { useEffect, useState } from "react";
import {  useParams, Link } from "react-router-dom";
function Details() {
    const [contact, setContact] = useState("")
    const {id} = useParams()
        useEffect(() => {
            fetch(`http://localhost:4000/contact/${ id }`)
                .then(r => r.json())
                .then(data => setContact(data))
        }, [id])
    
    return (
        <div className="deets">
            <h1><strong>Name:</strong> {contact.fname} {contact.lname}</h1>
            <img src="https://icon-library.com/images/login-icon/login-icon-7.jpg" className="img-top" alt="..."/>
            <div className="body">              
                <p className="text"><strong>phone</strong> {contact.number}</p>
                <p className="text"><strong>Occupation:</strong> {contact.work}</p>
                <p className="text"><strong>Residence:</strong> {contact.home}</p>
                <a  href="https://www.linkedIn.com" className="btn btn-primary"><strong><i className="fa-brands fa-linkedin-in"></i></strong> </a>
                <a href="https://www.github.com" className="btn btn-primary"><strong><i className="fa-brands fa-github"></i></strong></a>
                
                <div>
                    <Link to={`edit/${contact.id}`} className="btn btn-success"> Edit</Link>
                </div>

            </div>
        </div>
    )
}

export default Details