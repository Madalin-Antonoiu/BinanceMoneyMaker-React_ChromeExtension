import React from "react";

class App extends React.Component {
  state = { priceNow: "" };

  componentDidMount() {
    this.interval = setInterval(() => {
      const price = document.querySelector(".contractPrice").textContent;
      // only pass it to setState if it changed
      if (price === this.state.priceNow) return;

      this.setState({
        priceNow: price,
      }),
        400;
    });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Price now is", this.state.priceNow);
  }

  render() {
    return (
      <div id="39jdjsdssd">
        {this.state.price} {this.state.priceNow}
      </div>
    );
  }
}

export default App;

// const [cryptocoins, setCryptocoins] = useState([]);

// useEffect(() => {
//   async function search() {
//     const response = await binance.get("/exchangeInfo"); // means i get the data property from the response
//     setCryptocoins(response.data.symbols);
//   }
//   search();
// }, []);

// console.log(cryptocoins);

// return (
//   <div>
//     {cryptocoins.map((cryptocoin) => (
//       <tbody>
//         <tr key={cryptocoin.symbol}>{cryptocoin.baseAsset}</tr>
//         <tr>{cryptocoin.baseAsset}</tr>
//       </tbody>
//     ))}
//   </div>
// );
