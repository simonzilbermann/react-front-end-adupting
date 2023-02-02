import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

 


const Footer=()=>{
return (<div>
	  <link rel="stylesheet" href="/css/css/footertemp.css" />
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />


 <footer className="footer">
<div className="container bottom_border">
        <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col"></div>
            <div className=" col-sm-4 col-md  col-6 col"></div>
            <div className=" col-sm-4 col-md  col-6 col"></div>
            <div className="container">
            <ul className="foote_bottom_ul_amrc">
            <li><Link to="/">דף הבית</Link></li>
            <li><Link to="/about">אודות</Link></li>
            <li><Link to="/info">תקנון וחוקים</Link></li>
            <li><Link to="/negishot">נגישות</Link></li>
            <li><Link to="/about#contact">צור קשר</Link></li>
            </ul>


<ul className="social_footer_ul">
<li><Link to="http://webenlance.com"><i className="fab fa-facebook-f"></i></Link></li>
<li><Link to="http://webenlance.com"><i className="fab fa-twitter"></i></Link></li>
<li><Link to="http://webenlance.com"><i className="fab fa-linkedin"></i></Link></li>
<li><Link to="http://webenlance.com"><i className="fab fa-instagram"></i></Link></li>
</ul>

</div>
</div>
</div>



</footer> 


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>




</div>);
}
export default Footer;