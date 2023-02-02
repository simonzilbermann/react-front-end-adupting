import React,{useState ,useEffect} from "react";
import bell from '../assets/images/bell.png';
import Button from '@material-ui/core/Button';
import WmProfile from './WmProfile';
import ContentUs from "./ContentUs";
const Alerts = (props)=>{

const [getAlerts,SetAlerts]=useState([]);
const [getHumburgerAlert,setHumburgerAlert] = useState(false);
const [getproid,setproid] = useState("");
const [hasedit,sethasedit] = useState(false);
const [cont_us,setCont_us] = useState(false);
const [alertdata,setalertdata] = useState(null);

const fetch_confirm_profiles = () =>{
    fetch('http://localhost:4477/prof/con_prof', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
}

const fetch_alerts = ()=>{
    fetch('http://localhost:4477/alerts/getall', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json()).then(data => {
       if(data.msg.length > 0)
        SetAlerts(data.msg);
        
      })
    }

    useEffect(() => {
        fetch_confirm_profiles();
        fetch_alerts();

    }, []);
      
    const handleAlert =()=>{
        setHumburgerAlert(!getHumburgerAlert);
        sethasedit(false);
    }
    const handleAlertType = (alert)=>{
        
        if(alert.type ==="status"){
            setproid(alert.profileid);
            sethasedit(true);
            setHumburgerAlert(false);
        }
        else if(alert.type ==="content_us"){
            setHumburgerAlert(false); 
            setCont_us(true);
            setalertdata(alert);
        }
        
        
    }
    
    return (<div >
     <div className="allbell" >
        <Button  onClick={handleAlert} class="notification" style={{cursor: 'pointer'}}>
            <span><img id="bel" alt="" src={bell} /></span>
            <span class="badge">{getAlerts.length >0 ? getAlerts.length:0}</span>
        </Button>
    </div><br /> 
        {getHumburgerAlert===true ? <div >

        <div class="alerts">
           
        {getAlerts.map((alert, index) => (
            
             <div class="alert alert-warning animated bounceInRight" style={{cursor: 'pointer'}}>
             <div class="icon">
                 <i class="fa fa-exclamation-circle fa-2x"></i>
             </div>
             <div >
                 <h4>{alert.type}</h4>
                 <p>{alert.type ==="content_us" ? alert.content.substring(0,50)+"...." :alert.content}</p>
                 <p>alert index: {index}</p>
                   <Button onClick={ () => handleAlertType(alert)}> edit</Button>
             </div>
             
         </div>
           ))}

        </div>
       
         {/* <div class="alert alert-info animated bounceInRight">
                <div class="icon pull-left">
                    <i class="fa fa-info fa-2x"></i>
                </div>
                <div class="copy">
                    <h4>Information</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <p class="close">5</p>
            </div> */}
  {/* <div class="alert alert-success animated bounceInRight">
        <div class="icon pull-left">
            <i class="fa fa-check fa-2x"></i>
        </div>
        <div class="copy">
            <h4>Success</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <p class="close">
            5
        </p>
        </div> */}

        {/* <div class="alert alert-danger animated bounceInRight">
        <div class="icon pull-left">
            <i class="fa fa-exclamation-triangle fa-2x"></i>
        </div>
        <div class="copy">
            <h4>Something bad just happened!</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <p class="close">
            <i class="fa fa-times"></i>
        </p>
        </div> */}
        </div>  :null}
        <div >
            { hasedit ? <WmProfile id={getproid} /> :null }
            {cont_us ? <ContentUs aler={alertdata} /> :null}
        </div>
    </div>);
}
export default Alerts;