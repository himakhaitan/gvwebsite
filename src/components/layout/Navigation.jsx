import classes from "./Navigation.module.css";
import { HiMenu, HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";

const Navigation = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <HiMenu />
      </div>
      <div className={classes.logo}>Geeky Vision</div>
      <div className={classes.socials}>
        <TiPhoneOutline />
        <HiOutlineMail/>
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navigation;
