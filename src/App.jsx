import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import Image from "./img/crypto.png";

function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const cryptoQuote = async () => {
        setLoading(true);

        const { coin, cryptocoin } = coins;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${cryptocoin}`;

        //console.log(url);

        const response = await fetch(url);
        const result = await response.json();

        setResult(result.DISPLAY[coin][cryptocoin]);
        setLoading(false);
      };
      cryptoQuote();
    }
  }, [coins]);

  return (
    <div>
      <Header />
      <div className="mx-auto flex w-5/6 justify-around items-center">
        <img src={Image} alt="image" className="w-1/3" />
        <div className="w-1/3">
          <Form setCoins={setCoins} />
        </div>
      </div>
      {loading && <Spinner />}
      {result.PRICE && <Result result={result} />}
    </div>
  );
}

export default App;
