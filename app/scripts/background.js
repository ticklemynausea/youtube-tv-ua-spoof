const SPOOFED_UA = "Mozilla/5.0 (SMART-TV; Linux; Tizen 4.0.0.2) AppleWebkit/605.1.15 (KHTML, like Gecko) SamsungBrowser/9.2 TV Safari/605.1.15";

const callback = (details) => ({
  requestHeaders: details.requestHeaders.map((header) => ({
    name: header.name,
    value: header.name === "User-Agent" ? SPOOFED_UA : header.value,
  })),
});

const requestFilter = { urls: ["https://www.youtube.com/tv*"] };

chrome.webRequest.onBeforeSendHeaders.addListener(callback, requestFilter, ["blocking", "requestHeaders"]);
