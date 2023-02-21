import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import RootNavigation from './navigation/RootNavigation';
import Home from './screens/Home'
// import ContactUs from './screens/ContactUs'
import  ContactUs  from './screens/ContactUs';
function App() {
  return (
    <div>
      {
       /* <BrowserRouter>
        <RootNavigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/contactus"><ContactUs /></Route>
      </BrowserRouter> */
      <ContactUs />
      }
    
    </div>
  )
}

export default App;