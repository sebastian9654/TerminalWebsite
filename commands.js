function displayCommands() {
    const outputField = document.getElementById("outputField");
    const commandsList = [
        `whoami:         ???`,
        `clear:          clears terminal window`,
        `pwd:            prints working directory (so linux)`,
        `ls:             lists all files currently serving.`,
        `lofi:           One of the best lofi albums in my personal opinion.`,
        `commands:       List all of the commands.`,
        `coolart:        Draw some cool ASCII art.`,
        `linkedin:       Display my LinkedIn profile.`,
        `github:         Link to my GitHub profile.`,
        `today:          Output today's date.`,
        `green:          LA FLAME!!!!!!!!!!!!!!!!.`,
        `purple:         STRAIGHT UP!!!!!!!!!!!!!!!!.`,
        `repo:           Link to the repo and source code of this project.`,
        `purpose:        Give you the purpose on why I made this project.`,
        `bio:            Tell you about the person who made this site...`
    ];

    commandsList.forEach(command => {
        const commandElement = createMessageElement("");
        outputField.appendChild(commandElement);
        outputField.appendChild(document.createElement("br"));
        typeText(command, commandElement, speed=4)
    });
}


function displayLyrics() {
    const outputField = document.getElementById("outputField");
    const lyricList = [
        "green and purple",
        "got me going in circles",
        "yeah it's after curfew",
        "she done snuck the work through",
        "yeah, it's controversial",
        "how we make the world move",
        "yeah, you said I heard you",
        "don't think I overheard you",
    ];

    lyricList.forEach(line => {
        const lyricElement = createMessageElement("");
        outputField.appendChild(lyricElement);
        outputField.appendChild(document.createElement("br"));
        typeText(line, lyricElement, speed=4)
    });
}

function displayOtherLyrics() {
    const outputField = document.getElementById("outputField");
    const lyricList = [
        "I can go do bout a hundred of these",
        "All my fruits bloody like Applebees",
        "Cannot be tamed, yeah, I had to go",
        "Call me up Semi right up the road",
        "I been up leanin' for nine days",
        "I ain't been sleepin' like five days",
        "Night in the shuttle, we're cold as hell",
        "YOU WANT US TO WIN, I CAN'T EVER TELL",
        "In the inside, I dropped this",
        "Look at the sky for ideas",
        "Astroworld time, it's timeless",
        "In the back of my mind, it's reminds us",
        "They don't want time, I'm beastin'",
        "Hit him with time feel like me",
        "Overly hooked up to IV",
    ];

    lyricList.forEach(line => {
        const lyricElement = createMessageElement("");
        outputField.appendChild(lyricElement);
        outputField.appendChild(document.createElement("br"));
        typeText(line, lyricElement, speed=4)
    });
}


function displayToday() { 
    const outputField  = document.getElementById("outputField");
    const helpElement = createMessageElement("");

    let today = new Date();
    let yyyy = today.getFullYear();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    date = mm + '/' + dd + '/' + yyyy;
    
    console.log(date);
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));  
    typeText("Today's date is " + date, helpElement, speed=5);
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
        const asciiElement = createMessageElement("");
        outputField.appendChild(asciiElement);
        outputField.appendChild(document.createElement("br"));
        typeText(line, asciiElement, speed = 2);
    });
}


function displayMessage(message) {
    const outputField  = document.getElementById("outputField");
    const helpElement = createMessageElement("");
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
        const purposeElement = createMessageElement("");
        outputField.appendChild(purposeElement);
        outputField.appendChild(document.createElement("br"));
        typeText(element, purposeElement, speed=4)
    });
}


function displayBio() {
    const outputField  = document.getElementById("outputField");
    const bio = [`Hello, I'm seb, a dedicated Computer Science student at Georgia State University, 
concurrently gaining practical experience as a Software Engineering Intern at
Intercontinental Exchange (ICE / NYSE). `,
`I love using programming and tech to solve
real-world problems and continuously expand my skills in the field of software
development.`,
    ];

    bio.forEach(element => {
        const bioElement = createMessageElement("");
        outputField.appendChild(bioElement);
        outputField.appendChild(document.createElement("br"));
        typeText(element, bioElement, speed=4)
    });

}

function displayError() {
    const outputField  = document.getElementById("outputField");
    const error = "Invalid command! For a list of commands, enter 'commands'.";
    const helpElement = createMessageElement("");
    outputField.appendChild(helpElement);
    outputField.appendChild(document.createElement("br"));  
    typeText(error, helpElement);
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('output-message');
    messageElement.style.marginLeft = "30px"
    messageElement.innerHTML = message;

    return messageElement;
}
