export interface Monster {
    firstName: string;
    lastName?: string;
    age: number;
    type: MonsterType;
    moreInfo: string;
}

export interface SuperMonster extends Monster {
    powerLevel: number;
}

export enum MonsterType{
    Human = "Human",
    Blob = "Blob",
    Undead = "Undead"
}