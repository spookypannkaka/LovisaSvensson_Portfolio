import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import FixedHeader from './components/FixedHeader';

function App() {
  return (
    <BrowserRouter>
      <div style={container}>
        <FixedHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectNameSlug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#dabaff',
}

export default App;
