// import {
//   spider,
//   createSpider,
//   variables,
// } from "../components/scraping/servicedesk_spider.js";

var isRunning,
  popupWindowId,
  savedTabId,
  spiderInterval,
  isOpen,
  info,
  solarWindsTabId,
  selectedId,
  selectionStartPosition,
  selectionEndPosition,
  textAreaContent = null;
var savedSwitchToTrendTab;

createPopup(); // add true for Minimized :)
// createSpider();

chrome.browserAction.onClicked.addListener((tab) =>
  isOpen ? focusPopup() : createPopup()
);

chrome.runtime.onMessage.addListener(incomingMessages);
chrome.tabs.onUpdated.addListener(tabsStatus());
chrome.windows.onRemoved.addListener((id) =>
  id == popupWindowId ? (isOpen = false) : null
);

function incomingMessages(msg, sender) {
  if (msg.subject === "TEST_CONNECTION") {
    console.log(msg.payload);
  }
}

function tabsStatus(savedTabId) {
  chrome.tabs.query({}, scrollIntoPosition);
  function scrollIntoPosition(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].id == savedTabId && tabs[i].status == "complete") {
        chrome.tabs.sendMessage(savedTabId, {
          from: "bg",
          subject: "scroll_to_position",
        });
      }
    }
  }
}

function createPopup(minimized = false) {
  return chrome.windows.create(
    {
      url: chrome.runtime.getURL("./popup.html"),
      type: "popup",
      focused: false,
      width: 420,
      height: 680,
      state: "normal",
    },
    function callback(data) {
      popupWindowId = data.id;
      isOpen = true;

      if (minimized == true) {
        let updateInfo = {
          state: "minimized",
        };

        chrome.windows.update(popupWindowId, updateInfo);
      }
    }
  );
}
function focusPopup() {
  chrome.windows.update(popupWindowId, {
    focused: true,
  });
}

/* DEV-START */
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    const { id } = tab;
    if (id) {
      chrome.tabs.reload(id);
    }
  });
});

window.addEventListener(
  "message",
  (msg) => {
    const { data } = msg;
    if (data && JSON.stringify(data).indexOf("webpackHotUpdate") > -1) {
      chrome.runtime.reload();
    }
  },
  false
);

console.log("Hi from here");
/* DEV-END */
