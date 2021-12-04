import React from 'react';
// Module not found: You attempted to import ../frontend/src/screens/home which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
// import Home from '../frontend/src/screens/home';
import Home from './screens/home';
import Records from './screens/records';
// TODO: Add Board Route
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/records" element= { <Records /> } />
      </Routes>
    </div>
  );
}

export default App;
