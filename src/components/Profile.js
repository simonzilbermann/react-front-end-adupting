import React , {useState} from 'react';

import '../assets/css/Profile.css';
import  Stage1 from './Stage1';
import  Stage2 from './Stage2';
import  Stage3 from './Stage3';
import  Stage4 from './Stage4';
import  Stage5 from './Stage5';
import  Stage6 from './Stage6';

const Profile = ()=>{
    let profileid = sessionStorage.getItem("proid").replace(/^"|"$/g, '');
    const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [status ,setStatus] = useState("");
   const [email,setEmail]=useState("");
   const [phone,setPhone]=useState("");
   const [city,setCity]=useState("");
   const [d_of_birth,setD_of_birth]=useState("");
   const [image,setImage]=useState("");
 
 


  

      fetch('http://localhost:4477/prof/getbyid', {
        method: 'POST',
        body: JSON.stringify({ profileid:profileid }),
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json()).then(data => {
            console.log(data);
            setName(data.msg.name);
            setLastname(data.msg.lastname);
            setStatus(data.msg.status);
            setCity(data.msg.city);
            setD_of_birth(data.msg.d_of_birth);
            setEmail(data.msg.email);
            setPhone(data.msg.phone);
            setImage(data.msg.image);

      });
      console.log(sessionStorage.getItem("uid"));
      let imgurl =`http://localhost:4477/images/${sessionStorage.getItem("uid")+image}`;

   

    return (<div>


<section class="w-100 px-4 py-5" >
      <div class="row d-flex justify-content-center">
        <div class="col col-md-9 col-lg-7 col-xl-6">
          <div class="card">
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-shrink-0">
                <img src={imgurl} class="img-fluid" alt='' height={200} width={300} />
             
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mb-1">שלום {name} {lastname}</h5>
                  <p class="mb-2 pb-1" >סטטוס {status} /10 </p>
                  <div class="d-flex justify-content-start rounded-3 p-2 mb-2" >
             
                         <div>
                      <p class="small text-muted mb-1">תאריך לידה</p>
                      <p class="mb-0">{d_of_birth}</p>
                    </div>
                    <div class="px-3">
                      <p class="small text-muted mb-1">טלפון</p>
                      <p class="mb-0">{phone}</p>
                    </div>
                    <div>
                      <p class="small text-muted mb-1">עיר</p>
                      <p class="mb-0">{city}</p>
                    </div>
               
                  </div>
                  <div class="d-flex pt-1">
                  <div>
                      <p class="small text-muted mb-1">אימייל</p>
                      <p class="mb-0">{email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>

      </div>

    </section>
    <div class="tab-pane active">
                    {status === 1 ? <Stage1></Stage1> :null}
                    {status === 2 ? <Stage2></Stage2> :null}
                    {status === 3 ? <Stage3></Stage3> :null}
                    {status === 4 ? <Stage4></Stage4> :null}
                    {status === 5 ? <Stage5></Stage5> :null}
                    {status === 6 ? <Stage6></Stage6> :null}
                    {status === 7 ? <Stage1></Stage1> :null}
                    {status === 8 ? <Stage1></Stage1> :null}
                    {status === 9 ? <Stage1></Stage1> :null}

                    </div>
   
    </div>);
}
export default Profile;