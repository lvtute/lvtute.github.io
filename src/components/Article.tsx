import { Post } from '@src/common/types';

type Props = {
  post: Post;
};

const Article = ({ post }: Props) => {
  return (
    <article className="flex flex-col items-start justify-between p-4 backdrop-blur-lg bg-black bg-opacity-10 hover:bg-opacity-15 rounded-sm  transition-colors">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime="2020-03-16" className="text-gray-500">
          {post.date}
        </time>
        {post.tags.map((tag) => (
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="group relative text-left">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 ">
          <a href="#">
            <span className="absolute inset-0"></span>
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
          {post.shortDescription}
        </p>
      </div>
    </article>
  );
};

export default Article;
