import React from "react";

const ContentUs =(props)=>{
        console.log(props.aler.content);
       // var content = email+","+phone+","+cleanbody+","+cleansubject+","+ticket.ticketid;
    return (
    <div>
        <div className="pnia">
            <table>
                <thead>
                    <tr>
                        <th scope="col">מספר פנייה</th>
                        <th scope="col">מייל </th>
                        <th scope="col">טלפון</th>
                        <th scope="col">נושא הפנייה</th>
                        <th scope="col">גוף הפנייה</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >     
                        <td >{props.aler.content.split(',')[4]}</td>
                        <td>{props.aler.content.split(',')[0]}</td>
                        <td>{props.aler.content.split(',')[1]}</td>
                        <td>{props.aler.content.split(',')[3]}</td>   
                        <td>{props.aler.content.split(',')[2]}</td> 
                    </tr>
                </tbody>
            </table>
        
           
        </div>
    </div>
    );
}
export default ContentUs;