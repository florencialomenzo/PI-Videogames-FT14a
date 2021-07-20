import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/">START</Link>
            <Link to="/home">HOME</Link>
            <Link to="/addvideogame">ADD VIDEOGAME</Link>
        </div>
    )
}