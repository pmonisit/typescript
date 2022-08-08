export const testFunction = () => {
    console.log("Amazing")
    console.log("Awesome")
    console.log("Change again")
}

// variable with types

var parent: any;
parent = 4;
parent = "Monisit";

// first (built-in)
var x: number = 4;
var y: string = "Prince Andwill";
var z: boolean = true;

// second (user-defined) arrays, enums, interfaces

// ARRAYS
var nameArray: string[] = [];
var otherArray = new Array(10);
nameArray.push("Prince");
otherArray.push("Andwill");

//ENUMS
export enum Actions {
    Create,
    Read,
    Update,
    Delete
}

//INTERFACES
interface Cat {
    name: string;
    breed: string;
    eat: (food: string) => {};
}

testFunction();