const removeFromArray = function(arr, ...nums) {
    let res = arr.filter((curr) => !nums.includes(curr));
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
