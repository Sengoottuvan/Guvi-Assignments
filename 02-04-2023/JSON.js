let Object1={name:"Person 1",age:5};
let Object2={age:5,name:"Person 1"};
let Compare=JSON.stringify(Object1)===JSON.stringify(Object2)



console.log(Compare)