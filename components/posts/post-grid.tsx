import { NextPage } from "next";
import PostItem from "./post-item";
import classes from "./post-grid.module.scss";
export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
}
interface Props {
  posts: Post[];
}

const PostGrid: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
