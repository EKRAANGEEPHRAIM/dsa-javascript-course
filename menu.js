let readline = require("readline-sync")

let menu = "1/ add a player\n";
menu += "2/ Modify a player\n";
menu += "3/ Delete a player"



let action = readline.questionInt( "What is your pick")


switch(action) {
    case 1 : console.log("You  selected one player")
    break;
    case 2 : console.log("you selected to modify a player ")
    break;
    case 3 : console.log("You selected the deleting player")
    break;
    default : console.log('not treated')
}