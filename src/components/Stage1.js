import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

  const Stage1 = ()=>{

    const [value, setValue] = useState("");
    const classes = useStyles();
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  

    
      const handleSave = () => {
        if(value === ""){
          alert("אתה חייב לבחור משהו");
        }
        else{
        let nvalue = Number(value);
        console.log(typeof nvalue);
       fetch('http://localhost:4477/prof/salary', {
           method: 'POST',
           body: JSON.stringify({salary:nvalue,profileid:sessionStorage.getItem("proid") }),
           headers: { 'Content-Type': 'application/json' },
         }).then(response => response.json()).then(data => {
                if(data.msg === 1)
                rundiscion();
         })
        }
      };
      const rundiscion= ()=>{
           
            fetch('http://localhost:4477/decision/run_manualy', {
                method: 'POST',
                body: JSON.stringify({ decisionid:"sr4hhz4",profileid:sessionStorage.getItem("proid")}),
                headers: { 'Content-Type': 'application/json' },
              }).then(response => response.json()).then(data => {
                    console.log(data);
                    window.location.reload();
              })
      }

    return (<div>
          
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">בחר שכר במומצע</FormLabel>
                    <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                        <FormControlLabel value="7000" control={<Radio />} label="7000 ₪" />
                        <FormControlLabel value="9000" control={<Radio />} label="9000 ₪" />
                        <FormControlLabel value="5000" control={<Radio />} label="5000 ₪" />
                        <FormControlLabel value="10000" control={<Radio />} label="10,000 ₪" />
                        <FormControlLabel value="8000" control={<Radio />} label="8000 ₪" />
                    </RadioGroup>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSave}>Save</Button>
                    </FormControl>
                 

    </div>);
  }
  export default Stage1;