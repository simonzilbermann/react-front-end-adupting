import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Recoverpic from '../assets/images/Loginpage.jpg'
import { Link } from 'react-router-dom';

const Recover =()=>{
    const [email, setEmail] = useState('');
    const handleRecover = () => {
        fetch('http://localhost:4477/user/rec', {
          method: 'POST',
          body: JSON.stringify({ email}),
          headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json()).then(data => {
           if(JSON.stringify(data.msg).length > 0){
            alert(data.msg);
             window.location.replace('/reset');
           }
           

            // Handle successful login
          }).catch(error => {
            console.error(error);
            // Handle login error
          });
    };

return (<div>


<div className="container login__container my-5">
        <div className="row login__row">
            <div className="col-md-6 d-flex">
                <img className="login__imagek align-self-center" src={Recoverpic}
                    width="100%" alt="" />
            </div>
            <div className="col-md-5 d-flex">
                <div className="align-self-center card login__card shadow-sm w-100">
        <div className="card-body">
     <h2 className="text-muted text-center">בקשת איפוס סיסמא</h2>
    	  <div >
                                <div className="form-group" >     
                                <input type="email" className="form-control form-control-lg" pattern="[^ @]*@[^ @]*" placeholder="הכנס את האימייל שלך " value={email}  onChange={event => setEmail(event.target.value)} />
                                </div>
                       
                              
                                <div className="form-group">
									
                                      <button className="btn btn-primary btn-lg btn-block my-3" onClick={handleRecover}> בקשת איפוס סימא</button>
                                    <div >
                                        <span> <Link to="/register">צור חשבון</Link></span>

                                    </div>                             
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</div>

</div>);


}
export default Recover;