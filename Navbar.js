import React from "react";
import "../App.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>Suprita</h1>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
