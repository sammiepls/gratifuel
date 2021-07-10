export {};

chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled...");
  // create alarm after extension is installed / upgraded
  chrome.alarms.create("refresh", { periodInMinutes: 3 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm.name); // refresh
  sendGratifuel();
});

function sendGratifuel() {
  chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    console.log(response.farewell);
  });
}
