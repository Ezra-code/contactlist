import React, { useState } from "react";

function NewContact() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [contact, setcontact] = useState("")
    const [email, setEmail] = useState("")
    const [work, setWork] = useState("")
    const [home, setHome] = useState("")
    const [linkedin, setlLinkedIn] = useState("")
    const [github, setGithub] = useState("")
    const [pic, setPic] = useState(null)
    function HandleLastNameChange(e) {
        setLastName(e.target.value)
    }
    
    function FileSelectedHandler(e) {
        console.log(e.target.files[0])
        setPic(e.target.files[0])
    }

       function HandlefirstNameChange(e) {
        setFirstName(e.target.value)

       }
    
          function HandleEmailChange(e) {
            setEmail(e.target.value)

          }
    
        function HandleContactChange(e) {
            setcontact(e.target.value)
               }
    
        function HandleWorkChange(e) {
            setWork(e.target.value)
            }
    
        function HandleHomeChange(e) {
            setHome(e.target.value)
            }
    
        function HandleLinkedInChange(e) {
            setlLinkedIn(e.target.value)
                }
    
        function HandleGithubChange(e) {
            setGithub(e.target.value)
              }
    
    //handle submission of form

    function HandleSubmit(e) {
        e.preventDefault()
        const formData = {
            fname: firstName,
            lname: lastName,
            number: contact,
            email: email,
            home: home,
            work: work,
            linkedIn: linkedin,
            gitHub: github,
            image: pic
        }

        console.log(formData)

        fetch("http://localhost:4000/contact", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })



        setEmail("")
        setFirstName("")
        setLastName("")
        setGithub("")
        setHome("")
        setWork("")
        setcontact("")
        setlLinkedIn("")
    }



    //Jsx form data input
    return (
        <div>
            <form onSubmit={HandleSubmit} className="mb-3">
                <input type="file" require=".png, .jpg, .jpeg" onChange={FileSelectedHandler}/>
                <div className="name">
                    <div className="left">
                        <label htmlFor="name" className="form-label">First Name:</label> <br/>
                        <input type="text" placeholder="Enter first name" className="form-control" value={firstName} onChange={HandlefirstNameChange} required/>
                    </div>
                    <div className="right">
                        <label htmlFor="name" className="form-label">Last Name:</label> <br/>
                        <input type="text" placeholder="Enter last name" className="form-control" value={lastName} onChange={HandleLastNameChange } required/>
                    </div>
                </div>
                
                <div className="contact">
                    <div className="right">
                        <label htmlFor="number" className="form-label">Enter Number</label> <br/>
                        <input type="number" placeholder="Enter contact number" className="form-control" value={contact} onChange={HandleContactChange} required/>
                    </div>
                    <div className="left">
                         <label htmlFor="email" className="form-label">Enter email</label> <br/>
                        <input type="email" placeholder="Enter contact em..." className="form-control" value={email} onChange={HandleEmailChange } required/>
                    </div>
                </div>

                <div className="address">
                    <div className="right">
                        <label htmlFor="occupation" className="form-label">Enter Occupation</label> <br/>
                        <input type="text" placeholder="Enter contact occup..." className="form-control" value={work} onChange={HandleWorkChange } required/>
                    </div>         
                    <div className="left">
                        <label htmlFor="residence" className="form-label">Enter Residence</label> <br/>
                        <input type="text" placeholder="Enter place of res..." className="form-control" value={home} onChange={HandleHomeChange } required/>
                   </div>
                </div>
                
                <div className="socials">
                    <div className="right">
                        <label htmlFor="linkedin" className="form-label">Enter linkedin</label> <br/>
                        <input type="text" placeholder="linkedIn link" className="form-control" value={linkedin} onChange={HandleLinkedInChange } required/>
                    </div>

                    <div className="left">
                        <label htmlFor="github" className="form-label">Enter github link</label> <br/>
                        <input type="text" placeholder="Github link" className="form-control" value={github} onChange={HandleGithubChange } required/>
                    </div>
                </div>
                
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}

export default NewContact