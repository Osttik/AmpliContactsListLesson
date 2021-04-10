import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContactsList from './components/contactsList/ContactsList';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <ContactsList />
      <Footer />
    </div>
  );
}

export default App;
