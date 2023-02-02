import React from 'react';
import { useParams } from 'react-router-dom';
const ConfirmUser =()=>{

    let { confirmcode } = useParams();
    const handleConfirm =()=>{
        fetch('http://localhost:4477/user/enable', {
          method: 'POST',
          body: JSON.stringify({ confirm:confirmcode,userid:sessionStorage.getItem("uid")}),
          headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json()).then(data => {
            setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
              }, 1000); 
        })
    }
    return (<div>


       <button className="btn btn-primary" onClick={handleConfirm}>אישור משתמש </button>
    </div>);
}
export default ConfirmUser;