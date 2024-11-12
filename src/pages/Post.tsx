import { useParams } from 'react-router-dom';

import _posts from '../assets/jsons/posts.json';
import type { Post } from '@src/common/types';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

const posts = _posts as unknown as Post[];
console.log({ mode: import.meta.env.MODE });

const DEV_MARKDOWNS_PATH = '/src/markdowns';
const PROD_MARKDOWNS_PATH =
  'https://raw.githubusercontent.com/lvtute/lvtute.github.io/refs/heads/main/src/markdowns';

const MARKDOWNS_PATH =
  import.meta.env.MODE === 'development'
    ? DEV_MARKDOWNS_PATH
    : PROD_MARKDOWNS_PATH;

const Post = () => {
  const { postId } = useParams();

  const thisPost = posts.find((p) => p.id === postId);

  const [content, setContent] = useState<string | null>(null);

  const test = '/test';

  useEffect(() => {
    if (thisPost) {
      import(/* @vite-ignore */ `${MARKDOWNS_PATH}${test}.md`).then((res) => {
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
