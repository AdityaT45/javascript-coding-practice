//❤️❤️🟢🟢arrow function 

// let  add=(a, b)=> {
//     return a + b;
// }


//🟢🟢Write an arrow function that returns the square of a number.

// let square=(n)=>{
//     return `afsvfd
//     asdsfd
//     asd
//     as`

// }
// console.log(square(4));



//❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🟢🟢Basic Array Destructuring


//🟢🟢`Extract first and second color into variables

// const colors = ["red", "green", "blue"];

// const[firstColor,...rest]=colors

// console.log(...rest);




//🟢🟢Extract first and third number, skipping the second

// const numbers = [10, 20, 30, 40, 50];

// let  [first,,third]=numbers

// console.log(first);
// console.log(third);


//🟢🟢 Extract the first two fruits into variables and put the remaining fruits in another variable

// const fruits = ["apple", "banana", "cherry", "date"];
// let [first,second,...rest]=fruits

// console.log(first);
// console.log(second);
// console.log(rest);



//🟢🟢 Extract first and second item, provide a default value for the second item


// const items = ["pen"];

// let [first,second="notebook"]=items

// console.log(second);


//🟢🟢Extract name and age into separate variables


// const person = { name: "John", age: 30, city: "New York" };


// let {name,age}=person

// console.log(name);
// console.log(age );


//🟢🟢Extract city into a separate variable

// const company = { 
//     name: "Tech Corp", 
//     location: { city: "San Francisco", country: "USA" } 
//   };

// let {location:{city}}  =company
// console.log(city);


//🟢🟢Extract username as "userName" and email as "userEmail"
// const user = { username: "aditya", email: "aditya@example.com" };

// let { username:Uname, email:uEmail} = user;

// console.log(Uname);  // "aditya"
// console.log(uEmail);  // "aditya"


//🟢🟢Modify the function to extract title and author directly in the parameter list.

// function display({ title, author }) {
//     console.log(title);
//     console.log(author);
    
//   }
  
//   const book = { title: "JavaScript Basics", author: "John Doe" };
//   display(book);

//🟢🟢 Extract "a" and "b", and put the rest in another object

// const numbers = { a: 1, b: 2, c: 3, d: 4 };

// let {a:aditya,b:ganesh,...rest}=numbers

// console.log(aditya);
// console.log(ganesh);
// console.log(rest);


//🟢🟢Call the function and extract the first two values

// function getValues() {
//     return [100, 200, 300];
//   }

// let [first,second]=getValues()
// console.log(first);
// console.log(second);



//🟢🟢  // Extract name, email, and city using destructuring

// const user = {
//     id: 101,
//     name: "Aditya",
//     details: {
//       email: "aditya@example.com",
//       address: { city: "Pune", pincode: 411001 }
//     }
//   };
  
// let {name,details:{email},details:{address:{city}}}=user

// console.log(name);
// console.log(email);
// console.log(city);



//🟢🟢  // Extract:     // - companyName   // - First employee's name & first skill    // - Second employee's role     // - City and pincode

// const company = {
//     companyName: "Tech Solutions",
//     employees: [
//       { id: 1, name: "Aditya", role: "Developer", skills: ["JavaScript", "React", "Node.js"] },
//       { id: 2, name: "Rohan", role: "Designer", skills: ["Photoshop", "Illustrator", "Figma"] }
//     ],
//     location: {
//       country: "India",
//       city: "Mumbai",
//       address: { street: "MG Road", pincode: 400001 }
//     }
//   };
  
// let {companyName,employees:[{name:e1name,skills:[emp1Skill]},{role:emp2roll}],location:{city,address:{pincode}}}=company



// console.log(companyName);  // "Tech Solutions"
// console.log(e1name);     // "Aditya"
// console.log(emp1Skill);    // "JavaScript"
// console.log(emp2roll);     // "Designer"
// console.log(city);         // "Mumbai"
// console.log(pincode); 
  




//🟢🟢 Create a function that accepts a parameter but has a default value if none is provided.

// function student(name,age=12){
//     console.log(`name of student is ${name} and age is ${age}`);
    
// }

// student("aditya")
// student("ganesh",14)


//🟢🟢 Use the spread operator to create a copy of an object

// let obj1={name:"aditya",age:12}

// let obj2={...obj1}
// console.log(obj2);
