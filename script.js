function main() {
    let commandForm = document.getElementById("commandForm");
    commandForm.addEventListener("submit", handleFormSubmit);
}

let pastCommands = []

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let commandInput = document.getElementById("command");
    let userInput = commandInput.value.trim(); // Get the user input value and trim extra spaces\

    pastCommands.push(userInput)
    addToOutput(userInput + '\n'); // Add the command string to the output history

    switch (userInput) {
        case "whoami":
            displayMessage("I don't know the answer to that question, let me ask ChatGPT...");
            break;
        case "linkedin":
            displayMessage("Visit my LinkedIn profile: https://www.linkedin.com/in/rodriguezseba2001/");
            break;
        case "github":
            displayMessage("Visit my GitHub profile: https://github.com/sebastian9654");
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
        case "green":
            displayLyrics();
            break;
        case "purple":
            displayOtherLyrics();
            break;
        case "repo":
            displayMessage("View the repository & source code for this site!: https://github.com/sebastian9654/TerminalWebsite");
            break;
        case "coolart":
            displayAsciiArt();
            break;
        case "hello":
            displayMessage("hello, world");
            break;
        case "clear":
            clearWindow();
            break;
        case "lofi":
            displayMessage("Best lofi album: https://open.spotify.com/album/3w91SrHEJZK65ajegmqv3V");
            break;
        case "pwd":
            displayMessage("/root/usr/dev/~")
            break;
        case "ls":
            displayMessage("/projects/on-my-github page! 😎")
            break;
        case "today":
            displayToday();
            break;
        case "":
            displayMessage("Please enter a command.")
            break;
        default:
            displayError(); // Notify the user if the entered command is not recognized
    }
    commandInput.value = ''; // Clear the input field after submitting the command
}

function clearWindow() {
    const op = document.getElementById("outputField");
    op.innerHTML = ""
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


  