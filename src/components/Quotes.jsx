import React, { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");
  const api = "https://api.adviceslip.com/advice";
  const fetchQuote = async () => {
    return await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        const dataObj = data.slip;
        setQuote(dataObj);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchQuote();

    const interval = setInterval(fetchQuote, 10 * 60 * 1000); // 10 minutes in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="text-center text-3xl space-y-5">
      <p className="font-bold mb-10">Word of advice 😃:</p>
      <i className="text-gray-300">"{quote.advice}"</i>
    </div>
  );
}

export default Quotes;
