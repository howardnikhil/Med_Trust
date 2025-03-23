import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Routes instead of Switch
import AdminPanel from './AdminPanel';
import Viewer from './Viewer';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ textAlign: 'center', padding: '10px' }}>
          <Link to="/" style={{ margin: '0 10px', color: '#00d4ff' }}>Admin</Link>
          <Link to="/viewer" style={{ margin: '0 10px', color: '#00d4ff' }}>Viewer</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AdminPanel />} /> {/* Use element prop instead of component */}
          <Route path="/viewer" element={<Viewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;