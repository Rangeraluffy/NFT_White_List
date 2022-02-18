import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import './App.css';

function App() {

  const [loader, setLoader] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState();
  const [succes, setSucces] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="App">

    </div>
  );
}

export default App;
