// task 1:
function radianToDegree(radian) {
    //value of 1 radian
    const degree = 57.2958;

    //error handler
    if (isNaN(radian)) {
        return "Error: the input data isn't valid"
    }
    return radian * degree;
};

console.log(radianToDegree(3))




//task 2:
function isJavaScriptFile (filename) {
    //result container
    let result;

    //jsFile identification
    const jsFile = ".js";
    //file name checking condition
    if ( filename.slice(-3) === jsFile){
        result = true
    } else {
        result = false
    }
    return result;
}

console.log(isJavaScriptFile("app.js"))



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
        return "Error: the input data isn't valid";
    }
    return totalPrice;
};

console.log(oilPrice(12,6,5))





//task 4:
function publicBusFare (passenger) {
    //transportation options
    const busCanCarry = 50;
    const microbusCanCarry = 11;
    const busFare = 250;

    //calculation stored in variables
    let passengerForMicro = passenger % busCanCarry;
    let leftPeople = passengerForMicro % microbusCanCarry;
    let localBusPeople = leftPeople * busFare;

    //error handler and error massage
    if (isNaN(localBusPeople)) {
        return "Error: please insert a valid data."
    };
    return localBusPeople;
};

console.log(publicBusFare(225))






//task 5:
//data for checking task5
let person_1 = {name: "John", friend: "Mike"};
let person_2 = {name: "Mike", friend: "John"};
let person_3 = "Johann";
let person_4 = 1200;



function isBestFriend (a, b) {
    //result container
    let result;

    //error handler
    if (a instanceof Object && b instanceof Object) {

        //condition to check friendship
        if (a.name === b.friend && a.friend === b.name) {
            result = true;
        } else { result = false}
        return result
    }
    //error handling massage
    else { return "Error: please insert an valid object"}
};

console.log(isBestFriend(person_1, person_2))

