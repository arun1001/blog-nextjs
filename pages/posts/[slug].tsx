import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { Post } from "../../components/posts/post-grid";
import { getPostData, getPostFiles } from "../../lib/posts-util";

interface Props {
  postData: Post;
}

const PostDetail: NextPage<Props> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt}></meta>
      </Head>
      <PostContent post={props.postData} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const postData = getPostData(slug);
  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const fileNames = getPostFiles();
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export default PostDetail;
