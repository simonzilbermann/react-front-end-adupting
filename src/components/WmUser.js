import React,{useEffect,useState} from "react";

const WmUser = (props)=>{
    const [singleUser,setSingelUsr] = useState(Object);

       
    const fetchUser =()=>{
       
        fetch('http://localhost:4477/user/getuserByid', {
            method: 'POST',
            body: JSON.stringify({userid:props.id}),
            headers: { 'Content-Type': 'application/json' }
          }).then(response => response.json()).then(data => {
            setSingelUsr(data.msg);
          })
        }
        useEffect(() => {
            fetchUser();
        });
    return (<div>
       
          <table >
            <thead>
                <tr>
                    <th scope="col">מזהה משתמש</th>
                    <th scope="col">מזהה פרופיל</th>
                    <th scope="col">שם מלא</th>
                    <th scope="col">אימייל</th>
                    <th scope="col">טלפון</th>
                    <th scope="col">כתובת</th>
                    <th scope="col">תאריך לידה</th>
                    <th scope="col">תאריך יצירה</th>
                    <th scope="col">קוד אישור</th>
                    <th scope="col">מופעל/מכובה</th>
                </tr>
            </thead>
            <tbody>
                <tr>   
                    <td>{singleUser.userid}</td>
                    <td>{singleUser.profileid}</td>
                    <td>{singleUser.name} {singleUser.lastname}</td>
                    <td>{singleUser.email}</td>
                    <td>{singleUser.phone}</td>
                    <td>{singleUser.city} {singleUser.address}</td>
                    <td>{singleUser.d_of_birth}</td>
                    <td>{singleUser.created_at}</td>
                    <td>{singleUser.confirm} </td>
                    <td>{singleUser.enable}</td>
                  
                </tr>
            </tbody>
        </table>
    </div>);
}

export default WmUser;