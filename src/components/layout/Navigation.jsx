import { useState } from "react";
import classes from "./Navigation.module.css";
import { HiMenu, HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { TiPhoneOutline } from "react-icons/ti";

// Annimation
// import { useSpring, animated } from 'react-spring'

const Navigation = (props) => {
  // const styles = useSpring({ to: { opacity: 1 } ,from: { opacity: 0 }, reset: true, delay: 200, tranform: 'translateX(-300px)' })
  const [nav, setNav] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setNav(false);
  //   }, 300);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [nav]);
  const navHandler = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        {!nav && <HiMenu onClick={navHandler} />}
        {nav && <GrFormClose onClick={navHandler} />}
      </div>
      {!nav && (
        <div className={`${classes.logo} ${!nav ? classes.logoanimate : ""}`}>
          Geeky Vision
        </div>
      )}
      {nav && (
        <ul
          className={`${nav ? classes.navanimate  : ""} ${classes.navigation}  `}
        >
          <li className={classes.listitem}>Home</li>
          <li className={classes.listitem}>About</li>
          <li className={classes.listitem}>Portfolio</li>
          <li className={classes.listitem}>Contact</li>
        </ul>
      )}
      <div className={classes.socials}>
        <TiPhoneOutline />
        <HiOutlineMail />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navigation;
