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
console.log(radianToDegree(5));


//task 2:
function isJavaScriptFile (filename) {
    
    //error handling
   if (typeof(filename) == 'string'){
    return filename.endsWith(".js")
   }
   else {
    return "Error: appropriate data type required"
   }

}
console.log(isJavaScriptFile("script.css.js"));




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
console.log(oilPrice(10,5,2));





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
console.log(publicBusFare(60));





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