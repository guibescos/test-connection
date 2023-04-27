import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import { PriceServiceConnection } from '@pythnetwork/price-service-client';

function App() {

  const _getData = async () => {
    const connection = new PriceServiceConnection("https://xc-testnet.pyth.network")
    console.log("Passed")
  }

  useEffect(() => {
    _getData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
