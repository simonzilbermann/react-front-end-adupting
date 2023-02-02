import React, { useState ,useEffect} from 'react';
// import { Link } from 'react-router-dom';
import $ from "jquery";
import Registerpic from '../assets/images/Loginpage.jpg'


const Register =()=>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [employment, setEmployment] = useState('');
    const [date, setDate] = useState('');
    const [userpassword, setPassword] = useState('');


    useEffect(() => {
        fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=1b14e41c-85b3-4c21-bdce-9fe48185ffca&limit=10000000")
          .then(response => response.json())
          .then(data => {
            const newCities = data.result.records.map(record => record.city_name);
            setCities([...new Set(newCities)]);
            $('.form-control-lg').autocomplete({
              source: cities
            });
          });
      }, [cities]);


      const handleRegister = () => {
        fetch('http://localhost:4477/user/reg', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                lastname: lname,
                email: email,
                phone: phone,
                city: city,
                address: address,
                d_of_birth: date,
                employment:employment,
                userpassword: userpassword
            }),
            headers: { 'Content-Type': 'application/json' },
          }).then(response => response.json()).then(data => {
            if(data.msg === 0)
                alert("email already exist");
            else{
              sessionStorage.setItem("uid",data.msg.userid);
                alert("הודעה למייל עם קוד אישור נשלחה אליך \n כדי להתחבר לחדבון יש לאמת את חשבונך דרך המייל ");
              
           
                setTimeout(() => {
                  window.location.replace('/');
                }, 1000);
            } 
            
            }).catch(error => {
              console.error(error);
              // Handle login error
            });
    
       
      };




  
    return (<div>
         <div class="container login__container my-5">
        <div class="row login__row">
            <div class="col-md-6 d-flex">
                <img class="login__imagek align-self-center" src={Registerpic}
                    width="100%" alt="" />
            </div>
             <div className="col-md-5 d-flex">
                <div className="align-self-center card login__card shadow-sm w-100">
                    <div className="card-body">
                 
                            <h2 className="text-muted text-center">דף הרשמה</h2>
                       
                            <div >
                                <div  className="form-group">
                                <input type="email" className="form-control form-control-lg" pattern="[^ @]*@[^ @]*" placeholder="הכנס את האימייל שלך " value={email}  onChange={event => setEmail(event.target.value)} />
                                </div>
                                <div  className="form-group">
                                 
                                     <input  type="text" className="form-control form-control-lg"  placeholder="שם " title="" value={name}  onChange={event => setName(event.target.value)} required />
                                </div>
                                   <div  className="form-group">
                                 
                                     <input  type="text" className="form-control form-control-lg"  placeholder="שם משפחה" title="" value={lname}  onChange={event => setLname(event.target.value)} required />
                                </div>
                                
                                   <div  className="form-group">
                              
                                   
                                   <select name="city" className="form-control form-control-lg" value={city} onChange={event => setCity(event.target.value)} required >
                                    <option value="">בחר עיר</option>
                                     {cities.sort((a, b) => a.localeCompare(b, 'he')).map(city => (
                                 <option key={city} value={city}>{city}</option>
                                     ))}
                                    </select>
                                </div>
                                    <div  className="form-group">
                                
                                     <input  type="text" className="form-control form-control-lg"  placeholder="רחוב" title="" value={address}  onChange={event => setAddress(event.target.value)} required />
                                </div>
                                <div  className="form-group">
                                
                                <input  type="text" className="form-control form-control-lg"  placeholder=" מקום תעסוקה/מקצוע" title="" value={employment}  onChange={event => setEmployment(event.target.value)} required />
                                </div>
                                <div  className="form-group">
                                
                                     <input  type="text" className="form-control form-control-lg" pattern="/^0\d([\d]{0,1})([-]{0,1})\d{7}$/"  placeholder=" טלפון" title="" value={phone}  onChange={event => setPhone(event.target.value)} required />
                                </div>
                                    <div  className="form-group">
                                   <input type="date" className="form-control form-control-lg" placeholder="תאריך לידה" value={date}  onChange={event => setDate(event.target.value)} required />
                                     
                                </div>
                                   <div  className="form-group">
                                  
                                     <input type="password" className="form-control form-control-lg"  placeholder="הכנס את הסיסמה" title="חייב להכיל לפחות ספרה אחת ואות גדולה וקטנה אחת, ולפחות 8 תווים או יותר" value={userpassword}  onChange={event => setPassword(event.target.value)} required />
                                </div>
                              
                                <div className="form-group">
									 <button className="btn btn-primary btn-lg btn-block my-3" onClick={handleRegister}> הרשמה</button>
                                  
                                    <div className="d-flex justify-content-between">
                                  
                                      
                                    </div>
                                 
                                </div>
								<div >
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

    </div>);
    
}

export default Register;
