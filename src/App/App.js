import React from 'react';
import Cover from './Cover/Cover';

import "../common/style/reset.css";
import "../common/style/style.css";

import Header from './Header/Header';

const App = () => {
  return (
    <>
      <Header/>
      <Cover/>
      <h1>Hello</h1>
    </>
  )
}

export default App;
