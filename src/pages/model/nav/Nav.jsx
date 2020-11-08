import React from 'react'
import { Link } from "react-router-dom"

import "./Nav.css"

export default function Nav() {
    return <div>
        <nav id="nav">
            <Link id="link" to="/" ><p>Home</p></Link>
            <Link id="link" to="/about" ><p>About me</p></Link>
        </nav>
    </div>
}