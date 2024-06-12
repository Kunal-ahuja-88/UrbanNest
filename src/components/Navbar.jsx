import "./navbar.scss"
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
            <a href="/" className="logo">
                <img src="/logo.png" alt=""/>
                <span>Urban Nest</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            </div>
            <div className="right">
            <a herf="/">Sign in</a>
            <a herf="/">Sign up</a>
            <div className="menuIcon">
                <img src="/menu.png" alt=""
                    onClick={() => setOpen((prev) => !prev)}
                />
            </div>
            <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a herf="/">Sign in</a>
            <a herf="/" className="register">
            Sign up
            </a>
            </div>
            </div>
        </nav>
    )
}
export default Navbar