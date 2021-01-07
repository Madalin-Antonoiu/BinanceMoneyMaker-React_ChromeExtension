import React, { useEffect, useState } from "react";
import binance from "../react-components/api/binance";

const App = () => {
  const [cryptocoins, setCryptocoins] = useState([]);

  useEffect(() => {
    async function search() {
      const response = await binance.get("/exchangeInfo"); // means i get the data property from the response
      setCryptocoins(response.data.symbols);
    }
    search();
  }, []);

  return (
    <div>
      {cryptocoins.map((cryptocoin) => (
        <div key={cryptocoin.symbol}>{cryptocoin.symbol}</div>
      ))}
    </div>
  );
};

export default App;
