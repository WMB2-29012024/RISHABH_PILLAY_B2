const nums = [3,2,2,3];
let val = 3;


const removeElement = (nums, val)=> {
    let n = nums.length;
    let i = 0;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            nums[n - 1] = "_"
            n--; 
        } else {
            i++;
        }
    }
    return (n , nums );
}

console.log(

    removeElement(nums,val)

)