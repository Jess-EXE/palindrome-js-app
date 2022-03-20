// Retrieve user input
// Controller function
function getString() {

    
    // Alert box is hidden
    document.getElementById("alert").classList.add("invisible");

    // Get user string from page
    let userInput = document.getElementById("userString").value;

    if (userInput == "") {
        alert("You did not enter a string");
    } else {

            // Check for a palindrome
    let returnObj = checkForPalindrome(userInput);

    // Display message to user
    displayMessage(returnObj);

    }
    
}

// Check if string is a palindrome
function checkForPalindrome(userInput) {

    // Make all letters lowercase
    userInput = userInput.toLowerCase();

    // Remove all special characters
    let regex = /[^a-z0-9]/gi;
    userInput = userInput.replace(regex, "");

    // Reverse the string
    let reversedString = [];

    let returnObj = {};

    for (let i = userInput.length - 1; i >=0; i--) {

        reversedString += userInput[i];

    }
    
    // Add  correct msg and reversed properties to returnObj object
    if (reversedString == userInput) {

        returnObj.msg = "Well done, You have entered a palindrome!"

    } else {

        returnObj.msg = "Sorry, you did not enter a palindrome!"

    }

    returnObj.reversed = reversedString;

    return returnObj;
}

// Display message to user
function displayMessage(returnObj) {

    document.getElementById("result").innerHTML = returnObj.msg;

    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    document.getElementById("alert").classList.remove("invisible");

}