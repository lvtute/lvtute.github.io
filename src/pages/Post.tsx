import { useParams } from 'react-router-dom';

import _posts from '../assets/jsons/posts.json';
import type { Post } from '@src/common/types';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

const posts = _posts as unknown as Post[];

const MARKDOWNS_PATH = import.meta.env.VITE_MARKDOWNS_PATH;

const Post = () => {
  const { postId } = useParams();

  const thisPost = posts.find((p) => p.id === postId);

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (thisPost) {
      const markdownPath = `${MARKDOWNS_PATH}/${thisPost.markdown}.md`;
      fetch(markdownPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch markdown file: ${response.statusText}`,
            );
          }
          return response.text();
        })
        .then((text) => setContent(text))
        .catch((error) => {
          console.error(error);
          setContent('Failed to load content.');
        });
    }
  }, [thisPost]);

  if (!content) return null;

  return <Markdown>{content}</Markdown>;
};

export default Post;
