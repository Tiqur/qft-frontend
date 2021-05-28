import { useState, createContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [price, setPrice] = useState(0);
  const [change24h, setChange24h] = useState(0);
  const [volume24h, setVolume24h] = useState(0);
  const [liquidity, setLiquidity] = useState(0);
  const [marketcap, setMarketcap] = useState(0);

  return (
    <GlobalContext.Provider value={{priceState: [price, setPrice], changeState: [change24h, setChange24h], volumeState: [volume24h, setVolume24h], liquidityState: [liquidity, setLiquidity], marketcapState: [marketcap, setMarketcap]}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
