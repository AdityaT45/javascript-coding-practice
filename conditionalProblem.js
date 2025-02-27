//🟢🟢Write a program that checks if a number is even or odd.

// let num=23

// if(num%2===0){
//     console.log("number is even");
    
// }
// else{
//     console.log("number is odd");
    
// }
//🟢🟢Check Positive, Negative, or Zero

    // let num=0
    // if(num>0){
    //     console.log("number is positive");        
    // }
    // else if (num==0){
    //     console.log("number is zero");
    // }
    // else{
    //     console.log("number is negative");
        
    // }
//🟢🟢Write a program that takes two numbers and prints the largest one.
    // let num1=12
    // let num2=45

    // if(num1>num2){
    //     console.log(`${num1} is greateer than ${num2}`);
           
    // }
    // else{
    //     console.log(`${num2} is greateer than ${num1}`); 
    // }
//🟢🟢 Write a program to check if a given year is a leap year.
    // let year=2004
    // if(year%4===0 || year%400===0){
    //     console.log("year is leap year");
        
    // }
    // else{
    //     console.log("this year is not leap year");
        
    // }
//🟢🟢Given a score, print the grade:

// 90+ → "A"
// 80-89 → "B"
// 70-79 → "C"
// 60-69 → "D"
// Below 60 → "F"


// marks=89
// let grade=(marks>90 && marks<=100)?"A":(marks>80 && marks<90)? "B":(marks>70 && marks<80) ?"C" :"you are fail"
// console.log(grade);

// if(marks>=90 && marks<=100){
//     console.log("A");
    
// }
// else if(marks>=80 && marks<90){
//     console.log("b");
    
// }
// else if(marks>=70 && marks<80){
//     console.log("C");
    
// }
// else if(marks>=60 && marks<70){
//     console.log("D");
    
// }
// else if(marks>=0 && marks<60){
//     console.log("F");
    
// }
// else{
//     console.log("wrong number");
    
// }
//🟢🟢Write a program to check if a number is prime (only divisible by 1 and itself).

   

    // function isPrime(num){
    //     if(num<=1) return `number is invalid`;
    //     if(num===1) return true;
    //     if(num%2===0) return false;

    //         for(let i=3;i<=Math.sqrt(num);i+=2){
    //             if(num%i===0) return false
    //         }
    //         return true
    // }

    // let num=isPrime(-8)
    // console.log(num);
    

 
//🟢🟢Find the Largest of Three Numbers

// let num1=23
// let num2=33
// let num3=3


// let result=(num1 >=num2 && num1>= num3)? num1 :(num2>=num1 &&num2 >= num3) ? num2 :num3;
// console.log(result);
///////////////////////////////////diff style

    // if(num1>=num2 &&num1 >= num3){
    //     console.log("num1 is greater number");
        
    // }
    // else if(num2>=num1 &&num2 >= num3){
    //     console.log("num2 is greater number");
        
    // }
    // else{
    //     console.log("num 3 is greater number");
        
    // }

// 🟢🟢Convert Temperature (Celsius to Fahrenheit or Vice Versa)  If input is "C", convert to Fahrenheit.  If input is "F", convert to Celsius.

// temp=106
// unit="f"

// if(unit=="C" || unit =="c"){
//     let fahrenheit =(temp *9/5)+32
//     console.log(`temperature is ${fahrenheit} fahrenheit `);
    
// }
// else if(unit=="f" || unit =="F"){
//     let celcious =(temp -32)*5/9
//     console.log(`temperature is ${celcious} celcious `);
    
// }
// else{
//     console.log('Invalid unit! Please enter "C" for Celsius or "F" for Fahrenheit.');
    
// }
//🟢🟢 Write a program that checks if a given character is a vowel (a, e, i, o, u) or consonant.

// let char="o"

// let result=(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//     char === "A" || char === "E" || char === "I" || char === "O" || char === "U")? "char is vowel" :"char is  consonant"
// console.log(result);

//🟢🟢Check if a Triangle is Valid  Given three sides of a triangle, check if they form a valid triangle.

// let s1=3
// let s2=3
// let s3=3
    
// let result=(s1+s2>s3 && s2+s3>s1 && s1+s3>s2) ? "trangle is valid " :"trangle is invalid"

// console.log(result);


//🟢🟢check number is palindrom or not 

    // function isPalindron(num){
    //     let originalnum=num.toString()
    //     let revnum=originalnum.split("").reverse().join('')

    //     return (originalnum=== revnum)?` ${originalnum} is palindrom `:` ${originalnum} is not palindrom`
    // }

    // console.log(isPalindron(121))


//🟢🟢Check Login System
// function userLogin(uname,upass){


// const correctUsername ="aditya45"
// const correctPassword ="a123"

// return (uname===correctUsername  && correctPassword===upass)?"Login Successful ✅" :"Invalid Credentials ❌"
// }

// console.log(userLogin("aditya45","a123"));


//🟢🟢Ask for two numbers and an operator (+, -, *, /).     Perform the operation using switch-case.

// function calculator(n1,n2,o) {
//     let ans;
//     switch (o) {
//         case "+":
//            ans= n1+n2
//             break;
//         case "-":
//             ans= n1-n2
//             break;
//         case "/":
//             ans= n1/n2
//             break;
//         case "*":
//             ans= n1*n2
//             break;
//         default:
//             return "Error: Invalid operator"; 
           
//     }
//     return ans;
    
// }

// console.log(calculator(2,3,"*"));
// console.log(calculator(2,3,"/"));





//🟢🟢Find the Day of the Week       Take a number (1-7) and print the corresponding day.      xample: 1 → Monday, 2 → Tuesday, etc.


// function dayfind(numdayday){
//     let day;
//     switch(numdayday){
//         case 1:
//              day= "monday"
//             break;
//         case 2:
//              day="tuesday"
//             break;
//         case 3:
//             day="wednesday"
//             break;
//           default:
//            return "Error: Invalid operator"; 

//     }
//     return day;
// }
// console.log(dayfind(3));


//🟢🟢// Write a function that takes a number:

// If divisible by 3, return "Fizz"
// If divisible by 5, return "Buzz"
// If divisible by 3 and 5, return "FizzBuzz"
// If the number contains 3 (e.g., 13, 23), return "Almost Fizz"
// If the number contains 5 (e.g., 25, 52), return "Almost Buzz"
// Otherwise, return the number itself.


function findfb(num){
    if(num%3===0 && num%5===0){
        return "fizzbuzz"}
        if(num%3===0){
            return "fizz"
        }
        else if(num%5===0){
            return "buzz"
        }
       
        else if(num.toString().includes("3")){
            return "Almost fizz"
        }
        else if(num.toString().includes("5")){
            return "Almost fizz"
        }
    
    else{
        return num
    }

}

console.log(findfb(30));
