// ==UserScript==
// @name         K's Goats
// @version      0.1
// @description  Increasing goatlings functionality
// @author       K
// @match        https://www.goatlings.com/*
// @icon         https://cdn.discordapp.com/attachments/573640364834029597/945280033239470080/favicon.png
// @grant         GM_deleteValue
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_info
// @grant         GM_xmlhttpRequest
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

var currentURL = window.location.href;
if (currentURL.startsWith('https://www.goatlings.com/shops/')) {
  var value = document.querySelector("#content > center > b:nth-child(8)").textContent;
  value = value.replace(',', '');
  value = parseFloat(value);
  var result = value * 0.8;
  var inputBox = document.querySelector("#content > center > form > input[type=text]:nth-child(2)");
  inputBox.value = result;
}
