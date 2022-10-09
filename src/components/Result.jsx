import React from "react";

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <div className="flex mx-auto w-3/5  justify-center items-center mt-10 text-white  gap-2 text-start ">
      <div className="w-1/3">
        <img
          className="w-44"
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="crypto image"
        />
      </div>
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
