import React from "react";
import classes from "./Portfolio.module.css";
import Text from "../../text/Text";
import Pictures from "./Pictures";
const Portfolio = () => {
  const text = ["Our", "Digital", "Portfolio ."];
  return (
    <div className={classes.portfolio}>
      <Text
        left={true}
        text={text}
        color={classes.color}
        primary={classes.primary}
      >
        <div className={classes.portfolioText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          molestias eaque aut qui excepturi id! Quae sunt voluptatem placeat
          provident temporibus cum similique nesciunt nobis, nihil neque tempore
          a odit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          quidem amet iusto temporibus odit facilis nam earum iste, animi ut ea,
          velit aliquid consequatur expedita id, culpa perspiciatis laboriosam
          ipsum!
        </div>
      </Text>
      <div className={classes.pictures}>
        <Pictures />
      </div>
    </div>
  );
};
export default Portfolio;
