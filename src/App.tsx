import { useEffect, useState } from 'react';
import './App.css';

import Markdown from 'markdown-to-jsx';
import pdf from './Resume_LuongVanThuan_JrDev.pdf';

function App() {
  const fileName = 'test';
  const [post, setPost] = useState<string>('');

  useEffect(() => {
    import(`./markdowns/${fileName}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setPost(text));
    });
  }, []);

  const openPdf = () => {
    window.open(pdf, '_blank');
  };

  return (
    <>
      <Markdown>{post}</Markdown>
      <button onClick={openPdf}>pdf</button>
    </>
  );
}

export default App;
