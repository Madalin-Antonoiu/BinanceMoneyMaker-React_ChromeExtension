import React, { useEffect } from "react";
import binance from "./api/binance";

const QueryData = () => {
  useEffect(() => {
    onSearchSubmit();
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await binance.get("/time", {
      // params: {
      //   q: term,
      //   part: "snippet",
      //   maxResults: 5,
      //   type: "video",
      //   key: KEY
      // }
    });

    console.log(response);
  };

  return <div className="ui styled accordion">CALUTI</div>;
};

export default QueryData;
