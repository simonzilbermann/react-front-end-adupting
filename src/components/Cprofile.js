import React, { useState } from 'react';
import axios from 'axios';


const Cprofile = () => {

  const userid = sessionStorage.getItem("uid");
 
  let siomet =[];


  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCprofile = ()=>{
    fetch('http://localhost:4477/prof/create', {
      method: 'POST',
      body: JSON.stringify({userid ,image:"."+siomet[1]}),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json()).then(data => {
          sessionStorage.setItem("proid",data.msg.profileid);
          
         
    });
}
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      siomet =  file.name.split('.');
      
      formData.append('file', file);
      formData.append('name', sessionStorage.getItem("uid"));
  
      const response = await axios.post('http://localhost:4477/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      let namepic =JSON.stringify( response.data).split(':');
      if(namepic[2] != null){
        handleCprofile();

        setTimeout(() => {
          window.location.replace('./confirm');
        }, 1000);
      
      }
      else{
        alert("somthing goes wrong with upload try again");
      }
    } catch (error) {
      console.error(error);
    }



  }



  return (
    <div>
      <div className="container login__container my-5">
        <div className="row login__row">
          <div className="col-md-6 d-flex">
          <img  className="login__imagek align-self-center" src="https://cdn.stocksnap.io/img-thumbs/960w/black-family_JJM30OAQR3.jpg"
                    width="100%" alt="" />
          </div>
          <div className="col-md-5 d-flex">
            <div className="align-self-center card login__card shadow-sm w-100">
              <div className="card-body">
                  <h4 className="text-right">  שלב העלאת תמונה </h4>
                  <input type="file" width={200} onChange={handleChange} /><br />
                 <button onClick={handleUpload}>העלה תמונה</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    
    </div>
        );
      }
      export default Cprofile;
