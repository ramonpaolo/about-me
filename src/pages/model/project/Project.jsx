import React from 'react'
import "./Project.css"

function openNewAba(urlGithubProject){
    window.window.open(urlGithubProject)
}

export default function Project(props) {
    return <div id="project">
        <h2>{props.title}</h2>
        <p id="lenguage">Was utilized <b>{props.lenguage}</b></p>
        <center>
            <figure>
                <img id="image" src={props.imageProject} alt="logo do projeto" />
            </figure>
        </center>
        <p id="link" onClick={() => openNewAba(props.urlGithubProject)}>Link github of {props.title}</p>
    </div>
}