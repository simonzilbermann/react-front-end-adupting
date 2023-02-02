import React, { useState } from 'react';
import axios from 'axios';



const Stage4 =()=>{
 
    const rundiscion =()=>{
        fetch('http://localhost:4477/decision/run_manualy', {
            method: 'POST',
            body: JSON.stringify({ decisionid:"sr4hhz4",profileid:sessionStorage.getItem("proid")}),
            headers: { 'Content-Type': 'application/json' },
          }).then(response => response.json()).then(data => {
               
                window.location.reload();
          })
  }
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      setFile(e.target.files[0]);
    };
    const handleUpload = async () => {
      if(file === null){
        alert("אתה חייב לבחור קובץ קודם");
      }
      else{
        try {
          const formData = new FormData();
          let siomet =  file.name.split('.');
          sessionStorage.setItem("siomet","."+siomet[1]);
    
          formData.append('file', file);
          formData.append('name', sessionStorage.getItem("uid"));
          formData.append('salarypic', sessionStorage.getItem("proid"));
      
          const response = await axios.post('http://localhost:4477/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          let namepic =JSON.stringify( response.data).split(':');
          if(namepic[2] != null){
            rundiscion();
    
            setTimeout(() => {
              window.location.replace('./confirm');
            }, 100);
            
          // window.location.reload();
          }
          else{
            alert("somthing goes wrong with upload try again");
          }
        } catch (error) {
          console.error(error);
        }
    }
  }
 
    return (<div>

             
                <div className="container login__container my-5" >
                <div className='zain'>
                    <div className="align-self-center card login__card shadow-sm e-50">
                        <div className="card-body">
                            <h4 className="text-center"> מסמך תלוש שכר</h4>
                            <input  className='button btn-primary' type="file" width={200} onChange={handleChange} /><br /><br/>
                            <button className='button btn-primary' onClick={handleUpload}>העלה קובץ</button>
                        </div>
                    </div>
                </div>
              </div>

        </div>);
}
export default Stage4;