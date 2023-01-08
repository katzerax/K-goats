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

  // Remove the comma from the value
  value = value.replace(',', '');

  // Parse the value as a number
  value = parseFloat(value);

  // Multiply the value by 0.8
  var result = value * 0.8;

  // Find the input box
  var inputBox = document.querySelector("#content > center > form > input[type=text]:nth-child(2)");

  // Place the result in the input box
  inputBox.value = result;
}
if(currentURL.startsWith('https://www.goatlings.com/ss_mine')){ //I DONT KNOW IF THIS WORKS YET
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

if(currentURL.startsWith('https://www.goatlings.com/rps')){
// Find the element to insert the button under
var element = document.querySelector("#content > center:nth-child(4)");

// Create the button
var button = document.createElement('button');
button.innerHTML = '50 butterfly';

// Add an event listener to the button
button.addEventListener('click', function() {
  // Find the element to click
  var img = document.querySelector("#content > center:nth-child(4) > p:nth-child(6) > a:nth-child(1) > img");

  // Click the element
  img.click();

  // Refresh the page until the element selected by "#content > b" is "ERROR"
  var refreshInterval = setInterval(function() {
    if (document.querySelector("#content > b").textContent === "ERROR") {
      clearInterval(refreshInterval);
    } else {
      location.reload();
    }
  }, 1000);
});

// Insert the button under the element
element.appendChild(button);
}
if (currentURL.startsWith('https://www.goatlings.com/hol')) { //THIS CODE SUCKS
  // Find the element to insert the button next to
  var elementHOL = document.querySelector("#content > form > center > input[type=submit]");
  // Create the button
  var buttonHOL = document.createElement('button');
  buttonHOL.innerHTML = 'Autoplay until 3200';
  // Add an event listener to the button
  buttonHOL.addEventListener('click', function() {
    // Find the element with the number
    var numberElement = document.querySelector("#content > center > p:nth-child(1) > b");
    // Extract the number from the element
    var currentPot = parseInt(numberElement.textContent, 10);
    // If the number is less than 3200
    if (currentPot < 3200) {
      // Find the img element
      var img = document.querySelector("#content > center > p:nth-child(2) > img");

      // Get the src attribute of the img element
      var src = img.getAttribute('src');

      // Initialize a variable to hold the number
      var number2;

      // Use a regular expression to extract the number from the src attribute
      var regex = /\d+/;
      var match = regex.exec(src);
      if (match) {
        number2 = parseInt(match[0], 10);
      }

      // Find the submit button to click
      var submitButton;
      if (number2 > 7) {
        submitButton = document.querySelector("#content > center > form > input[type=submit]:nth-child(3)");
      } else {
        submitButton = document.querySelector("#content > center > form > input[type=submit]:nth-child(2)");
      }

      // Click the submit button
      submitButton.click();
    }
  });
}
