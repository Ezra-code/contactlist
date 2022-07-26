import React from "react";

function NewContact() {
    return (
        <div>
            <form>
                <div className="name">
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" placeholder="Enter first name" />

                    <label htmlFor="name">Enter Name</label>
                    <input type="text" placeholder="Enter last name" />
                </div>
                
                <div className="primary-contact">
                    <label htmlFor="number">Enter Number</label>
                    <input type="number" placeholder="Enter contact number" />

                    <label htmlFor="email">Enter email</label>
                    <input type="email" placeholder="Enter contact em..." />
                
                </div>

                <div className="address">
                    <label htmlFor="occupation">Enter Occupation</label>
                    <input type="text" placeholder="Enter contact occup..." />
                    
                    <label htmlFor="residence">Enter Residence</label>
                    <input type="text" placeholder="Enter place of res..." />
                </div>
                
                <div className="socials">
                    <label htmlFor="linkedin">Enter linkedin</label>
                    <input type="text" placeholder="linkedIn link" />

                    <label htmlFor="github">Enter github link</label>
                    <input type="text" placeholder="Github link" />
                </div>
                
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}

export default NewContact