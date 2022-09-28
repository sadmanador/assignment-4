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




//task 2:
function isJavaScriptFile (filename) {
    let value = new String(filename)

    //condition checking
    // return filename.endsWith(".js")
    if (value instanceof String){
        return filename.endsWith(".js")
    } 
    else if (value instanceof Number) {
        return "Error: please insert string not a number"
    }
    else { return "Error: The file name isn't a string type."}

};
console.log(isJavaScriptFile(45));




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






//data for checking task5
let person_1 = {name: "John", friend: "Mike"};
let person_2 = {name: "Mike", friend: "John"};
let person_3 = "Johann";
let person_4 = 1200;



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

