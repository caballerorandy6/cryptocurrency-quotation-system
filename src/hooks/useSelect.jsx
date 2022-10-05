import React from "react";

const useSelect = (label) => {
  const SelectCurrencies = () => (
    <>
      <label className="block font-white">{label}</label>
    </>
  );

  return [SelectCurrencies];
};

export default useSelect;
