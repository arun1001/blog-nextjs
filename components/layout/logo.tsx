import { NextPage } from "next";
import classes from "./logo.module.scss";
interface Props {}

const Logo: NextPage<Props> = () => {
  return <div className={classes.logo}>Arun's Blog</div>;
};

export default Logo;
