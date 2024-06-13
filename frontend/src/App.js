import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Links from './components/Links';
import Products from './components/Products';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Timeline />
        <Links />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
