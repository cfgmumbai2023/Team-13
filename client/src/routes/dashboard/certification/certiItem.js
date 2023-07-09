
import CertiBtn from './certiBtn';
import classes from './d3.module.css'
const CertiItem=props=>{
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.duration}</div>
            <div className={classes.price}>{props.difficulty}</div>
        </div>
        <div>
            <CertiBtn></CertiBtn>
        </div>
    </li>

};
export default CertiItem;