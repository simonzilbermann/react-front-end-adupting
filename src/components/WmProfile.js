import React,{useEffect,useState} from "react";


const WmProfile = (props)=>{
    const [showFullImage, setShowFullImage] = useState(false);
    const [showFullImage2, setShowFullImage2] = useState(false);
    const [showFullImage3, setShowFullImage3] = useState(false);
    const [showIdPicFull ,setshowIdPicFull]  = useState(false);
    const options = Array.from({length: 10}, (_, i) => i + 1);
    
    const [singleProfile,setSingelPro] = useState(Object);
    const [Created_at,setCreated_at] = useState("");
    const [Biror ,setBiror]  = useState(false);

    const deleteProfile = ()=>{
        fetch('http://localhost:4477/prof/delete_profile', {
            method: 'POST',
            body: JSON.stringify({profileid:props.id}),
            headers: { 'Content-Type': 'application/json' }
          }).then(response => response.json()).then(data => {
            alert(data.msg);
            window.location.reload();
          })
    }

    const fetchProfile =()=>{
    fetch('http://localhost:4477/prof/getbyid', {
        method: 'POST',
        body: JSON.stringify({profileid:props.id}),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json()).then(data => {
            setSingelPro(data.msg);
            setCreated_at(data.msg.created_at.substring(0,(data.msg.created_at.length/2)-1));
      })
    }

      useEffect(() => {
        fetchProfile();
    });
    const handleClick = () => {
        setShowFullImage(!showFullImage);
        setShowFullImage2(false);
        setShowFullImage3(false);
        setshowIdPicFull(false);
    }
    const handleClick2 = () => {
        setShowFullImage2(!showFullImage2);
        setShowFullImage(false);
        setShowFullImage3(false);
        setshowIdPicFull(false);
    }
    const handleClick3 = () => {
        setShowFullImage3(!showFullImage3);
        setShowFullImage2(false);
        setShowFullImage(false);
        setshowIdPicFull(false);
    }
    const handleClick1 =()=>{
        setshowIdPicFull(!showIdPicFull);
        setShowFullImage(false);
        setShowFullImage2(false);
        setShowFullImage3(false);
    }
    const handleBiror =()=>{
        setBiror(!Biror);
    }
    return (
    <div>   

        <table >
            <thead>
                <tr>
                    <th scope="col">תמונת פרופיל</th>
                    <th scope="col">קובץ תעודת זהות</th>
                    <th scope="col">קובץ רקע אקונומי</th>
                    <th scope="col">קובץ רקע פלילי</th>
                    <th scope="col">שם מלא</th>
                    <th scope="col">סטטוס</th>
                    <th scope="col">מקצוע</th>
                    <th scope="col">שכר מומצע</th>
                    <th scope="col">תאריך לידה</th>
                    <th scope="col">טלפון</th>
                    <th scope="col">לאום</th>
                    <th scope="col">כתובת</th>
                    <th scope="col">אימייל</th>
                    <th scope="col">תאריך יצירה</th>
                </tr>
            </thead>
            <tbody>
                <tr>   
                    <td><img height={50} width={50} src={`http://localhost:4477/images/${singleProfile.userid}${singleProfile.image}`} alt=""  onClick={handleClick1} style={{cursor: 'pointer'}} /></td>
                    <td><img height={50} width={50} src={`http://localhost:4477/images/${singleProfile.userid}_${singleProfile.profileid}_1.jpg`} alt="" onClick={handleClick} style={{cursor: 'pointer'}}/></td>
                    <td><img height={50} width={50} src={`http://localhost:4477/images/${singleProfile.userid}_${singleProfile.profileid}_2.jpg`} alt="" onClick={handleClick2} style={{cursor: 'pointer'}} /></td>
                    <td><img height={50} width={50} src={`http://localhost:4477/images/${singleProfile.userid}_${singleProfile.profileid}_3.jpg`} alt="" onClick={handleClick3} style={{cursor: 'pointer'}} /></td>
                    <td>{singleProfile.name} {singleProfile.lastname}</td>
                    <td>{singleProfile.status}</td>
                    <td>{singleProfile.employment}</td>
                    <td>{singleProfile.salary}</td>
                    <td>{singleProfile.d_of_birth}</td>
                    <td>{singleProfile.phone}</td>
                    <td>{singleProfile.region}</td>
                    <td>{singleProfile.city} {singleProfile.street}</td>
                    <td>{singleProfile.email}</td>
                    <td>{Created_at}</td>
                </tr>
            </tbody>
        </table>   
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div style={{display: showIdPicFull ? 'block' : 'none'}}>
                <br />
                <div style={{ border:"3px solid black"}}>
                    <img height={150} width={300} src={`http://localhost:4477/images/${singleProfile.userid}${singleProfile.image}`} alt="" style={{maxWidth: '100%'}}/>
                </div>
            </div>
            <div style={{display: showFullImage ? 'block' : 'none'}}>
                <br />
                <div style={{ border:"3px solid black"}}>
                    <img height={150} width={300} src={`http://localhost:4477/images/${singleProfile.userid}_${singleProfile.profileid}_1.jpg`} alt="" style={{maxWidth: '100%'}}/>
                </div>
            </div>
            
            <div style={{display: showFullImage2 ? 'block' : 'none'}}>
                <br />
                <div style={{ border:"3px solid black"}}>
                    <img height={500} width={500} src={`http://localhost:4477/images/${singleProfile.userid}_${singleProfile.profileid}_2.jpg`} alt="" style={{maxWidth: '100%'}}/>
                </div>
            </div>
            <div style={{display: showFullImage3 ? 'block' : 'none'}}>
                <br />
                <div style={{ border:"3px solid black"}}>
                    <img height={500} width={500} src={`http://localhost:4477/images/${singleProfile.userid}_${singleProfile.profileid}_3.jpg`} alt="" style={{maxWidth: '100%'}}/>
                </div>
            </div>
        </div>
        
        <br /> <br />
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <button   class="btn btn-success">מאשר את הנתונים</button>
            <button onClick={deleteProfile} class="btn btn-danger">דחיית פרופיל והסרתו</button>
            <button onClick={handleBiror}   class="btn btn-dark">בירור</button>
          
        </div>
        <br /> <br />
        {Biror ?
                <div style={{marginLeft:"30%",width:"30%"}}>
                  
                            <div class="form-group">
                                <h6>אימייל פרופיל </h6>
                                <input type="email" class="form-control" value={singleProfile.email}  />
                            </div>
                            <div class="form-group">
                            <h6>כמה תיקונים/קבצים עליו לתקן</h6>
                            <select className="form-control">
                            {options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                            </select>
                            </div>
                            <h6>בחר מה לבירור</h6>
                            <div class="form-group">
                                <select multiple class="form-control" >
                                <option value={"מסמכים לא קריאים"}>מסמכים לא קריאים</option>
                                <option value={"פורמט הקבצים לא נתמך"}>מסמכים לא קריאים</option>
                                <option value={"הרקע הפלילי חשוד"}>הרקע הפלילי חשוד</option>
                                <option value={"סך הההכנסות החודשיות לא מתאים"}> סך ההכנסות החודשיות לא מתאים</option>
                                <option value={""}>5</option>
                                </select>
                            </div>
                            <h6>פרט למשתמש  קצת יותר</h6>
                            <div class="form-group">
                                <textarea class="form-control"  rows="3"></textarea>
                            </div>
                            <button type="button" class="btn btn-warning">שליחת הודעה לפרופיל</button>
                </div> :null}
                <br /> <br />

    </div>
    );
}
export default WmProfile;