import classes from './d2.module.css'
const Cards=props=>{
    return <div className={classes.card}>{props.children}</div>

};
export default Cards;