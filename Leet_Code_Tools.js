
// binary search through a sorted list to get all numbers below a given number in the list
function findSearchArea(nums, target) {
    let halfLeft = nums.slice(0, nums.length/2);
    let halfRight = nums.slice(nums.length/2, nums.length);

    if ( halfRight[0] < target )
        return halfLeft.concat(findSearchArea(halfRight, target));

    else if (halfLeft[halfLeft.length-1] > target)
        return findSearchArea(halfLeft, target);

    return halfLeft;
}
