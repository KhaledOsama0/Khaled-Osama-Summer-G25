// task 1
// var arr=["Html","Css","Java"]
// var course=prompt("Enter your course")
// var idx=arr.findIndex( (ele,i)=>{return z == ele})

// if(idx==-1){
//     console.log("Not Founded")
//     arr.push(course)
//     console.log(arr)
// }
// else{
//     console.log("Founded")
// }


// task 2

// var arr2=
//   [
//   {
//     Fname:"Khaled",
//     Lname:"Osama",
//     Age:20
//   }
//   ,
//   {
//     Fname:"Basem",
//     Lname:"Mohamed",
//     Age:25
//   }
//   ,
//   {
//     Fname:"Amgad",
//     Lname:"Ali",
//     Age:30
//   }
//   ]
// var idx=arr2.findIndex((ele)=>(ele.Age==25))
// console.log(idx)

// task 3 (Bank system)

var users = [];
function addUser(){
    var id =prompt("Enter user id");
    var name = prompt("Enter Username");
    var balance =prompt("Enter Balance");
    users.push({ id, name, balance });
}
function editUserBalanceById(){
    var id =prompt("Enter User id you want Update His Balance");
    var newBalance = prompt("Enter New Balance");
    var user = users.find(user => user.id === id);
    if (user) {
        user.balance = newBalance;
    }}

    function deleteUserById() {
    var id =prompt("User You Want Delete")
    var index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
    } 
}


var count =prompt("How many Users You need input?");
for (var i = 0; i < count; i++) {
    addUser();
}
editUserBalanceById();
deleteUserById();

console.log(users);
