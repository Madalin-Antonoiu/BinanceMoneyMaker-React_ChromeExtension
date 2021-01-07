import React, { useEffect } from "react";

const App = () => {
  //On Load
  useEffect(() => {
    console.log("HiyAAAAAAA");
  }, []);

  return <div>REALLY NOW?</div>;
};

export default App;
