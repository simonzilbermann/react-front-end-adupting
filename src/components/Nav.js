import React from 'react';
import { Link } from 'react-router-dom';
const Nav=() =>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
             <div class="container">
                <Link className="navbar-brand" to="#!"></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link className="nav-link" to="/loginwm"> ניהול מערכת</Link></li>
                        <li class="nav-item"><Link className="nav-link active" aria-current="page" to="/">דף הבית</Link></li>
                        <li class="nav-item"><Link className="nav-link" to="/info">תקנון וחוקים </Link></li>
        
                        <li class="nav-item"><Link  className="nav-link" to="/login">התחברות</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;