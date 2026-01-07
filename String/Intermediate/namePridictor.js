// vishal.pal622003@gmail.com       =     Vishal Pal
// nitesh.yadav12140@gmail.com      =     Nitesh Yadav

function namePridict(str) {
  const name = str.split("@")[0];
  let username = name.replace(/[0-9]/g, "").split(".");
  let strusername = capitalizeFirstLetter(username[0]);
  let strsirname = capitalizeFirstLetter(username[1]);
  console.log("Name of the user is:", strusername);
  console.log("Surname of the user is:", strsirname);
}

namePridict("vishal.pal622003@gmail.com");
namePridict("nitesh.yadav12140@gmail.com");

function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
