const commands = ["whoami", "help", "linkedin", "github", "purpose", "bio"];

function main() {
    let commandForm = document.getElementById("commandForm");
    commandForm.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let commandInput = document.getElementById("command");
    let userInput = commandInput.value.trim(); // Get the user input value and trim extra spaces
    console.log(isCommand(userInput));
    
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
        case "help":
            displayHelp();
            break;
        default:
            alert("Invalid command!"); // Notify the user if the entered command is not recognized
    }
}

function isCommand(command) {
    return commands.includes(command);
}

document.addEventListener("DOMContentLoaded", main);
