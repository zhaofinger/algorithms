var permuteUnique = function(nums) {
  const swap = (array, index1, index2) => {
    if (index1 !== index2) {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    }
  };

  const perm = (array, index) => {
    if (index === array.length) {
      result.push(array.join(','));
    } else {
      for (let i = index; i < array.length; ++i) {
        swap(array, index, i);
        perm(array, index + 1);
        swap(array, index, i);
      }
    }
  };

  let result = [];
  perm(nums, 0);
  result = Array.from(new Set(result));
  return result.map(item => item.split(',').map(item => Number(item)));
};

console.log(permuteUnique([-1, 2]));