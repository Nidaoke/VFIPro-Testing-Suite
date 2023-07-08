import logo from './assets/vfiprologo.png';
import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to VFI Pro!</p>
        <p>This is the page Header (will appear on all pages)</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          This app is currently in development.
        </p>
        <p>GET Request Test: {!data ? "Loading..." : data}</p>
      </header>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>

    /*<div className="App">
      <header className="App-header">
        <p>Welcome to VFI Pro!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {*//*Edit <code>src/App.js</code> and save to reload.*//*}
          This app is currently in development.
        </p>
        <p>GET Request Test: {!data ? "Loading..." : data}</p>
      </header>
      <body>
        <fieldset>
          <legend>To-Do List</legend>
          <input type="checkbox" id="task1" name="task1" checked disabled />
          <label for="task1">Database</label><br></br>
          <input type="checkbox" id="task2" name="task2" unchecked disabled />
          <label for="task2">Login?</label><br></br>
          <input type="checkbox" id="task3" name="task3" unchecked disabled />
          <label for="task3">Task1</label><br></br>
        </fieldset>
      </body>
    </div>*/
  );
}

export default App;
