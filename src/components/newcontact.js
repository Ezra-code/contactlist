import React from "react";

function NewContact() {
    return (
        <div>
            <form>
                <input type="file"/>
                <div className="name">
                    <div className="left">
                        <label htmlFor="name">Enter Name</label> <br/>
                        <input type="text" placeholder="Enter first name" />
                    </div>
                    <div className="right">
                        <label htmlFor="name">Enter Name</label> <br/>
                        <input type="text" placeholder="Enter last name" />
                    </div>
                </div>
                
                <div className="contact">
                    <div className="right">
                        <label htmlFor="number">Enter Number</label> <br/>
                        <input type="number" placeholder="Enter contact number" />
                    </div>
                    <div className="left">
                         <label htmlFor="email">Enter email</label> <br/>
                         <input type="email" placeholder="Enter contact em..." />
                    </div>
                </div>

                <div className="address">
                    <div className="right">
                        <label htmlFor="occupation">Enter Occupation</label> <br/>
                        <input type="text" placeholder="Enter contact occup..." />
                    </div>         
                    <div className="left">
                        <label htmlFor="residence">Enter Residence</label> <br/>
                        <input type="text" placeholder="Enter place of res..." />
                   </div>
                </div>
                
                <div className="socials">
                    <div className="right">
                        <label htmlFor="linkedin">Enter linkedin</label> <br/>
                        <input type="text" placeholder="linkedIn link" />
                    </div>

                    <div className="left">
                        <label htmlFor="github">Enter github link</label> <br/>
                        <input type="text" placeholder="Github link" />
                    </div>
                </div>
                
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}

export default NewContact