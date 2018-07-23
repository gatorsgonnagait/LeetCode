
// binary search through a sorted list to get all numbers below a given number in the list
function findSearchArea(nums, target) {
    let halfLeft = nums.slice(0, nums.length/2);
    let halfRight = nums.slice(nums.length/2, nums.length);

    if ( halfRight[0] < target ) {
        if (halfRight.length === 1) {
            return nums;
        }
        return halfLeft.concat(findSearchArea(halfRight, target));
    }
    else if (halfLeft[halfLeft.length-1] > target)
        return findSearchArea(halfLeft, target);


    return halfLeft;
}


let nums = [3, 2 ,4];
let target = 6;

console.log(findSearchArea(nums, target));

function twoSum(cutArray, target) {
    for( let i = 0; i < cutArray.length; i++){
        let searchFor = target - cutArray[i];
        console.log(searchFor);
        for ( let j = i+1; j < cutArray.length; j ++){
            if (cutArray[j] === searchFor){
                return[i, j];
            }
        }
    }
}

console.log(twoSum(nums, target));