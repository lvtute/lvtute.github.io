import { Post } from '@src/common/types';
import _posts from '../assets/jsons/posts.json';
import Article from '@src/components/Article';

const posts = _posts as unknown as Post[];
const CodingNotes = () => {
  return (
    <div>
      <div className=" sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 flex flex-col gap-y-4 ">
        {posts.map((post) => (
          <Article post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default CodingNotes;
