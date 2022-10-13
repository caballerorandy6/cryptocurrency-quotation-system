import React from "react";

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <div className="md:flex mx-auto w-3/5 gap-28  md:justify-center md:items-center mt-14 text-white text-start ">
      <img
        className="w-44"
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="crypto image"
      />

      <div className="w-2/3">
        <p className="text-3xl font-bold">
          The price is: <span className="text-yellow-500">{PRICE}</span>
        </p>
        <p className="text-2xl font-semibold">
          Highest price of the day:{" "}
          <span className="text-yellow-500">{HIGHDAY}</span>
        </p>
        <p className="text-xl font-semibold">
          Lowest price of the day:{" "}
          <span className="text-yellow-500">{LOWDAY}</span>
        </p>
        <p>
          Change last 24 hours:{" "}
          <span className="text-yellow-500 font-semibold">
            {CHANGEPCT24HOUR}
          </span>
        </p>
        <p>
          Last update:{" "}
          <span className="text-yellow-500 font-semibold">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
