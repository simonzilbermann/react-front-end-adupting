import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Resetpic from '../assets/images/Loginpage.jpg'

const Reset=()=>{
    const [email, setEmail] = useState('');
    const [newpass,setNewpass] =  useState('');
    const [validationcode,setValidationcode] =  useState('');

    ///email,validationcode,newpass

    const HandleReset = ()=>{
        fetch('http://localhost:4477/user/res', {
            method: 'POST',
            body: JSON.stringify({ email,validationcode,newpass }),
            headers: { 'Content-Type': 'application/json' },
          }).then(response => response.json()).then(data => {
            console.log(data);
              if(data.msg === 1 )
              window.location.replace("login");
                else{
                    alert("לא הצלחנו לשחזר את החשבון שלך");
                }
              // Handle successful login
            }).catch(error => {
              console.error(error);
              // Handle login error
            });
    }
    return (
        <div>



<div className="container login__container my-5">
        <div className="row login__row">
            <div className="col-md-6 d-flex">
                <img className="login__imagek align-self-center" src={Resetpic}
                    width="100%" alt="" />
            </div>
            <div className="col-md-5 d-flex">
                <div className="align-self-center card login__card shadow-sm w-100">
                    <div className="card-body">
                        
                               <h2 className="text-muted text-center">דף איפוס סיסמא</h2>
                      
                            <div className="">
                                <div  className="form-group">
                      
                                <input type="email" className="form-control form-control-lg" pattern="[^ @]*@[^ @]*" placeholder="הכנס את האימייל שלך " value={email}  onChange={event => setEmail(event.target.value)} />

                                </div>
                                <div  className="form-group">
                            
                                     <input type="password" className="form-control form-control-lg"  placeholder="סיסמא חדשה" value={newpass}  onChange={event => setNewpass(event.target.value)} required />
                                </div>


                                   <div  className="form-group">
                                    
                                   <input type="password" className="form-control form-control-lg"  placeholder="סיסמא זמנית" value={validationcode}  onChange={event => setValidationcode(event.target.value)} required />
                                </div>

                           
                                <div className="form-group">
                                  <button className="btn btn-primary"  onClick={HandleReset} >אפס סיסמא</button>
                                
                                    <div className="d-flex justify-content-between">
                                  
                                      
                                    </div>
                                 
                                </div>

                            </div>
                   						<div  id="message">
  <h3 >הסיסמה חייבת להכיל את הדברים הבאים:</h3>
  <p  id="letter" className="invalid"><b >אותיות קטנות</b></p>
  <p id="capital" className="invalid"><b>אותיות רישיות</b></p>
  <p id="number" className="invalid"><b>מספר</b></p>
  <p id="length" className="invalid">מִינִימוּם <b>8 תווים</b></p>
</div>
                    </div>
                </div>
            </div>
        </div>
    </div>




        </div>
    );
}
export default Reset;