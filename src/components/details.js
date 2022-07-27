import React from "react";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
function Details() {
    const [contact, setContact] = useState("")
    const {id} = useParams()
        useEffect(() => {
            fetch(`http://localhost:4000/contact/${ id }`)
                .then(r => r.json())
                .then(data => setContact(data))
        }, [id])
    return (
          <div className="card" style={{ width: 18 + "rem" }}>
            <img src="https://www.howtogeek.com/wp-content/uploads/2020/05/spilled-coffee-on-laptop-keyboard.jpg?height=200p&trim=2,2,2,2" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><strong>Name:</strong> {contact.fname} {contact.lname}</h5>
                <p className="card-text"><strong>phone</strong> {contact.number}</p>
                <p className="card-text"><strong>Work:</strong> {contact.work}</p>
                <p className="card-text"><strong>Home:</strong> {contact.home}</p>
                <a  href="https://www.linkedIn.com" className="btn btn-primary"><strong><i class="fa-brands fa-linkedin-in"></i></strong> </a>
                <a  href="https://www.github.com" className="btn btn-primary"><strong><i class="fa-brands fa-github"></i></strong></a>
            </div>
        </div>
    )
}

export default Details