import {Monster, MonsterType, SuperMonster} from "./models/monsterTypes";

const monster1: Monster = {
    firstName: "Zorg",
    age: 500,
    type: MonsterType.Undead,
    moreInfo: "Terrifies everyone"
};

const monster2: Monster = {
    firstName: "Blobbo",
    age: 3,
    type: MonsterType.Blob,
    moreInfo: "aborbs everything in sight"
};

const monster3: Monster = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: MonsterType.Human,
    moreInfo: "Keen intellect"
};

const monster4: SuperMonster = {
    firstName: "Your",
    lastName: "Momma",
    age: 50,
    type: MonsterType.Blob,
    moreInfo: "Suppa freaky",
    powerLevel: 9999 + 1
}



const monsters: Monster[] = [monster1, monster2, monster3, monster4]

console.log(monsters);