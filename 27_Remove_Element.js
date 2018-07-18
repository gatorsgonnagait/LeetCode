


function removeElement(nums, val) {
    for (var i = 0; i <nums.length; i++){
        if ( nums[i] === val){
            nums.splice(i, 1);
            i-=1;
            console.log(nums);
        }
    }
    console.log(nums);
    return nums.length;
};


var arr = [0,1,2,2,3,0,4,2];
var nummberToRemove = 2;
var list = removeElement(arr, nummberToRemove);
