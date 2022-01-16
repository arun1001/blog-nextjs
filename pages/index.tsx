import type { NextPage, GetStaticProps } from "next";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { Post } from "../components/posts/post-grid";
import Head from "next/head";

interface Props {
  post: Post[];
}
const Home: NextPage<Props> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Arun's blogs</title>
        <meta name="description" content="I write about web development"></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.post} />
    </Fragment>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      post: featuredPosts,
    },
    revalidate: 60,
  };
};

export default Home;
