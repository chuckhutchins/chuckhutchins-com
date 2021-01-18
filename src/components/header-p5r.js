import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header>
        <h1>Persona 5 Royal</h1>
        <ul className="haunts">
            <li>
                <Link to="/p5r">Guide homepage</Link>
            </li>
        </ul>
    </header>
)

export default Header
