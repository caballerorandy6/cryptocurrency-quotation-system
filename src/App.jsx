import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Image from "./img/crypto.png";

function App() {
  return (
    <div>
      <Header />
      <div className="mx-auto flex w-5/6 justify-around items-center">
        <img src={Image} alt="image" className="w-1/3" />
        <div className="w-1/3">
          <Form />
        </div>
      </div>
      <div className="mx-auto text-center p-20">
        <p>Result</p>
      </div>
    </div>
  );
}

export default App;
