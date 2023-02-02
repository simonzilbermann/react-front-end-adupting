// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Homepage2 from '../assets/images/homepage2.jpg';

import profilepic from '../assets/images/profile.png';
import documntpic from '../assets/images/documents.png';
import accespic from '../assets/images/accesbility.png';
import diskin from '../assets/images/diskin.jpg';
import beit_hayeled from '../assets/images/beit_hayeled.jpg';
import elazarki from '../assets/images/elazarki.png';


const Homepage=()=>{
  
return (
        <div >
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="bd-placeholder-img" width="100%" height="816px"alt="" src={Homepage2} /> 
                    <div className="carousel-caption text-start">
                      <p><Link className="btn btn-lg btn-primary" to="/register">הצטרף אלינו </Link></p>
                    </div>
          
                </div>
              </div>  
        </div>

        <section className="showcase">
          <div className="container px-4 px-lg-5 mt-5">
                      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        <div className="col mb-5">
                            <div className="card h-100">
                            <div className="text-center">
                              <img src={profilepic} width="200px;" alt="" />
                              <h2>פרופיל אימוץ במערכת</h2>
                             </div>
                              <p className="lead mb-0">יצירת הפרופיל הוא תנאי הכרחי להתקדמות בשלבי תהליך האימוץ אצלנו באפליקציה </p>
                            </div>
                          </div>
          
                          <div className="col mb-5">
                            <div className="card h-100">
                            <div className="text-center">
                            <img alt="" src={documntpic} width="200px;" />
                            <h2>העלאת מסמכים</h2>
                            </div>
                            <p className="lead mb-0">יצירת הפרופיל דורשת להעלאות מסמכים אודות עצמכם , אנא שמרו על אמינות כדי שנוכל לתת את השירות הטוב ביותר</p>
                            </div>
                          </div>

                          <div className="col mb-5">
                            <div className="card h-100">
                            <div className="text-center">
                            <img alt="" width="200px;" src ={accespic} />
                            <h2>נוח להשתמש קל להשתמש </h2>
                            </div>
                            <p className="lead mb-0">אנו באים לקצר את כל ההליך הבירוקרטי לתהליך האימוץ האפליקציה נוחה וקלה לשימוש </p>
                            </div>
                          </div> 
                      </div>
          </div>

          <div className="container px-4 px-lg-5 mt-5">
              <h1 >בתי היתומים איתם אנו עובדים</h1>

              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                <div className="col mb-5">
                            <div className="card h-100">
                            
                              
                          
                                <div className="card-body p-4">
                                    <div className="text-center">
                                    <img src={diskin}  width="250px;" height="214px;" alt="" />
                              
                                        <h5 className="fw-bolder">בית-יתומים דיסקין</h5>
                                    
                                    </div>
                                </div>
                          
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="https://www.diskin.org.il/">קצת על דיסקין</Link></div>
                                </div>
                            </div>
                </div>
                <div className="col mb-5">
                            <div className="card h-100">
                              
                              
                            
                  
                                <div className="card-body p-4">
                                    <div className="text-center">
                                    <img src={beit_hayeled}  width="250px;" height="214px;" alt=""/>
                                      
                                        <h5 className="fw-bolder">בית הילד</h5>
                                      
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        
                                    </div>
                                </div>
                          
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="https://beit-hayaled.tik-tak.net/">קצת על בית הילד</Link></div>
                                </div>
                            </div>
                </div>
                <div className="col mb-5">
                            <div className="card h-100">
                              
                              
                           
                                <div className="card-body p-4">
                                    <div className="text-center">
                                    <img src={elazarki}   width="250px;" height="214px;" alt=""/>
                                      
                                        <h5 className="fw-bolder">אלעזרקי</h5>
                                        
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        
                                    </div>
                                </div>
                              
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="https://elazraki.org.il/">קצת על אלעזרקי</Link></div>
                                </div>
                            </div>
                </div>
              </div>
          </div>
        </section>

         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
 <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


    </div>
);
}
export default Homepage;