import { NextPage } from "next";
import classes from "./all-posts.module.scss";
import PostGrid, { Post } from "./post-grid";
interface Props {
  posts: Post[];
}

const AllPosts: NextPage<Props> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts}></PostGrid>
    </section>
  );
};

export default AllPosts;
