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
    eat?: (food: string) => string;
}

// var cat: Cat[] = [];
var cat: string[] = [];
export const addCat = (data: string) => {
    cat.push(data);
    displayCats();
}

export const displayCats = () => {
    let list = document.getElementById("myList");
    if(list) {
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild);
        }
    }
    cat.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        if(list){
            list.appendChild(li);
        }
    })
}


export const loopCats = () => {
    //for loop
    for(let i = 0; i < cat.length; i++){
        console.log("Using for loop");
        console.log(cat[i]);
    }

    //for (short hand)
    for(let data of cat){
        console.log("Using for short hand");
        console.log(data);
    }

    //for (short hand but using index)
    for(let data in cat){
        console.log("Using for short hand but using index");
        console.log(cat[data]);
    }

    //while loop
    let i = 0;
    while(i < cat.length){
        console.log(cat[i]);
        i++;
    }

    // cat.forEach((data: Cat) => {
    //     console.log(data);
    // })

    // cat.map((data: Cat) => {
    //     console.log(data);
    // })
}

export const eatFood = (food: string) => {
    return "I ate " + food + " , I am full"
}

var dogArray: string[] = [];
export const addDogs = (...dogs: string[]) => {
    for(let data of dogArray){
        dogs.push(data);
    }
    console.log(dogs);
}

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

var tuple: (string | number)[] = ["", 1];

var newCat: Cat = {
    name: "Garfield", 
    breed: "Siberian", 
    eat: () => eatFood("Chicken")
}

// addCat(newCat)
// addDogs("Dog1", "Dog2", "Dog3")
// newCat.name = "Tom";
// addCat(newCat);

loopCats();
testFunction();