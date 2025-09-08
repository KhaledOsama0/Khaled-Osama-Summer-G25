// Java script session 12
// if statment
// var degree = prompt("enter your degree");

// if (degree == null || degree == '') console.log("Please enter your degree");
// else if (degree > 100) console.log("Invalid input");
// else 
//     if (degree <= 100 && degree >= 90) console.log("Your Degree is A");
//     else if (degree < 90 && degree >= 80) console.log("Your Degree is B");
//     else if (degree < 80 && degree >= 70) console.log("Your Degree is C");
//     else if (degree < 70 && degree >= 60) console.log("Your Degree is D");
//     else console.log("Failed");

// for loop
// for (var i = 0; i < 10; i++) {
//     var userName = prompt("enter your name")
//     if (userName == "khaled" || userName == "Khaled") {
//         alert("Welcome " + userName)
//         break
//     }
// }

// function
// function numbers(start_number, E_number, C_number, B_number) {
//     if (start_number == undefined || E_number == undefined || C_number == undefined || B_number == undefined) console.log("Please enter all numbers")
//     else 
//     {
//         for(var i=start_number;i<=E_number;i++)
//         {
//             if(i==C_number)
//             {
//                 continue
//             }
//             else if (i==B_number)
//             {
//                 break
//             }
//             console.log(i)
//         }
//     }
// }
// numbers(10,20,15,17)
// numbers(10,20,16)
// numbers(20,10)

// array
var names=["khaled","ahmed","mohamed","youssef"]
var userName=prompt("please enter your")
if (names.includes(userName))
{
    console.log("Founded")
}
else
{
    names.push(userName)
    console.log(names)
}