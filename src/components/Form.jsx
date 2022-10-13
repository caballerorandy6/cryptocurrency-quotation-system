import { useState, useEffect } from "react";
import useSelect from "../hooks/useSelect";
import Error from "./Error";
import { coins } from "../data/coins";

const Form = ({ setCoins }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [coin, SelectCurrencies] = useSelect("Select your currency", coins);
  const [cryptocoin, SelectCryptoCurrencies] = useSelect(
    "Select your cripto currency",
    cryptos
  );

  useEffect(() => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD`;

    const consultApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      //console.log(result.Data);

      const cryptoArray = result.Data.map((crypto) => {
        const cryptoObject = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };

        return cryptoObject;
      });

      setCryptos(cryptoArray);
    };
    consultApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, cryptocoin].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    setCoins({ coin, cryptocoin });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center mb-1 text-xl sm:text-2xl md:3xl text-white uppercase font-bold">
        Instant cryptocurrency trading
      </h1>

      <div className="after:content-[''] bg-white p-0.5 mb-6 w-1/4 mx-auto"></div>

      {error && (
        <Error>
          <p>All field are required!</p>
        </Error>
      )}

      <SelectCurrencies />
      <SelectCryptoCurrencies />

      <input
        type="submit"
        value="submit"
        className="lg:4-12 bg-blue-700 hover:bg-blue-800 transition-colors text-white font-bold p-2 w-full block uppercase cursor-pointer"
      />
    </form>
  );
};

export default Form;
