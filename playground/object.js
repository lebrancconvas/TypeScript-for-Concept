// let registerNames = [
//   "ip", "acc",
//   "r1", "r2", "r3", "r4",
//   "r5", "r6", "r7", "r8"
// ];

// let result = registerNames.reduce((map, name, index) => {
//   map[name] = index * 2;
//   return map;
// });

// console.log(result);

let obj = {};

obj["ip"] = 0;
obj["ip"]["acc"] = 2;
obj["ip"]["acc"]["r1"] = 4;
obj["ip"]["acc"]["r1"]["r2"] = 6;
obj["ip"]["acc"]["r1"]["r2"]["r3"] = 8;


console.log(obj);
