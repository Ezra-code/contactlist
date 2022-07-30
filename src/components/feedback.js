import React from "react";
import './feedback.css'
function feedback() {
    return (
        <div class="container">
            <form className="feedback">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label for="country">Country</label>

                <select id="country" name="country">
                    <option value="Kenya">Kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Ethiopia</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200 + "px"}}></textarea>

                <input type="submit" value="Submit"/>
             </form>
        </div>

    )
}

export default feedback