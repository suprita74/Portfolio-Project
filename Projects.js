import React from "react";

export default function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Phonebook management using C language.</h3>
                    <p>Managing contacts by performing actions like adding,deleting.</p>
                </div>
                <div className="project-card">
                    <h3>Helmet detection using yolov8</h3>
                    <p>Uses yolov8 algorithm to detect the people wearing helmet or Without Helmet. It also detects the number of vehicles which can be used to analyse and control the traffic.</p>
                </div>
                <div className="project-card">
                    <h3>Portfolio</h3>
                    <p>This portfolio website built with React.</p>
                </div>
            </div>
        </section>
    );
}