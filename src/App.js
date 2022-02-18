import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import InfosAccount from './components/InfosAccount';
import firebase from './Firebase';
import './App.css';

const ref = firebase.firestore().collection('whitelist');

function App() {

  const [countData, SetCountData] = useState(0);
  const [loader, setLoader] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState();
  const [succes, setSucces] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getAccounts();
    setLoader(false);
    getCount();
  }, [])

  window.ethereum.addListener('connect', async(response) =>{
    getAccounts();
    console.log('ok');
  })

  window.ethereum.on('accountsChanged', () => {
    window.location.reload();
  })

  window.ethereum.on('chainChanged', () =>{
    window.location.reload();
  })

  window.ethereum.on('disconnect', () =>{
    window.location.reload();
  })

  // Get the number of users in the whitelist
  function getCount() {
    ref.get().then(function(querySnapshot) {
      SetCountData(querySnapshot.size);
    })
  }


  async function getAccounts() {
    if(typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts'}); 
      setAccounts(accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(accounts[0]);
      const balanceInEth = ethers.utils.formatEther(balance);
      setBalance(balanceInEth);
    }
  }

  return (
    <div className="App">
      <InfosAccount accounts={accounts} balance={balance} loader={loader}/>
    </div>
  );
}

export {ref}
export default App;
