import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Menu from './pages/Menu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Welcome/>} />
        <Route path="/menu" exact element={<Menu/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;