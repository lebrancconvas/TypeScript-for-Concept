const succ = (num: number) => {
  return num + 1;
};

const category = [
  { object: 1, morphism: succ(1) },
  { object: 2, morphism: succ(2) }
];

const Person = {
  name: "Anak",
  favoriteSubject: "Mathematics"
};

console.log(typeof succ); // function
console.log(typeof category); // object
console.log(typeof Person); // object 
