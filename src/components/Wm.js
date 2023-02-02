import React ,{useState} from "react";
import Button from '@material-ui/core/Button';

import '../assets/css/Wm.css';

import GetProfiles from "./GetProfiles";
import GetUsers from "./GetUsers";
import Alerts from './Alerts';




const WM = () => {

    
    var tokken = localStorage.getItem("token");
    if(tokken ===null || tokken.length < 10){
        window.location.replace("/loginwm");
    }
    const [showProfiles, setShowProfiles] = useState(false); 
    const [showUsers, setShowUsers] = useState(false);
   const [getmanage,setmanage] = useState(true);
   const [showAlerts, setShowAlerts] = useState(true);
   
   
    const handleButtonProfiles = () => {
        setShowAlerts(false);
        setmanage(false);
        setShowProfiles(true);
        setShowUsers(false);
    }
    const handleButtonUsers = () => {
        setShowAlerts(false);
        setmanage(false);
        setShowUsers(true);
        setShowProfiles(false);
    }
    const refresh =()=>{
            window.location.reload();
    }

    return (
        <div>
            <br />
            <Button class="btn btn-secondary" onClick={refresh}> חזור לניהול </Button>
            <br /> <br />
            <div className="flexnav">
                
                {getmanage ===true ?
                    <div class="navi">
                        <ul>
                            <Button class="fas fa-tasks" aria-hidden="true" onClick={handleButtonProfiles}>Profiles</Button><hr />
                            <Button  class="fas fa-tasks" aria-hidden="true" onClick={handleButtonUsers}>Users</Button><hr />
                            <Button  class="fas fa-tasks" aria-hidden="true">Managers</Button><hr />
                        </ul>
                    </div> : null}
                {showAlerts && <Alerts />} 
            </div>
            <div>
                {showProfiles && <GetProfiles />}
                {showUsers && <GetUsers/>}
            </div>
        </div>
    );
    
}
export default WM;

