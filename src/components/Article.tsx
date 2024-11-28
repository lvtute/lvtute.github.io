import { Post } from '@src/common/types';
import { Link } from 'react-router-dom';

type Props = {
  post: Post;
};

const Article = ({ post }: Props) => {
  return (
    <>
      <article className="flex flex-col items-start justify-between rounded-sm">
        <div className="flex items-center gap-x-2 text-xs">
          <time dateTime="2020-03-16" className="text-slate-300 font-semibold">
            {post.date}
          </time>
        </div>
        <div className="group relative text-left">
          <Link to={`/post/${post.id}`}>
            <h3 className="mt-3 text-2xl text-slate-300 font-bold">
              {post.title}
            </h3>
          </Link>
          {post.tags.map((tag) => (
            <span
              key={`tag-${tag}`}
              className="relative z-10 rounded-full pr-3 font-semibold text-pink-500 uppercase cursor-pointer text-sm"
            >
              {tag}
            </span>
          ))}

          <p className="mt-5 line-clamp-3 text-sm text-slate-300">
            {post.shortDescription}
          </p>
        </div>
      </article>
    </>
  );
};

export default Article;
