import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aboutpic2 from '../assets/images/aboutpic2.jpg';
import simon from '../assets/images/simon.jpg';
import raz from '../assets/images/raz.jpg';

const About = ()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const handleTicket =()=>{
        ///
      
        fetch('http://localhost:4477/tick/ticket', {
          method: 'POST',
          body: JSON.stringify({ fullname:name,email, subject,phone,body}),
          headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json()).then(data => {
               if(data.msg === 1){
                alert("שליחת הפנייה הצליחה");
                window.location.reload();
               }
            // Handle successful login
          }).catch(error => {
            console.error(error);
            // Handle login error
          });
    }



    return (<div>

<header className="py-5 bg-image-full" >
    <div className='picture'>
            <div className="text-center my-5">
                <img className="img-fluid rounded-circle mb-4" src={aboutpic2} alt="..." />
                <h1 className="text-Red fs-3 fw-bolder">לשנות מלל דחוף</h1>
                <p className="text-Red-50 mb-0"> לשנות מלל דחוף</p>
            </div>
            </div>
        </header>
          <section  className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>אימוץ ילד בישראל</h2>
                        <p className="lead">	מי שמבקשים להיות הורים מאמצים צריכים לענות על תנאים מסוימים</p>
                        <p className="lead">	אימוץ ילד בארץ נעשה באמצעות השירות למען הילד</p>
                        <p className="lead">	ההורים המאמצים הופכים להיות הוריו של הילד המאומץ לכל דבר ועניין</p>
                        <p className="lead">		למידע נוסף ראו באתר של משרד הרווחה</p>
                    </div>
                </div>
            </div>
        </section>

   
         <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">מי אנחנו? </h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                       
                            <img className="img-fluid rounded-circle mb-3" src={simon} alt="..." />
                            <h5>סימון זילברמן</h5>
                            <p className="font-weight-light mb-0">המכללה למנהל אשדוד</p><br />
                            <Link to="tel:0552212590" className="font-weight-light mb-0">טלפון</Link>
                            <Link to="mailto:zilbermannsimon60gmail.com" className="font-weight-light mb-0">מייל</Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={raz} alt="..." />
                            <h5>רז צלח</h5>
                            <p className="font-weight-light mb-0">המכללה למנהל אשדוד</p><br />
                            <Link to="tel:0543018677" className="font-weight-light mb-0">טלפון</Link>
                            <Link to="mailto:raz62015@gmail.com" className="font-weight-light mb-0">מייל</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      
            <section  className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">!בואו ליצור קשר</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">!שלחו לנו הודעה ונחזור אליכם בהקדם האפשרי</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                            <div className="form-floating mb-3">
                          שם:  <input className="form-control" type="text" placeholder="הכנס את שמך" value={name} onChange={event => setName(event.target.value)}    data-sb-validations="required"/>
                              
                                {/* <div className="invalid-feedback" data-sb-feedback="name:required">נדרש שם.</div> */}
                            </div>
                            <div className="form-floating mb-3">
                          אימייל:  <input className="form-control" type="email" placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)}   data-sb-validations="required,email"/>
                              
                              
                                {/* <div className="invalid-feedback" data-sb-feedback="email:required">יש צורך במייל.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">האימייל אינו חוקי.</div> */}
                            </div>
                         
                            <div className="form-floating mb-3"> 
                           טלפון: <input className="form-control" type="tel" placeholder="0544567890" value={phone} onChange={event => setPhone(event.target.value)}   data-sb-validations="required"/>
                               
                               
                                {/* <div className="invalid-feedback" data-sb-feedback="phone:required">יש צורך במספר טלפון.</div> */}
                            </div>
                                 <div className="form-floating mb-3">  
                               נושא:  <input className="form-control" type="text" placeholder="נושא" value={subject} onChange={event => setSubject(event.target.value)}   data-sb-validations="required"/>
                                
                               
                            </div>
                            <div className="form-floating mb-3"> 
                    
                             גוף הפנייה:   <textarea className="form-control" type="text" placeholder="כתוב את הפנייה שלך כאן"   value={body} onChange={event => setBody(event.target.value)}  data-sb-validations="required"></textarea>
                              
                                {/* <div className="invalid-feedback" data-sb-feedback="message:required">נדרשת הודעה.</div> */}
                            </div>
                            <div id="submitSuccessMessage">                           
                            </div>                      
                            {/* <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>                    */}
                        
                            <div className="d-grid"><button className="btn btn-primary" onClick={handleTicket}> צור פנייה</button></div>           
                    </div>
                </div>
            </div>
        </section>


    </div>);
}

export default About;