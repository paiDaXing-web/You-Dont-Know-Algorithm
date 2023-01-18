var twoSum = function (nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    console.log(map);
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
};
twoSum([2, 7, 11, 15], 9);
