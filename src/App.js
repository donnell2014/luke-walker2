import './App.css';
import React, { useState } from 'react'
import Search from './components/Search';
import { Router, navigate } from '@reach/router';
import Display from './views/Display';

function App() {
  const [searchTerms, setSearchTerms] = useState({
    category: 'planets',
    id: 0
  });

  // const [data, setData] = useState({});

  const changeHandler = e => {
    setSearchTerms({
      ...searchTerms,
      [e.target.name]: e.target.value
    })
  };
  const submitHandler = e => {
    e.preventDefault();
    navigate(`/${searchTerms.category}/${searchTerms.id}`);
  };


  return (
    <div >
      <Search searchTerms={ searchTerms } changeHandler={changeHandler} submitHandler={ submitHandler }/>
      <Router>
        <Display path="/:category/:id"/>
      </Router>
    </div>
  );
}

export default App;
