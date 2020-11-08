//---- Packages
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

//---- Screens
import Home from "./pages/home/Home"
import Nav from "./pages/model/nav/Nav"
import About from "./pages/about/About"
import Footer from './pages/model/footer/Fotter'

export default function App() {
    return <div>
        <Router>
        <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch>
        </Router>
        <Footer/>
    </div>

}