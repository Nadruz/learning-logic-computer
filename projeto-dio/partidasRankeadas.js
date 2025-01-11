let nicknamePlayer = "Nadruzxx"; 

function calcMatches(victories, defeats) {
    let balance = victories - defeats;
    return balance;
}

let victories = 64;
let defeats = 33;
let classification = "";
if (victories < 10) {
    classification = "Iron";
} else if (victories >= 11 && victories <=20) {
    classification = "Bronze";
} else if (victories >= 21 && victories <= 50) {
    classification = "Silver";
} else if (victories >= 51 && victories <= 80){
    classification = "Golden";
} else if (victories >= 81 && victories <= 90){
    classification = "Diamond";
} else if (victories >= 91 && victories <= 100){
    classification = "Legendary";
} else if (victories <= 101){
    classification = "Imortal";
} 

let result = calcMatches (victories, defeats);
    console.log(result);
    console.log(`The Player ${nicknamePlayer} has a balance of ${victories} victories and is at the level ${classification}`);