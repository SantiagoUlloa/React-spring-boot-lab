//1.

//{} curly braces
//= equal sign
//: colon
// the names
//const/let


const me = {
  name: "Santiago",
  age: 28,
  email: "santiago@foo.bar"
}

console.log(me.name);
me["age"] = 43;

console.log(me.age);

me["place of residence"] = "Fort George";

console.log(me["place of residence"]);

//3. slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = "creature";
monster["age"]= 6;

console.log(monster);
monster["introduce"] = function (){
  console.log(`Hi my name is ${monster.name}, my color is ${monster.color} and I am a ${monster.type}.`)
}

monster.introduce();

//Ogres

// function avatar (name, hitpoints, weapon, attackValue){
// this.name = name;
// this.hitpoints = hitpoints;
// this.weapon = weapon;
// this.attackValue = attackValue
// this.attack = function ;
// }

const adventurer = {
  name: "sir Garen",
  hitpoints: 100,
  weapon: "sword",
  strength: 10
}


const ogre = {
  name: "Rengar",
  hitpoints: 100,
  weapon: "club",
  strength: Math.floor((Math.random()*20))

  }

console.log(typeof adventurer.strength);

console.log(adventurer.hitpoints)

while (ogre.hitpoints > 0 && adventurer.hitpoints > 0){
  ogre.hitpoints -= adventurer.strength;
  adventurer.hitpoints -= ogre.strength;
  console.log("Adventurer has "+ adventurer.hitpoints, "Ogre has "+ ogre.hitpoints);
};



//const adventurer = new avatar("sir Garen", 100, "sword", 10);
//const ogre = new avatar("Rengar", 100, "club", floor(math.random()*20))
// adventurer = {
//   name: "sir Garen",
//   hitpoints: 100,
//   weapon: "sword"
// }
//
