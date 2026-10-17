# JavaScipt DSA Problems

### Two Sum Problem

1. You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Brute Force Approach :
 ```
 var twoSum = function(nums, target) {
 
    for(let i=0; i<nums.length; i++){
       for(let j =i+1; j>0; j--){
        if (nums[i] + nums[j] == target){
            return [i, j]
        }
       }
    }
};
```
Hash Map Approach(optimized)
```
var twoSum = function(nums, target){
    let map = new Map()
    for(let i =0; i<nums.length; i++){
        let diff = target - nums[i]
        if( map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
}
```
### Duplicate Problem

2. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Brute Force Approach
```
 var containsDuplicate = function(nums){
    for(let i =0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
if (nums[i] == nums[j]){
    return true;
}
        }
    }
    return false
 }
 ```

 Optimized Approach using Set() method
```
 var containsDuplicate = function(nums) {
     const seen = new Set();
    
     for (let i =0; i<nums.length; i++) {
         if (seen.has(nums[i])) {
             return true;
         }
         seen.add(nums[i]);
     }
    
     return false;
 };
```
 Short One line Method
```
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
}; 
```

### Valid Anagram
3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Normal Method of string to array conversion -> sort -> check both are equal or not:
```
var isAnagram = function(s, t) {
 if(s.length !== t.length)
 return false;
 let sortS =  s.split('').sort().join('')
 let sortT =  t.split('').sort().join('')

  return sortS === sortT
}
  ```

Hash Map (frequency counter) Approach with O(N) time complexity

```
var isAnagram = function(s, t) {
 if(s.length !== t.length)
 return false;

const count = {}
for(let char of s){
    if(count[char]){    
        count[char] += 1;
    }else {
        count[char] = 1
    }
}

for(let char of t){
    if(!count[char]){
      return false
    }
        count[char] -= 1
    }
    return true
}
```

Hash Map (frequency counter) Approach with O(N) time complexity ( One line writing way)
```
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    // String 's' ke characters ki frequency count karo
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // String 't' ke characters subtract karo
    for (let char of t) {
        if (!count[char]) {
            return false; // Character missing hai ya frequency zero ho chuki hai
        }
        count[char]--;
    }

    return true;
};
```

### Product of Array Except Self

4. Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

```
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
 
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
};
```
###  Longest Consecutive Sequence
5. Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
   You must write an algorithm that runs in O(n) time.

   Approach- 1:
```
     var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            continue;
        }

        if (nums[i + 1] - nums[i] === 1) {
            currentLength++;
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }
    }
    return Math.max(maxLength, currentLength) }
```
Approach - 2 :
```
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {

        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
```
 6. Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
```
var map = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};
```
Two Sum II - Input Array Is Sorted

7. You are given a 1-indexed array of integers numbers that is already sorted in non-decreasing order.
Find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers index1 and index2 as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.
 ```
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
```
 Container With Most Water

 8. You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Brute Force Approach
```
function maxArea(arr){
   let width
   let maxWater = 0
   
    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            width = j-i
          let  height = Math.min(arr[i], arr[j])
            let area = width * height
           maxWater =  Math.max(maxWater, area)
        }
    }
return maxWater
}
```
Optimal Approach (Two Pointer)
```
function maxArea(height){
  let width = 0
  let maxWater = 0
  let left = 0
  let right = height.length-1
  while(left < right){
    width = right-left
    const h = Math.min(height[left], height[right])
    const area = width * h
    maxWater = Math.max(maxWater, area)

   height[left] < height[right]? left++ : right--
  }
  return maxWater
}
```
