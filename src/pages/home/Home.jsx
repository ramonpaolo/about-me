import React from 'react'

import Project from '../model/project/Project'

import "./Home.css"

import data from "../../data/data.json"

export default function Home() {
    return <div id="home">
        <center>
            <h1>My Projects</h1>
        </center>
        <center>
            <h3>My Stack is based in React and Flutter(firebase)</h3>
            <h5>Look at my projects below</h5>
        </center>
        <div id="projects">
            <center>

                {data.data.map((item) => {
                    return <Project title={item.title} lenguage={item.lenguage}
                        imageProject={item.imageProject} urlGithubProject={item.urlGithubProject}
                        id={item.urlGithubProject} />
                })}
            </center>
        </div>
    </div>
}