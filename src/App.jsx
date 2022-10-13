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
        setResult({});
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
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="lg:flex">
        <img
          src={Image}
          alt="image"
          className="w-6/12 sm:w-6/12 md:w-6/12 lg:w-5/12 mx-auto "
        />
        <div className="w-6/12 text-center mx-auto sm:w-4/12 md:w-3/12 lg:w-1/5 mt-10">
          <Form setCoins={setCoins} />
        </div>
      </div>
      {loading && <Spinner />}
      {result.PRICE && <Result result={result} />}
    </div>
  );
}

export default App;
