import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loginpage from '../assets/images/Loginpage.jpg';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [userpassword, setPassword] = useState('');
    const handleLogin = () => {
        fetch('http://localhost:4477/user/log', {
          method: 'POST',
          body: JSON.stringify({ email, userpassword }),
          headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json()).then(data => {
            let user_id =JSON.stringify( data.msg.userid);
            let profile_id =JSON.stringify( data.msg.profileid);
            console.log(user_id);
            console.log(profile_id);
      
            if(user_id != null){
                if(profile_id.length === 2){
                    alert(profile_id);
                    sessionStorage.setItem("uid",user_id.replace(/^"|"$/g, ''));
                    window.location.replace("/cprofile");
                    }
                    else if(profile_id.length > 0){      
                      
                    sessionStorage.setItem("uid",user_id.replace(/^"|"$/g, ''));
                    sessionStorage.setItem("proid",profile_id.replace(/^"|"$/g, ''));
                    window.location.replace('/profile');
                  }

            }
            else{
                alert("איימיל לא קיים במערכת");
            }

            // Handle successful login
          }).catch(error => {
            console.error(error);
            // Handle login error
          });
        };
        return (
           
            <div className="container login__container my-5">
        <div className="row login__row">
        <div class="col-md-6 d-flex">
                <img className="login__imagek align-self-center" src={Loginpage}
                    width="100%" alt="" />
            </div>
            <div className="col-md-5 d-flex">
                <div className="align-self-center card login__card shadow-sm w-100">
                    <div className="card-body text-muted text-center">
                 
                            <h2 className="text-muted text-center">דף הרשמה</h2>
                       
                             <div  className="form-group"  >
                            
                             <input type="email" placeholder="Email" className="form-control form-control-lg" value={email} onChange={event => setEmail(event.target.value)} />
                              <input type="password" className="form-control form-control-lg" placeholder="Password" value={userpassword}  onChange={event => setPassword(event.target.value)} />
                              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                           
                                
                                </div>       
                                       
                            </div>
                            <div  className="text-muted text-center">
                      
                                  <h4><Link  to="/register"> נרשמת כבר אצלנו?</Link></h4>
                                     <h4><Link  to="/recover"> שכחת סיסמא?</Link></h4> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          );

}
export default Login;




   