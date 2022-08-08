"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = exports.testFunction = void 0;
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
(0, exports.testFunction)();
