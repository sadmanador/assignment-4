// task 1:
function radianToDegree(radian) {
    //value of 1 radian in degree
    const degree = 57.2958;

    //error handler
    if (isNaN(radian)) {
        return "Error: the input data isn't valid."
    }
    return radian * degree;
};
console.log(radianToDegree(8));



//data for checking task5
let person_1 = {name: "John", friend: "Mike"};
let person_2 = {name: "Mike", friend: "John"};
let person_3 = "Johann";
let person_4 = 1200;


//task 2:
function isJavaScriptFile (filename) {
    

    //condition checking
    // return filename.endsWith(".js")
   if (typeof(filename) == 'string'){
    return filename.endsWith(".js")
   } else if (typeof(filename) == 'object'){
    return "Error: appropriate data type required"
   } else if (typeof(filename) == 'boolean'){
    return "Error: appropriate data type required"
   } else if (typeof(filename) == 'function'){
    return "Error: appropriate data type required"
   } else {
    return "Error: appropriate data type required"
   }

};
console.log(isJavaScriptFile(person_3));




//task 3:
function oilPrice (a, b, c) {
    //prices of different fuels
    let diesel = 114;
    let petrol = 130;
    let octane = 135;

    //calculation of sum for fuel prices
    let totalPrice = (diesel * a) + (petrol * b) + (octane * c);

    //error handler & error massage
    if (isNaN(totalPrice)) {
        return "Error: the input data isn't valid.";
    }
    return totalPrice;
};
console.log(oilPrice(12,"asd",5));





//task 4:
function publicBusFare (passenger) {
    //transportation options
    const busCapacity = 50;
    const microBusCapacity = 11;
    const busFare = 250;

    //fare_Calculation
    let localBusFare = ((passenger % busCapacity) % microBusCapacity) * busFare;

    //error handler and error massage
    if (isNaN(localBusFare)) {
        return "Error: please insert a valid data."
    };
    return localBusFare;
};
console.log(publicBusFare(65));





//task 5:
function isBestFriend (a, b) {

    //error handler
    if (a instanceof Object && b instanceof Object) {

        //condition to check friendship
        if (a.name === b.friend && a.friend === b.name) {
            return true;
        } else { return false}

    }
    //error handling massage
    else { return "Error: please insert an valid object."}
};
console.log(isBestFriend({name: "John", friend: "Mike"}, {name: "Ador", friend: "John"}));

