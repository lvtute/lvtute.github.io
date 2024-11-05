import { HashRouter, Route, Routes } from 'react-router-dom';
import PageContainer from './components/PageContainer';
import About from './pages/About';
import CodingNotes from './pages/CodingNotes';
import Projects from './pages/Projects';
import Post from './pages/Post';

const App = () => {
  return (
    <PageContainer>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="coding-notes" element={<CodingNotes />} />
          <Route path="projects" element={<Projects />} />
          <Route path="post/:postId" element={<Post />} />
        </Routes>
      </HashRouter>
    </PageContainer>
  );
};

export default App;
