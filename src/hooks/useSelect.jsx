import { useState } from "react";

const useSelect = (label, coins) => {
  const [state, setState] = useState("");

  const SelectCurrencies = () => (
    <>
      <label className="block text-white font-bold mb-2">{label}</label>
      <select
        className="p-2 w-full text-center rounded-md mb-4 bg-blue-200"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Select</option>

        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectCurrencies];
};

export default useSelect;
