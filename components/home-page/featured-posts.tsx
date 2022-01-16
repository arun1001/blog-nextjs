import { NextPage } from "next";
import PostGrid, { Post } from "../posts/post-grid";
import classes from "./featured-posts.module.scss";
interface Props {
  posts: Post[];
}

const FeaturedPosts: NextPage<Props> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  );
};

export default FeaturedPosts;
