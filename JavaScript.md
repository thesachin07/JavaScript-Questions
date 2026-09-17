# JavaScipt questions Topic wise
## Console questions

###
1. Create two variables: one storing your full name and another storing your favorite hobby. Print a sentence in the format:
  >"My name is <your name> and <your hobby>".
 ```let name= "sachin";
  let hobby="My hobby is acting";
  console.log(`${name} and ${hobby}
  console.log(name + " and " + hobby);
```
2. Perform the arithmetic calculation `45 * 2 - 10` and print the final result.
   ```
    console.log(`${45 * 2 - 10}`)
    ```

3. Write a program that retrieves and prints the current year using JavaScript’s `Date` object.
```
   let currentDate= new Date()
   let currentyear = currentDate.getFullYear();
    console.log("Current date is " + currentDate)
```
4. Store your first name and last name in two different variables, then print your full name in a single output.
```
let first = "Sachin"
let last = "Kumar"
console.log(first + " " + last)
```
5. Create a variable with an initial value. Print its value, update the value, and print the updated value again.
```
let a = 3
console.log(a)
 a = 4
console.log(a)
```
6. Print a custom error message using `console.error()`.
```
    console.error("Bhai, error aa gaya! Description ye raha:");
    console.error(error.message);
```
7. Store a number in a variable and print the square of that number.
```
    let number = 5
    console.log(`The square of number ${number} is ${number*number}`)
```

8. Create a boolean variable and print its value.
```
isStudent = true
console.log(isStudent)
```

9. Store your age in a variable and print whether your age is greater than 18.
```
let age = 5
if(age >= 18){
    console.log("age is greater than 18")
}else{
    console.log("age is less than 18")
}
```
10. Divide `100` by `0` and print the result. Observe what JavaScript returns.
```
let result = 100 / 0;
console.log(result);
           OR
let num = 100
console.log(`${num/0} `)
```
### Variables and Data types

11. Create a variable using `let` and print its value.
  ```
  let a = 4
  console.log(a)
  ```

12. Declare a constant named `PI` with the value `3.14` and print it.
```
const PI = 3.14
console.log(PI)
```

13. Create a variable, print its value, update the value, and print the updated value again.
```
let a = 2
console.log(a)
a= 4
console.log(a)
     ```

14. Print the output of `typeof null` and observe what type JavaScript reports.
```
let a = 0
console.log(typeOf a)

15. Create a variable containing a numeric value as a string (e.g., `"25"`) and print its type.
```
let num = "25"
console.log(typeof num)
```
16. Create a boolean variable and print its type using `typeof`.
```
let num = true
console.log(typeof num)
```

17. Create three variables: a string, a number, and a boolean. Print all of them together in a formatted output.
```
let num= 12
let name = "Raju"
let isTrue= true
console.log(`A string is ${name}, number is ${num} and the boolean is ${isTrue}`)
```
18. Declare a variable without assigning a value and print its type using `typeof`.
```
let num
console.log(typeof num)
```

19. Create a variable with the value `undefined` and print its type.
```
let num = undefined
console.log(typeof num)
```

20. Create an array using `const`, print it, attempt to reassign the entire array (and handle the error), then modify the existing array by adding a new element and print the updated array.
 ```
 const arr = [1,2,3]
 console.log(arr)

 try{
    arr= [2,3,4]
     console.log(arr)
 } error{
     console.log(error: error.message)
 }
```
```
 Input:
nums = [2, 7, 11, 15], target = 9

 Output:
[0, 1] // because nums[0] + nums[1] === 9

```

21. To find the largest pair of the 2 elements using indexing with sorted elements
```
function largestPairSumofTwo(num){   
    return num[num.length-1] + num[num.length-2];
}
const result = largestPairSumofTwo([1,2,3,4,5,6,7,8,9])
console.log(result)
```

22. Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
 ```
function listFibonacci(n) {
var arr = [0, 1]
  for (var  i = 1; i < n; i++) 
    arr.push(arr[i] + arr[i - 1])

  return arr
}
console.log(listFibonacci(4))
```
23. Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)
```
function missingElement(){
  var a = [1,2,5]
  var missing = [];
  for (var i = 1; i <= 6; i++) 
   {
    if (a.indexOf(i) == -1) 
     {
       missing.push(i); 
     }
   }
 console.log(missing) //missing array
 console.log(a.concat(missing).sort()); //actual+missing elements
}
missingElement()
```
24. Find the missing no. in an array
```
function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return(x); //9
        }
    }
}
missing([1, 2, 3, 4, 5, 6, 7, 8, 10])
-------------------------------------------
```
```
function missing(arr) {
    for (var i = 0, x=1; i < arr.length; x++,i++) {
        if (arr[i] != x) { //index value comparing with pointer
            return x; //9
        }
    }
}
console.log(missing([1, 2, 3, 4, 5, 6, 7, 8, 10]))
```
