import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import RootNavigation from './navigation/RootNavigation';
import Home from './screens/Home'
import ContactUs from './screens/ContactUs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RootNavigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/contactus"><ContactUs /></Route>
      </BrowserRouter>
    </div>
  )
}

export default App;