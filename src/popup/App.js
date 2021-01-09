import React from "react";

//Popup
chrome.runtime.sendMessage({
  command: "TEST_CONNECTION",
  payload: "secret_code_2032832323",
});

class App extends React.Component {
  componentDidMount() {
    chrome.runtime.sendMessage({
      command: "TEST_CONNECTION",
      payload: "secret_code_2032832323",
    });

    chrome.runtime.onMessage.addListener(incomingMessages);

    function incomingMessages(msg, sender) {
      // if (msg.subject === "TEST_CONNECTION") {
      //   console.log(msg.payload);
      // }
    }
  }

  render() {
    return <div className="ui container">NOOOOO</div>;
  }
}

export default App;
