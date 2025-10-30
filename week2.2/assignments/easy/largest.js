function findLargest(nums){
    let maxi = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > maxi){
            maxi = nums[i];
        }
    }
    return maxi;
}

console.log(findLargest([3, 7, 2, 9, 1]))