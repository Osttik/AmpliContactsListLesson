import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ToDoList from './components/toDoList/ToDoList';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
