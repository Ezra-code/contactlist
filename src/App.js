import React from "react";
import NavBar from "./compoents/Navbar";
import Add from "./compoents/newcontact"
import Favorite from "./compoents/favoritecontact";
import Edit from "./compoents/editContact";
import Contact from "./compoents/contactlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="home" element={<Contact />}/>
                <Route path="Add" element={<Add />}/>
                <Route path="favorites" element={<Favorite />}/>
                <Route path="edit" element={<Edit />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App