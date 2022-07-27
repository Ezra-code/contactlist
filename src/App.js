import React from "react";
import NavBar from "./components/Navbar";
import Add from "./components/newcontact"
import Favorite from "./components/favoritecontact";
import Edit from "./components/editContact";
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
                <Route path="favorites" element={<Favorite />}/>
                <Route path="edit" element={<Edit />} />
                <Route path="/details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App