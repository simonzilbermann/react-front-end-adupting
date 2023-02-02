import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Error404.css';

const Error404 =()=>{
    return (<div>
 <section class="notFound">
        <div class="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt=""/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt=""/>
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link to="/" className="yes"> <p className='error404'> YES </p></Link>
      
        </div>
    </section>




    </div>);
}
export default Error404;
