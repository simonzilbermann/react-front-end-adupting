import Button from '@material-ui/core/Button';
import React ,{useState,useEffect} from "react";
import WmProfile from './WmProfile';
const GetProfiles =()=>{
 
   
    const [profiles, setProfiles] = useState([]);
    const [getpid,setpid] = useState("");

    const [showProfiles,setShowProfiles] = useState(true);
   const [showsingleprofile,setshowsingleprofile] = useState(false);
   
    const fetchProfiles =()=>{
        fetch('http://localhost:4477/prof/allpro', {
            method: 'GET',
          }).then(response => response.json()).then(data => {
                setProfiles(data.msg);
          })
    }

    useEffect(() => {
        fetchProfiles();
    }, []);

    const EditProfile =(pid)=>{
        setpid(pid);

        setShowProfiles(false);
        setshowsingleprofile(true);
        
       
    }

    return ( <div>

 { showProfiles ===true ?  

 <table >
  <thead>
    <tr>
    <th scope="col">שורה</th>
        <th scope="col">מזהה פרופיל</th>
        <th scope="col">שם מלא</th>
        <th scope="col">אימייל</th>
        <th scope="col">תאריך לידה</th>
        <th scope="col">טלפון</th>
        <th scope="col">כתובת</th>
        <th scope="col">תעסוקה</th>
        <th scope="col">שכר מומצע</th>
        <th scope="col">סטטוס</th>
        <th scope="col">תמונה</th>
        <th scope="col">פעולות</th>
    </tr>
  </thead>
  <tbody>
  {profiles.map((profile, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{profile.profileid}</td>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.d_of_birth}</td>
                <td>{profile.phone}</td>
                <td>{profile.city} {profile.address}</td>
                <td>{profile.employment} </td>
                <td>{profile.salary}</td>
                <td>{profile.status}</td>
                
                <td><img height={70} width={70} src={`http://localhost:4477/images/${profile.userid}${profile.image}`} alt=""/></td>
                <td >
                <Button onClick={() => EditProfile(profile.profileid)}  className="btn btn-danger btn-xs" aria-hidden="true"><span className="glyphicon glyphicon-remove"></span> Edit</Button>
                
                </td>
            </tr>
 
    


 
 ))}


  </tbody>
</table> :null}
     
    { showsingleprofile ===true ?  <WmProfile id={getpid} />:null} 

    </div>);
    
}
export default GetProfiles;