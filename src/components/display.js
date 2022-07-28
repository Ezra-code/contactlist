import React from "react";
import { Link } from "react-router-dom";

function Display({ contact}) {

    function HandleDelete() {
    fetch(`http://localhost:4000/contact/${ contact.id }`,{
      method:"DELETE"
    })
        .then(r => r.json())
    .then(data => console.log(data))
    console.log("deleted")
  }
    return (
        <div className="card" style={{ width: 18 + "rem" }} key={contact.id}>
            <img src="https://icon-library.com/images/login-icon/login-icon-7.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{contact.fname} {contact.lname}</h5>
                <p className="card-text">{contact.home }</p>
                <Link to={`details/${contact.id}`} className="btn btn-primary">Full details</Link>
                <button className="btn btn-danger" onClick={HandleDelete}>Delete <i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default Display