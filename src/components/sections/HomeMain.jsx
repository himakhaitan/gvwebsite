import Hello from "./Hello";
import classes from "./HomeMain.module.css";


const HomeMain = (props) => {

  return (
    <div className={classes.homeMain}>
      {/* HELLO COMPONENT (CENTER OF ATTRACTION) */}
      <Hello />
     
    </div>
  );
};

export default HomeMain;
