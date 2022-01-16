import { NextPage } from "next";
import PostHeader from "./post-header";
import classes from "./post-content.module.scss";
import ReactMarkdown from "react-markdown";
import { Post } from "../post-grid";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
interface Props {
  post: Post;
}

const PostContent: NextPage<Props> = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const MarkdownComponents: object = {
    // Convert Markdown img to next/image component and set height, width and priority
    // example: ![AltText {priority}{768x432}](...
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "");
        const isPriority = image.properties.alt
          ?.toLowerCase()
          .includes("{priority}");
        const metaWidth = image.properties.alt.match(/{([^}]+)x/);
        const metaHeight = image.properties.alt.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "600";
        const height = metaHeight ? metaHeight[1] : "300 ";

        return (
          <Image
            src={`/images/posts/${post.slug}/${image.properties.src}`}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={darcula}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={MarkdownComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
