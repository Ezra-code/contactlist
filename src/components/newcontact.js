import React, { useState } from "react";


const url = "https://living-bolder-agustinia.glitch.me/contact"
function NewContact( {postContact}) {

    const [formDta, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        work: "",
        home: "",
        linkedin: "",
        github: "",
    })

    function HandleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormData({ ...formDta, [name]: value })
        console.log(formDta)
    }
    
    //handle submission of form
    function HandleSubmit(e) {
        // e.preventDefault()
        const formData = {
            fname: formDta.firstName,
            lname: formDta.lastName,
            number: formDta.contact,
            email: formDta.email,
            home: formDta.home,
            work: formDta.work,
            linkedIn: formDta.linkedin,
            gitHub: formDta.github,
        }

        console.log(formData)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json)
        .then(data => postContact(data))
    }

    //Jsx form data input
    return (
        <div>
            <form onSubmit={HandleSubmit} className="mb-3">
                <div className="name">
                    <div className="left">
                        <label htmlFor="name" className="form-label">First Name:</label> <br/>
                        <input type="text" placeholder="Enter first name" className="form-control" name="firstName" value={formDta.firstName}  onChange={HandleChange} required/>
                    </div>
                    <div className="right">
                        <label htmlFor="name" className="form-label">Last Name:</label> <br/>
                        <input type="text" placeholder="Enter last name" className="form-control" name="lastName" value={formDta.lastName}  onChange={HandleChange } required/>
                    </div>
                </div>
                
                <div className="contact">
                    <div className="right">
                        <label htmlFor="number" className="form-label">Enter Number</label> <br/>
                        <input type="number" placeholder="Enter contact number" className="form-control" name="contact" value={formDta.contact}  onChange={HandleChange} required/>
                    </div>
                    <div className="left">
                         <label htmlFor="email" className="form-label">Enter email</label> <br/>
                        <input type="email" placeholder="Enter contact em..." className="form-control" name="email" value={formDta.email}  onChange={HandleChange } required/>
                    </div>
                </div>

                <div className="address">
                    <div className="right">
                        <label htmlFor="occupation" className="form-label">Enter Occupation</label> <br/>
                        <input type="text" placeholder="Enter contact occup..." className="form-control"  name="work" value={formDta.work} onChange={HandleChange } required/>
                    </div>         
                    <div className="left">
                        <label htmlFor="residence" className="form-label">Enter Residence</label> <br/>
                        <input type="text" placeholder="Enter place of res..." className="form-control" name="home" value={formDta.home}  onChange={HandleChange } required/>
                   </div>
                </div>
                
                <div className="socials">
                    <div className="right">
                        <label htmlFor="linkedin" className="form-label">Enter linkedin</label> <br/>
                        <input type="text" placeholder="linkedIn link" className="form-control" name="linkedin" value={formDta.linkedin}  onChange={HandleChange } required/>
                    </div>

                    <div className="left">
                        <label htmlFor="github" className="form-label">Enter github link</label> <br/>
                        <input type="text" placeholder="Github link" className="form-control" value={formDta.github} name="github" onChange={HandleChange } required/>
                    </div>
                </div>
                
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}

export default NewContact