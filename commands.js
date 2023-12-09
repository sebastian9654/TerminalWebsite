function displayCommands() {
    const outputField = document.getElementById("outputField");
    const commandsList = [
        `whoami:         Display visitor number.`,
        `commands:       List all of the commands.`,
        `coolart:        Display cool ASCII art.`,
        `linkedin:       Display my LinkedIn profile.`,
        `github:         Link to my GitHub profile.`,
        `repo:           Link to the repo and source code of this project.`,
        `purpose:        Give you the purpose on why I made this project.`,
        `bio:            Tell you about the person who made this site...`
    ];

    commandsList.forEach(command => {
        const commandElement = createMessageElement(" ");
        outputField.appendChild(commandElement);
        outputField.appendChild(document.createElement("br"));
        typeText(command, commandElement, speed=4)
    });
}

function displayWhoami() {
    const outputField  = document.getElementById("outputField");
    const visitorMessage = "You are visitor #1, welcome!";
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));  
    typeText(visitorMessage, helpElement, speed=5);
}

function displayAsciiArt() {
    const outputField = document.getElementById("outputField");
    const asciiArt = `
              _______________________________________________
            /                                                 \\
           |    _________________________________________     |
           |   |  seb@terminal:~$ _                      |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |_________________________________________|    |
           |                                                  |
            \\_________________________________________________/
                   \\___________________________________/
                ___________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- \`-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.\`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\`__\`. .-.-.-.\`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.\`-_
 _-'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.\`-_
:-------------------------------------------------------------------------:
\`---._.-------------------------------------------------------------._.---'
`;

    const asciiArtLines = asciiArt.split('\n');
    
    asciiArtLines.forEach(line => {
        const asciiElement = createMessageElement(" ");
        outputField.appendChild(asciiElement);
        outputField.appendChild(document.createElement("br"));
        typeText(line, asciiElement, speed = 2);
    });
}

function displayLinkedin() {
    const outputField  = document.getElementById("outputField");
    const linkedIn = "Visit my LinkedIn profile: https://www.linkedin.com/in/rodriguezseba2001/";
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));  
    typeText(linkedIn, helpElement, speed=5);
}

function displayGithub() {
    const outputField  = document.getElementById("outputField");
    const github = "Visit my GitHub profile: https://github.com/sebastian9654";
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));  
    typeText(github, helpElement);
}


function displayRepo() {
    const outputField  = document.getElementById("outputField");
    const repo = "View the repository and source code for this project!: https://github.com/sebastian9654/TerminalWebsite";
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);    
    outputField.appendChild(document.createElement("br"));  
    typeText(repo, helpElement);
}

function displayMessage(message) {
    const outputField  = document.getElementById("outputField");
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);    
    outputField.appendChild(document.createElement("br"));  
    typeText(message, helpElement);
}

function displayPurpose() {
    const outputField  = document.getElementById("outputField");
    const purposeList = [
    `I made this website because I really like using Command Line Interfaces, especially those on Linux or macOS where the default shell is Bash/Zshell.`,

    `Additionally I wanted to get more experience using Frontend Web Development technologies including HTML5, CSS3, and just Vanilla JavaScript for now.`,

    `I also saw this really cool video by ForrestKnight where he also created something like this. I hope whoever uses this realy feels like they are using a CLI terminal, as that was the goal, with a little bit of exaggerated colors for the 21st century.`,
    ];

    purposeList.forEach(element => {
        const purposeElement = createMessageElement(" ");
        outputField.appendChild(purposeElement);
        outputField.appendChild(document.createElement("br"));
        typeText(element, purposeElement, speed=4)
    });
}


function displayBio() {
    const outputField  = document.getElementById("outputField");
    const bio = 
    `Hello, I'm seb, a dedicated Computer Science student at Georgia State University, 
    concurrently gaining practical experience as a Software Engineering Intern at
    Intercontinental Exchange (ICE / NYSE). I love using programming and tech to solve
    real-world problems and continuously expand my skills in the field of software
    development.`
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));
    typeText(bio, helpElement, speed = 10);

}

function displayError() {
    const outputField  = document.getElementById("outputField");
    const error = "Invalid command! For a list of commands, enter 'commands'.";
    const helpElement = createMessageElement(" ");
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));  
    typeText(error, helpElement);
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('output-message');
    messageElement.style.marginLeft = "30px"
    messageElement.innerHTML = message; // Use innerHTML to parse HTML tags

    return messageElement;
}
