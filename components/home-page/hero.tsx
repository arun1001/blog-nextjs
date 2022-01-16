import { NextPage } from "next";
import Image from "next/image";
import classes from "./hero.module.scss";
interface Props {}

const Hero: NextPage<Props> = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/arun.jpg"
          alt="user"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Arun</h1>
      <p>
        I blog about web developement - especially frontend frameworks like
        Angular and React
      </p>
    </section>
  );
};

export default Hero;
