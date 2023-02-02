import React, { useState, useEffect } from 'react';
import '../assets/css/LoginWm.css';



const LoginWm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getoken,settoken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.replace('/wm');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
     fetch('http://localhost:4477/manager/login', {
        method: 'POST',
        body: JSON.stringify({ email, pass:password }),
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json()).then(data => {
        localStorage.setItem('token', data.msg);
        settoken(data.msg);
        fetch('http://localhost:4477/wm', {
            headers: {
            Authorization:`${getoken}`,
            },
        }).then((res) => {
            console.log(res.ok);
            
        })

      })
  };
 

  return (
    <div>
                <div class="container">
                    
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div class="box">
                                <div class="shape1"></div>
                                <div class="shape2"></div>
                                <div class="shape3"></div>
                                <div class="shape4"></div>
                                <div class="shape5"></div>
                                <div class="shape6"></div>
                                <div class="shape7"></div>
                                <div class="float">
                               
                                <form onSubmit={handleSubmit}>
                                    <div class="form">
                                        <div class="form-group">
                                            <h6>אימייל</h6>
                                            <input class="form-control" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                           
                                        </div>
                                        <div class="form-group">
                                        <h6>סיסמא</h6>
                                            <input  class="form-control" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                                        
                                        </div>
                                        <br />
                                        <button class="btn btn-info btn-md" type="submit"> התחברות</button>
                                    </div>
                                   
                                   
                                 
                                    
                                </form>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




   
    </div>
  );
};

export default LoginWm;
