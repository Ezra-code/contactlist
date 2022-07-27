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

    function HandleLastNameChange(e) {
        setLastName(e.target.value)
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
            gitHub: github
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
            <form onSubmit={HandleSubmit}>
                <input type="file"/>
                <div className="name">
                    <div className="left">
                        <label htmlFor="name">First Name:</label> <br/>
                        <input type="text" placeholder="Enter first name" value={firstName} onChange={HandlefirstNameChange} required/>
                    </div>
                    <div className="right">
                        <label htmlFor="name">Last Name:</label> <br/>
                        <input type="text" placeholder="Enter last name" value={lastName} onChange={HandleLastNameChange } required/>
                    </div>
                </div>
                
                <div className="contact">
                    <div className="right">
                        <label htmlFor="number">Enter Number</label> <br/>
                        <input type="number" placeholder="Enter contact number" value={contact} onChange={HandleContactChange} required/>
                    </div>
                    <div className="left">
                         <label htmlFor="email">Enter email</label> <br/>
                        <input type="email" placeholder="Enter contact em..." value={email} onChange={HandleEmailChange } required/>
                    </div>
                </div>

                <div className="address">
                    <div className="right">
                        <label htmlFor="occupation">Enter Occupation</label> <br/>
                        <input type="text" placeholder="Enter contact occup..." value={work} onChange={HandleWorkChange } required/>
                    </div>         
                    <div className="left">
                        <label htmlFor="residence">Enter Residence</label> <br/>
                        <input type="text" placeholder="Enter place of res..." value={home} onChange={HandleHomeChange } required/>
                   </div>
                </div>
                
                <div className="socials">
                    <div className="right">
                        <label htmlFor="linkedin">Enter linkedin</label> <br/>
                        <input type="text" placeholder="linkedIn link" value={linkedin} onChange={HandleLinkedInChange } required/>
                    </div>

                    <div className="left">
                        <label htmlFor="github">Enter github link</label> <br/>
                        <input type="text" placeholder="Github link" value={github} onChange={HandleGithubChange } required/>
                    </div>
                </div>
                
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}

export default NewContact