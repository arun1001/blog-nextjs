import { NextPage, GetStaticProps } from "next";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { Post } from "../../components/posts/post-grid";
import { Fragment } from "react";
import Head from "next/head";

interface Props {
  posts: Post[];
}

const Posts: NextPage<Props> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="List of all programming tutorials"
        ></meta>
      </Head>
      <AllPosts posts={props.posts}></AllPosts>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
};

export default Posts;
