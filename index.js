"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDogs = exports.eatFood = exports.loopCats = exports.displayCats = exports.addCat = exports.Actions = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Amazing");
    console.log("Awesome");
    console.log("Change again");
};
exports.testFunction = testFunction;
// variable with types
var parent;
parent = 4;
parent = "Monisit";
// first (built-in)
var x = 4;
var y = "Prince Andwill";
var z = true;
// second (user-defined) arrays, enums, interfaces
// ARRAYS
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("Prince");
otherArray.push("Andwill");
//ENUMS
var Actions;
(function (Actions) {
    Actions[Actions["Create"] = 0] = "Create";
    Actions[Actions["Read"] = 1] = "Read";
    Actions[Actions["Update"] = 2] = "Update";
    Actions[Actions["Delete"] = 3] = "Delete";
})(Actions = exports.Actions || (exports.Actions = {}));
// var cat: Cat[] = [];
var cat = [];
const addCat = (data) => {
    cat.push(data);
    (0, exports.displayCats)();
};
exports.addCat = addCat;
const displayCats = () => {
    let list = document.getElementById("myList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cat.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayCats = displayCats;
const loopCats = () => {
    //for loop
    for (let i = 0; i < cat.length; i++) {
        console.log("Using for loop");
        console.log(cat[i]);
    }
    //for (short hand)
    for (let data of cat) {
        console.log("Using for short hand");
        console.log(data);
    }
    //for (short hand but using index)
    for (let data in cat) {
        console.log("Using for short hand but using index");
        console.log(cat[data]);
    }
    //while loop
    let i = 0;
    while (i < cat.length) {
        console.log(cat[i]);
        i++;
    }
    // cat.forEach((data: Cat) => {
    //     console.log(data);
    // })
    // cat.map((data: Cat) => {
    //     console.log(data);
    // })
};
exports.loopCats = loopCats;
const eatFood = (food) => {
    return "I ate " + food + " , I am full";
};
exports.eatFood = eatFood;
var dogArray = [];
const addDogs = (...dogs) => {
    for (let data of dogArray) {
        dogs.push(data);
    }
    console.log(dogs);
};
exports.addDogs = addDogs;
// export const exampleIf = () => {
//     var cond = true;
//     if(cond){
//     }else if(){
//     }
// }
// export const exampleCase = (value: string) => {
//     switch(value){
//         case "case 1" : 
//         break;
//         case "case 2" :
//         break;
//         default:
//     }
// }
var tuple = ["", 1];
var newCat = {
    name: "Garfield",
    breed: "Siberian",
    eat: () => (0, exports.eatFood)("Chicken")
};
// addCat(newCat)
// addDogs("Dog1", "Dog2", "Dog3")
// newCat.name = "Tom";
// addCat(newCat);
(0, exports.loopCats)();
(0, exports.testFunction)();
