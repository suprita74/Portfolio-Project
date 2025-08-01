// src/components/Hero.js
import React from "react";
import myImage from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-image-wrapper">
                <img src={myImage} alt="Suprita" className="hero-img" />
            </div>
            <h2>Hello, I'm Suprita 👋</h2>
            <p>I'm a Frontend Developer passionate about building beautiful and functional web experiences.</p>
            <a href="#projects" className="btn">View My Work</a>
        </section>
    );
}