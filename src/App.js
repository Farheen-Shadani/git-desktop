import React from 'react';
import './App.css';
import Header from './components/Header'
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <SignIn />

      <ContactUs />

      <Footer />

    </div>
  );
}

export default App;