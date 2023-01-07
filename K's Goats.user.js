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

// Get the current URL of the page
var currentURL = window.location.href;

if (currentURL.startsWith('https://www.goatlings.com/shops/')) {
  // Find the value on the page
  var value = document.querySelector("#content > center > b:nth-child(8)").textContent;
  var result = value * 0.8;
  var inputBox = document.querySelector("#content > center > form > input[type=text]:nth-child(2)");
  inputBox.value = result;
}
else if(currentURL.startsWith('https://www.goatlings.com/ss_mine')){ //I DONT KNOW IF THIS WORKS YET
  // Find all the elements on the page that contain numbers
  var elements = document.querySelectorAll('.ss-area');
  var numbers = [];
  elements.forEach(function(element) {
    numbers.push(parseInt(element.textContent, 10));
  });

// Find the highest number
  var maxNumber = Math.max.apply(null, numbers);

// Find the element that contains the highest number
  var maxElement;
  elements.forEach(function(element) {
    if (parseInt(element.textContent, 10) === maxNumber) {
      maxElement = element;
    }
  });

// Find the img element above the element
  var img = maxElement.previousElementSibling;

// Click the img element
  img.click();
}
