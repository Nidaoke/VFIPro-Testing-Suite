import logo from './assets/vfiprologo.png';
import './App.css';
import React from "react";

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          This app is currently in development.
        </p>
        <p>For development updates, see&nbsp;
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
        .
        </p>
        <p>GET Request Test: {!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
