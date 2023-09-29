const letters = ["a", "b", "c"];

for (let [index, value] of letters.entries()) {
  console.log(`The index of ${value} is ${index}.`);
}

const puppies = [{ name: "Teddy", age: 2 }, {name: "Esmeralda", age: 5}, {name: "Oak", age: 1}];

for (let [index, value] of puppies.entries()) {
    console.log(`The puppy on index ${index} is ${value.name}`);
}
