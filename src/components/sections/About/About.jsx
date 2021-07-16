import classes from "./About.module.css";
import Text from "../../text/Text";
const About = () => {
  const text = ["About", "Geeky Vision ."];
  return (
    <div className={classes.about}>
      <Text
        left={false}
        text={text}
        color={classes.color}
        primary={classes.primary}
      >
        <div>Hello!</div>
      </Text>
    </div>
  );
};

export default About;
