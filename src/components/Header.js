import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
   
    return (
        <>
            <section style={props.Style} className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={props.toggleMode}></i>
                    <span className="text">VIT (Vellore Campus)</span>&nbsp;&nbsp;&nbsp;
                    <Link to="/" id="homeicon">
                    <i className='fas fa-home'></i>
                    </Link>
                </div>
            </section>
        </>
    )
}

