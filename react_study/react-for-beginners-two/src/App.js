import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] =useState([])
  const [money, setMoney] =useState(0);
  const onChange = (event) => setMoney(event.target.value); 
  console.log(money);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>response.json()).then((json)=>{setCoins(json); 
    setLoading(false);});
  }, [])
  return(
    <div>
      <h1>the coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>loading...</strong> : <select>
        {coins.map((item)=><option>{item.name} ({item.symbol}) : {item.quotes.USD.price}</option>)}
      </select>}
    </div>
  )
}

export default App;
