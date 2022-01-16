import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./post-grid";
import classess from "./post-item.module.scss";
interface Props {
  post: Post;
}

const PostItem: NextPage<Props> = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `posts/${slug}`;
  return (
    <li className={classess.post}>
      <Link href={linkPath}>
        <a>
          <div className={classess.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classess.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
