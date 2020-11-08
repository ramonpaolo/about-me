import React from 'react'
import "./About.css"

import image from "../../images/eu.jpg"

export default function About() {
    return <div id="about">
        <div>
            <center>
                <img id="image" src={image} alt="Ramon Paolo Maran" />
                <h2>My name is <i>Ramon Paolo Maran</i></h2>
                <h3>I have 17 years old</h3>
            </center>
        </div>
        <br />
        <div id="text">
            <center>
                <div>
                    <h4>Little bit about me</h4>
                    <p>I'm studying in time integral in a school with course technical of Development Systems.</p>
                    <p>I am in second year in school technical(formature in dez/2021).</p>
                </div>
                <br />
                <div>
                    <h4>What is my techniques?</h4>
                    <p>Well, i programme in Web, Mobile, Desktop and lay in Cloud Computing.</p>
                    <p>In Web, my favorite lenguage is React with Node(express) and MongoDB.</p>
                    <p>In Mobile, i love Flutter with Firebase, but i programming in React-Native too.</p>
                    <p>In Desktop i love C++ and Python, Data Science and softawers basic with C++</p>
                    <p>I came studying Cloud Computing a little bit time, but i love Firebase.</p>
                </div>
            </center>
        </div>
        <br/>
    </div>
}