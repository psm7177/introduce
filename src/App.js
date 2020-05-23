import React from 'react';
import './App.css';

import Layout from './components/Layout';

import Phrase from './components/Phrase';
import About from './components/About';

function App() {

  return (
    <Layout>
      {[<Phrase/>,<About/>]}
    </Layout>
  );
}

export default App;
