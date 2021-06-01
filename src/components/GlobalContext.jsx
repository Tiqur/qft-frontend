import { useState, createContext, useEffect } from 'react';
import { w3cwebsocket as W3WebSocket } from 'websocket';
const ws = new W3WebSocket('ws://45.32.80.143:3001');
const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [price, setPrice] = useState(0);
  const [change24h, setChange24h] = useState('0');
  const [volume24h, setVolume24h] = useState('0');
  const [liquidity, setLiquidity] = useState('0');
  const [marketcap, setMarketcap] = useState('0');

  useEffect(() => {
    ws.onopen = () => {
      console.log("Open")
      ws.send(JSON.stringify({
        type: 'message',
        msg: 'connect'
      }))
    }

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      setPrice(data.price);
      setChange24h(data.change);
      setVolume24h(data.volume);
      setLiquidity(data.liquidity);
      setMarketcap(data.marketcap);
    }
  })

  return (
    <GlobalContext.Provider value={{priceState: [price, setPrice], changeState: [change24h, setChange24h], volumeState: [volume24h, setVolume24h], liquidityState: [liquidity, setLiquidity], marketcapState: [marketcap, setMarketcap]}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
