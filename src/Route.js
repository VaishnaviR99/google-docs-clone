import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';



function Rout() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" component={Header} />
        {/* <Route exact path="/doc" component={Doc} /> */}
      </Routes>
    </Router>
  )
}

export default Rout