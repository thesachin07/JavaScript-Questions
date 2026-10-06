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

