// [1,4,2,5,1,8,4,2,9,1,4]   =>   [1,2,4,5,8,9,1,1,2,4,4]

let PrintArray = () => {
  let unique = [];
  let duplicated = [];
  let Array = [1, 4, 2, 5, 1, 8, 4, 2, 9, 1, 4];

  let temp;
  for (i = 0; i < Array.length - 1; i++) {
    for (j = 0; j < Array.length - i - 1; j++) {
      if (Array[j] > Array[j + 1]) {
        temp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = temp;
      }
    }
  }

  Array.forEach((value, index) => {
    if (!unique.includes(value)) {
      unique.push(value);
    } else {
      duplicated.push(value);
    }
  });

  console.log([unique + "," + duplicated]);
};

PrintArray();
