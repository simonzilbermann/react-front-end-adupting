import React, { useState } from 'react';



const Confirm = () => {

    const [percentage, setPercentage] = useState(0);

    const updateProgress = (percentage) => {
        setPercentage(percentage);
    }
    React.useEffect(() => {
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => {
                updateProgress(i);
            }, 20 * i);
        }
    }, []);
    setTimeout(() => {
        window.location.replace('./profile');
      },2000);
    
    return (<div>
           <div className="container">
            <h1 className="mytext1">הנתונים שלך עוברים אימות </h1>
            <progress ></progress>
                
            <br />
            <br />
            <br />
                <p className="mytext2" >{percentage}%</p>
            </div>

    </div>);
}
export default Confirm;