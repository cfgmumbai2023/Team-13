import { useState } from 'react';
import classes from'./d4.module.css'
import Certification from './certification';
const CertiBtn=props=>{
    const [isBtnClicked,setIsBtn]=useState(false);
    const clickHandler=()=>{
       setIsBtn(true);
    }
    if(isBtnClicked)
    return <Certification/>
    return <form className={classes.form} >
        <button onClick={clickHandler}>Click to render Certi</button>
    </form>
};
export default CertiBtn;