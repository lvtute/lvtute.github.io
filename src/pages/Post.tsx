import { useParams } from 'react-router-dom';

import _posts from '../assets/jsons/posts.json';
import type { Post } from '@src/common/types';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

const posts = _posts as unknown as Post[];

const Post = () => {
  const { postId } = useParams();

  const thisPost = posts.find((p) => p.id === postId);

  const [content, setContent] = useState<string | null>(null);

  const test = '/test';

  useEffect(() => {
    if (thisPost) {
      import(/* @vite-ignore */ `/src/markdowns${test}.md`).then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      });
    }
  }, [thisPost]);

  if (!content) return null;

  return <Markdown>{content}</Markdown>;
};

export default Post;
