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