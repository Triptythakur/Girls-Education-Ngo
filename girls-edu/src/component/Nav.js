import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom"
const Nav = ( ) =>{
    const a = [
        {
            item: 'Home',
        },
        {
            item: 'AboutUs'
        },
        {
            item: 'Contact'
        },
        {
            item: 'Program'
        },
        {
            item: 'Login'
        }

    ]
    return(
        <div className = "items">
            <Link className="it" to="/"> {a[0].item}</Link>
            <Link className="it" to="/AboutUs"> {a[1].item}</Link>
            <Link className="it" to="/Contact"> {a[2].item}</Link>
            <Link className="it" to="/Program"> {a[3].item}</Link>
            <Link className="log" to="/Donate" > {a[4].item}</Link>
            
           
            
        </div>

    );
}
export default Nav


