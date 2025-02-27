//🟢🟢function problem to solve
////🟢1🟢 Write a function to check if a number is even or odd.

// function iseven(num){
//     return num%2===0
// }

// console.log(iseven(12))

//👇👇Arrow Function Version

// let iseven=(num)=>{
//     return num%2===0
// }
// console.log(iseven(13));


//👇👇anonymous function

// let isodd=function(num){
//     return num%2!==0
// }
// console.log(isodd(13));


//👇👇ifee - intermidiately invoked function expression

// (function(num){
//     if(num%2===0){
//         console.log("number is even");
//     }
//     else{
//         console.log("number is odd");
        
//     }
// })(12);


//👇👇higher order function

// function isEven(check){
//     function check(num){
//         return num %2===0
//     }
// }



//🟢🟢Write a function to find the maximum of two numbers.

//👇👇annynymous function

// let maxnum=function(x,y){
//     return x>y ?x:y;
// }

// console.log(maxnum(12,42));


//👇👇iife imadiatly invoke function expression

// (function(num1,num2){
//     num1>num2?console.log("num1 is greater"):console.log("num2 is greater");
    
    
// })(123,32)

//🟢🟢 Write a function to calculate the factorial of a number.


// function checkFactorial(num) {
//     let result=1

//     for(let i=num;i>0;i--){
//         result*=i
//     }
//     return result;
    
// }
// console.log(checkFactorial(5));



//🟢🟢Write a function that returns the sum of all numbers in an array.

// function checkSpesificElemet(arr,check){
//     return arr.includes(check)
// }

// console.log(checkSpesificElemet([1,2,3,1,4,2],5));



////🟢🟢Write a function that counts the number of vowels in a string


// function countVovels(str){
//     let result=0
//     for(let i=0;i<str.length;i++){
//         char=str[i]
//         if(char==="a" || char==="e"|| char==="i" ||char==="o" ||char==="u"){
//             result++
//         }
//     }
//     console.log(result);
// }
// countVovels("aditya")

//🟢🟢second largest number in array
// let secondlargestNum=(arr)=>{
//     return arr.sort((a,b)=>b-a)[1]
// }

// console.log(secondlargestNum([3,5,3,4,5,6,7,8]));


//🟢🟢Write a function that removes duplicates from an array


// let removeDuplicates=function(arr){
//     return [...new Set(arr)]
// }   

// let result=removeDuplicates([1,2,4,2,4,1,4,56,2,4,2])
// console.log(result);


//🟢🟢Write a function that returns the intersection of two arrays.

// function intersection(arr1,arr2){

//     return arr1.filter(ele=>arr2.includes(ele))
// }
// console.log(intersection([1,2,3,4,5],[3,4,6]));


//🟢🟢Write a function that capitalizes the first letter of each word in a sentence.

// function capitalizeWords(str){
//     return str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
// }

// console.log(capitalizeWords("aditya  todmal is good"));


//🟢🟢 Write a function that flattens a nested array.


// function flatten(arr){
//     return arr.reduce((acc,curr)=>acc.concat(Array.isArray(curr)? flatten(curr):curr),[])
// }
// let arr=[1, [2, [3, 4]], 5]
// console.log(flatten(arr));



// let flattena=function(arr){
//     return arr.reduce((acc,curr)=> acc.concat(Array.isArray(curr)?flattena(curr):curr) ,[])
// }
// console.log(flattena([1, [2, [3, 4]], 5]));




//🟢🟢missingNumber([1, 2, 4, 5, 6]) 


// function missingNumber(arr) {

//   for (let i=0;i<=arr.length-1;i++){
//     if(arr[i]+1 !== arr[i +1]){
//         return arr[i+1]
//     }
//   }
//   return `no missing number`

// }

// console.log(missingNumber([1, 2, 4, 5, 6]));


//🟢🟢Create an IIFE that calculates the factorial of a number (Example: 5!).


// (function(num){
//     let result=1
//     for(let i=num;i>0;i--){
//         result *=i
//     }
    
//     console.log(result);
// }
// )(5)


//🟢🟢Write an IIFE that generates a random number between 1 and 100


// (function(){
//     let randomNum=Math.floor(Math.random()* 1000000)
//     console.log(randomNum);
//     let result=randomNum.toString().split("").reduce((acc,curr)=>acc+=Number(curr),0)
//     console.log(result);
    
    
// })()


//🟢🟢 Write an IIFE that counts the number of vowels in a given string. 


// (function(str){
//     let vovels="aeiouAEIOU"
//     let count=0;
//     let result= str.split("").filter(ele=>vovels.includes(ele) )
//     console.log(result.length);
    

// })("OpenAi")