let div = document.createElement("div");
document.body.appendChild(div);
// create a new xmlhttprequest object
let Result = new XMLHttpRequest();
// configure request
Result.open("GET", "https://restcountries.com/v3.1/all");
// send over the network
Result.send();
//status code or server code is 200
//onload is a event which will be fired once a data
//successfully loaded a data
Result.onload = function () {
  if (Result
.status == 200) {
    let users = JSON.parse(Result
    .response);
    //  console.log(users);
users.forEach(({name,flag}) => {
    let {common}=name;
 let p = document.createElement("p");
// p.innerHTML = `${index + 1} <b>${value.official}</b> : ${value.common}`;
console.log(`${common}: ${flag}`)
    });
  } else {
    console.log(Result
    .status);
  }
};