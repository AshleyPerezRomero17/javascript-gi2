// Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month.
//  For example: if the user enters the number 3, then it should return the month “March.” 
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


function findMonth() {
    var userNumber = prompt("enter a number 1-12");

    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (!isNaN(userNumber) && (Number(userNumber) < 12) && (Number(userNumber) > 1)) {
        return console.log("Medium Challenge: Number = " + userNumber + " , Month = " + months[userNumber - 1]);
    } else {
        return alert('Please enter a valid number, (e.g. less than 1 or greater than 12)')
    }
}


findMonth();