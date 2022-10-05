import React from "react";
import useSelect from "../hooks/useSelect";

const Form = () => {
  const [SelectCurrencies] = useSelect("Select your currency");

  return (
    <form>
      <h1 className="text-center mb-1 text-3xl text-white uppercase font-bold">
        Instant cryptocurrency trading
      </h1>
      <div className="after:content-[''] bg-gray-800 p-0.5 mb-10 w-1/4 mx-auto"></div>

      <SelectCurrencies />

      <input
        type="submit"
        value="submit"
        className="bg-gray-800 hover:bg-gray-900 transition-colors text-white font-bold p-2 w-full block rounded-lg uppercase cursor-pointer"
      />
    </form>
  );
};

export default Form;
