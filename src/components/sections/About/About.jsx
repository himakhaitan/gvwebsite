import classes from "./About.module.css";
import Text from "../../text/Text";
const About = (props) => {
  const text = ["About", "Geeky Vision ."];
  const data = [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos non dicta eius saepe asperiores, nihil consectetur explicabo recusandae et ipsa vel error sed perferendis omnis ullam atque architecto a perspiciatis.",
    },
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, rerum atque corporis iure eum incidunt neque, aliquid minus officiis cum explicabo dolorem officia veniam ipsa quibusdam odio sit iusto.",
    },
    {
      title: "Graphic Desigining",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, rerum atque corporis iure eum incidunt neque, aliquid minus officiis cum explicabo dolorem officia veniam ipsa quibusdam odio sit iusto.",
    },
  ];

  return (
    <div className={classes.about} id={props.id}>
      <Text
        left={false}
        text={text}
        color={classes.color}
        primary={classes.primary}
      >
        <div className={classes.aboutDiv}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            quo excepturi minus sunt vitae dolor obcaecati iusto culpa assumenda
            veniam aliquid animi ab tempore deserunt, perferendis aut nobis
            voluptatibus odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            quo excepturi minus sunt vitae dolor obcaecati iusto culpa assumenda
            veniam aliquid animi ab tempore deserunt, perferendis aut nobis
            voluptatibus odio?
          </p>
          <div className={`${classes.data}`} >
            {data.map((item) => {
              return (
                <div className={classes.dataitem}>
                  <h3>{item.title}</h3>
                  <p className={classes.description}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Text>
    </div>
  );
};

export default About;
