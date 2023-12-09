commands = ["whoami",
    "help", "linkedin", "github", "purpose", "bio"];

function main(){
    let command = document.getElementById("command");
    console.log(is_command(command));
}


function is_command(command) {
    return commands.includes(command);
}


