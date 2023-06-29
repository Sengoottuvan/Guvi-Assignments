// a.Print the odd numbers in an array
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let oddnumber=(array)=>{
    let temp=[];
  for (let i of array){
    if(i%2!=0){
        temp.push(i);
    }
  }
  console.log (temp);
}
oddnumber(array);

// b.Convert all the String to title caps in a String array
let Titlecase=(String)=>{
    String = String.toLowerCase().split(' ');
    for (let i in String) {
        String[i] = String[i].charAt(0).toUpperCase() + String[i].slice(1);
    }
    console.log (String.join(' '));
    }
    Titlecase("hello all welcome to guvi zen class");

//c.Sum of all the numbers in an array
let sum=(arr)=>{
    let sum=0
    for(let i of arr){
        sum+=i;
    }
    console.log (sum);
}
sum(array);

//d.Return all the prime numbers in an array
let PrimeNumber=(array)=>{
    let prime = [];
    for(let i=0;i<array.length;i++){
        let count=0;
    for(let j=2;j<=array[i];j++){
      if(array[i]%j==0) {
          count++
      }
    }
      if(count<2){
            prime.push(array[i]);
      }
    }
   console.log (prime);
}
PrimeNumber(array);

//e.Return all the palindromes in an array
let Palindromearray = ["dad","mom","Madam","karthi","143","454","wow","racecar","surya","Bob"];
let palindrome = [];
let Palindromeconvert=(array)=>{
   for(let i=0;i<array.length;i++){
      let realarray = array[i].toLowerCase(); //-->Original String(realarray)
      let Reversedarray = array[i].split("").reverse().join("").toLowerCase(); //-->Reverse String(RS)
      if(realarray==Reversedarray){
         palindrome.push(array[i]);
      }
   }
   console.log (palindrome);
   }
Palindromeconvert(Palindromearray);