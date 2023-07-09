import classes from'./d1.module.css'
import Cards from './cards';
import CertiItem from './certiItem';
const DUMMY_ITEMS = [
    {
      id:1,
      name:'Football Beginner',
      duration:35+" hours",
      difficulty:'Advanced'
    },
    {
      id:2,
        name:'Football Foundation Course',
        duration:53+" hours",
        difficulty:'Intermediate'
    }
  ]; 
const AvailableCourses=()=>{
   const coursesList=DUMMY_ITEMS.map((course)=>
   <CertiItem id={course.id} name={course.name} duration={course.duration} difficulty={course.difficulty} />);
   return (<section className={classes.meal}>
        <Cards>
        <ul >
            {coursesList}
        </ul>
        </Cards>
    </section>)

};
export default AvailableCourses;