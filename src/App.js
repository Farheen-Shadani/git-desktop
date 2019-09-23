import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <SignIn />

      <ContactUs />

      <Footer />


    </div>
  );
}

export default App;