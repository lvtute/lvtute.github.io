import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NavBar from './components/NavBar';
import CodingNotes from './pages/CodingNotes';

const App = () => {
  return (
    <div className="bg-white">
      <header className="absolute right-0 top-0 z-50 max-w-2xl">
        <NavBar />
      </header>

      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="coding-notes" element={<CodingNotes />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
