import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

const Stage6 =()=>{
    let profileid = sessionStorage.getItem("proid").replace(/^"|"$/g, '');
    const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  fetch('http://localhost:4477/prof/getbyid', {
    method: 'POST',
    body: JSON.stringify({ profileid:profileid }),
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json()).then(data => {
    setName(data.msg.name);
    setLastname(data.msg.lastname);
  })
    return (<div>
<div className="container login__container my-5">
                <div className='zain'>
                    <div className="align-self-center card login__card shadow-sm w-100">
                        <div className="card-body">
                        <h1>  {name} {lastname} שים לב</h1>
        <p >הפרופיל שלך כרגע בשלבי אימות!
            כעת מנהל המערכת בוחן את הנתונים שהתקבלו במידה והפרופיל שלך יאושר
            תקבל מייל בהתאם וקישור לחזרה להתקדמות בשלבי האימות
            אנא התעדכן במייל מעת לעת 
        </p>
        <br /> <Link className="button"  to="/about#contact">צור קשר במידה ומשהו לא ברור</Link>
                        </div>
                        </div>
                    </div>
                </div>
          
    </div>);
}
export default Stage6;