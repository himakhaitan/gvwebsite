import React from "react";
import classes from "./Team.module.css";
import Text from "../../text/Text";
import TeamMember from "./TeamMember";

// Images
import harsh from "./harsh.JPG";
import himanshu from "./hima.jpg";
export default function Team() {
  const text = ["We Are", "Geeky Vision."];
  return (
    <div className={classes.team}>
      <Text
        left={false}
        text={text}
        color={classes.color}
        primary={classes.primary}
      >
        <div className={classes.teamDiv}>
          <div>
          <TeamMember
            post="Founder | Developer"
            instagram=""
            linkedin=""
            facebook=""
            name="Himanshu Khaitan"
            img={himanshu}
          />
          </div>
         <div>
         <TeamMember
            post="Founder | Digital Marketer"
            instagram=""
            linkedin=""
            facebook=""
            name="Harsh Khaitan"
            img={harsh}
          />
         </div>
         
        </div>
      </Text>
    </div>
  );
}
