import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Update from './Pages/Update';
import View from './Pages/View';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/employee/view/:id" element={<View />} />
          <Route path="/employee/update/:id" element={<Update />} />
        </Routes>
      </Router >
    </div>

  );
}

export default App;
