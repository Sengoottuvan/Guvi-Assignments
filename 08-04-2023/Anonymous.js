// a.Print the odd numbers in an array
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let oddnumber =function(array){
    let temp=[];
  for (let i of array){
    if(i%2!=0){
        temp.push(i);
    }
  }
  return temp;
}
console.log(oddnumber(array));

// b.Convert all the String to title caps in a String array
let Titlecase=function(String) {
    String = String.toLowerCase().split(' ');
    for (let i in String) {
        String[i] = String[i].charAt(0).toUpperCase() + String[i].slice(1);
    }
    return String.join(' ');
    }
    console.log(Titlecase("hello all welcome to guvi zen class"));

//c.Sum of all the numbers in an array
let sum=function(arr){
    let sum=0
    for(let i of arr){
        sum+=i;
    }
    return sum;
}
console.log(sum(array));

//d.Return all the prime numbers in an array
let PrimeNumber=function(array){
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
   return prime;
}
console.log(PrimeNumber(array));

//e.Return all the palindromes in an array
let Palindromearray = ["dad","mom","Madam","karthi","143","454","wow","racecar","surya","Bob"];
let palindrome = [];
let Palindromeconvert=function(array){
   for(let i=0;i<array.length;i++){
      let realarray = array[i].toLowerCase(); //-->Original String(realarray)
      let Reversedarray = array[i].split("").reverse().join("").toLowerCase(); //-->Reverse String(RS)
      if(realarray==Reversedarray){
         palindrome.push(array[i]);
      }
   }
   return palindrome;
   }
   console.log(Palindromeconvert(Palindromearray));

   //f.Return median of two sorted arrays of the same size
   let median1 = [1,111,24,38,93,87,52,44,36,68,61];
   let median2 = [202,76,65,501,41,46,46,4,5,98,25];
   let median = function(median1,median2){
     let arr = [...median1,...median2].sort(function(a,b){
        return a-b
    });
     if(arr.length%2==0){
       let mid1 = arr[arr.length/2];
       let mid2 = arr[arr.length/2-1];
       return((mid1+mid2)/2); 
     }
     else{
       return (arr[Math.floor(arr.length/2)]);
     }
   };
   console.log(median(median1,median2)) 

//g. Remove duplicates from an array
let duplicatearray=[1,6,4,2,2,8,98,32,98,25,61,61];

let OriginalArray=function(duplicatearray){
    let temp=[];
  for(let i=0;i<duplicatearray.length;i++){
    let count=0;
    for(let j=0;j<duplicatearray.length;j++){
      if(duplicatearray[i]==duplicatearray[j]){
        count++;
      }
    }
    if(count<=1){
       temp.push(duplicatearray[i]);
    }
  }
  return(temp);  
};
console.log(OriginalArray(duplicatearray));

//h.Rotate an array by k times

let rotateArray = function(number, k) {

    for (let i = 0; i < k; i++) {
        number.unshift(number.pop());
    }
  
    return number;
}
console.log(rotateArray([1,2,3,4,5,6,7,8,9,10],2));