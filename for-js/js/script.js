
// var degree = prompt("enter your degree");

// if (degree == null || degree == '') console.log("Please enter your degree");
// else if (degree > 100) console.log("Invalid input");
// else 
//     if (degree <= 100 && degree >= 90) console.log("Your Degree is A");
//     else if (degree < 90 && degree >= 80) console.log("Your Degree is B");
//     else if (degree < 80 && degree >= 70) console.log("Your Degree is C");
//     else if (degree < 70 && degree >= 60) console.log("Your Degree is D");
//     else console.log("Failed");

for (var i = 0; i < 10; i++) {
    var userName = prompt("enter your name")
    if (userName == "khaled" || userName == "Khaled") {
        alert("Welcome " + userName)
        break
    }
}