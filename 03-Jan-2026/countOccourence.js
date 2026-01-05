function CountOccourence(str) {
  let obj1 = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj1[char]) {
      obj1[char] += 1;
    } else {
      obj1[char] = 1;
    }
  }

  console.log(obj1);
}

CountOccourence("i love mumbai");
