const commands = ["whoami", "linkedin", "github", "purpose", "bio", "commands", "repo", "coolart"];

function main() {
    let commandForm = document.getElementById("commandForm");
    commandForm.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let commandInput = document.getElementById("command");
    let userInput = commandInput.value.trim(); // Get the user input value and trim extra spaces
    console.log(isCommand(userInput));

    addToOutput(userInput + '\n'); // Add the command string to the output history

    switch (userInput) {
        case "whoami":
            displayWhoami();
            break;
        case "linkedin":
            displayLinkedin();
            break;
        case "github":
            displayGithub();
            break;
        case "purpose":
            displayPurpose();
            break;
        case "bio":
            displayBio();
            break;
        case "commands":
            displayCommands();
            break;
        case "repo":
            displayRepo();
            break;
        case "coolart":
            displayAsciiArt();
            break;
        case "hello":
            displayMessage("hello, world");
            break;
        case "":
            break;
        default:
            displayError(); // Notify the user if the entered command is not recognized
    }
    
    commandInput.value = ''; // Clear the input field after submitting the command

    // Move the input field to the bottom
    const terminalContainer = document.getElementById('terminalContainer');
    terminalContainer.appendChild(document.getElementById('textField'));
}


function addToOutput(command) {
    let outputField = document.getElementById("outputField");

    // Create a div for the command input
    let commandText = document.createElement("div");
    commandText.textContent = command; // Display the entered command

    // Create a span for the username part
    let usernameSpan = document.createElement("span");
    usernameSpan.textContent = "visitor@seb-dev ~ % ";
    usernameSpan.style.color = "rgb(174, 25, 223)"; // Purple color
    usernameSpan.style.fontWeight = "bold"; // Bold font weight
    usernameSpan.style.marginLeft = "0px"
    // Append the username and command input to the output field
    commandText.insertBefore(usernameSpan, commandText.firstChild); // Insert username before command text
    outputField.appendChild(commandText);

    let lineBreak = document.createElement("br"); // Create a line break
    outputField.appendChild(lineBreak);

    outputField.scrollTop = outputField.scrollHeight; // Scroll to the bottom to show the latest command/output
}


function isCommand(command) {
    return commands.includes(command);
}

document.addEventListener("DOMContentLoaded", main);
const commandInput = document.getElementById('command');
commandInput.focus();

