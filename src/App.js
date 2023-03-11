import './App.css';
import React from "react";
import About from './components/About/About';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Vimukthi Gunasekara</title>
        <meta name="description" content="Vimukthi Gunasekara Portfolio" />
        <link rel="icon" href="../src/Assets/Images/profile-image.jpg" />
      </Helmet>
      <About />
    </div>
  );
}

export default App;
