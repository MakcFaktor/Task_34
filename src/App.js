import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Hotels from './components/Hotels';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/hotels" element={<Hotels />} />
            </Routes>
        </Router>
    );
}

export default App;
