function addAndRemoveEl(input) {
  let counter = 0;
  let myArr = [];

  for (const el of input) {
    let command = el;
    if (command === "add") {
      counter++;
      myArr.push(counter);
    } else {
      counter++;
      myArr.pop(counter);
    }
}
if (myArr.length === 0) {
  console.log("Empty");
}
  console.log(myArr.join("\n"));
}
addAndRemoveEl(["add", "add", "add", "add"]);
addAndRemoveEl(["add", "add", "remove", "add", "add"]);
addAndRemoveEl(["remove", "remove", "remove"]);
