import React from "react";
import NavBar from "./components/Navbar";
import Add from "./components/newcontact"
import About from "./components/About";
import Edit from "./components/editContact";
import Feedback from "./components/feedback";
import Contact from "./components/contactlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Contact />}/>
                <Route path="Add" element={<Add />}/>
                <Route path="favorites" element={<About />}/>
                <Route path="/details/:id/edit/:id" element={<Edit />} />
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="feedback" element={<Feedback />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App