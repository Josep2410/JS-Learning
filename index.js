// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

//store.get("t-shirt");
//store.set("hat", 40);
//store.delete("hat");
//console.log(store.has("underwear"));
//console.log(store.size);

let shoppingCart = 0 ;
shoppingCart += store.get("t-shirt");
console.log(`$${shoppingCart}`);

store.forEach((value, key) => console.log(`${key} $${value}`));

console.log("=======================================================");

const pantry = new Map([
["spagetti", true],
["sauce", false],
["bread", false],
["chopped meat", true],
]);

//pantry.set("sauce", true); can overwrite existing values

pantry.forEach((value, key) => console.log(`${key} ${value}`));

let expiredGoods = 0;
for( [value, key] of pantry){
  if(key == false){
    expiredGoods++;
  }
}

console.log(`Number of expired goods: ${expiredGoods}`);

