import { Post } from '@src/common/types';
import { Link } from 'react-router-dom';

type Props = {
  post: Post;
};

const Article = ({ post }: Props) => {
  return (
    <Link to={`/post/${post.id}`}>
      {' '}
      <article className="flex flex-col items-start justify-between p-4 backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-15 rounded-sm  transition-colors cursor-pointer">
        <div className="flex items-center gap-x-2 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            {post.date}
          </time>
          {post.tags.map((tag) => (
            <span
              key={`tag-${tag}`}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="group relative text-left">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 ">
            <span className="absolute inset-0"></span>
            {post.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
            {post.shortDescription}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Article;
