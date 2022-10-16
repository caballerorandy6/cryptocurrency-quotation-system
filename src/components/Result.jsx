import React from "react";

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  console.log(IMAGEURL);

  return (
    <div className="container mb-6 text-center mx-auto md:flex  w-3/5 gap-28  md:justify-center md:items-center mt-6  text-white md:text-start">
      {/* <img
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="crypto crypto"
        className="container mx-auto block mb-6"
      /> */}

      <div className="container mx-auto w-2/3">
        <p className="text-xl md:text-3xl font-bold">
          The price is: <span className="text-yellow-500">{PRICE}</span>
        </p>
        <p className="text-md md:text-2xl font-semibold">
          Highest price of the day:{" "}
          <span className="text-yellow-500">{HIGHDAY}</span>
        </p>
        <p className="text-md font-semibold">
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
