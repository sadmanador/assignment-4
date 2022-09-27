// task 1:
function radianToDegree(radian) {
    const degree = 57.2958;
    return radian * degree;
};

console.log(radianToDegree())




//task 2:
function isJavaScriptFile (filename) {
    let result = '';
    const jsFile = ".js";
    if ( filename.slice(-3) === jsFile){
        result = true
    } else {
        result = false
    }
    return result;
}

console.log(isJavaScriptFile(""))



//task 3:
function oilPrice (diesel, petrol, octane) {
    let a = 114;
    let b = 130;
    let c = 135;
    return (diesel * a) + (petrol * b) + (octane * c);
};


//task 4:
function publicBusFare (passenger) {
    const busCanCarry = 50;
    const microbusCanCarry = 11;
    const busFare = 250;

    let passengerForMicro = passenger % busCanCarry;
    let leftPeople = passengerForMicro % microbusCanCarry;
    let localBusPeople = leftPeople * busFare;
    return localBusPeople;
};

console.log(publicBusFare())


//task 5:
function isBestFriend (person1, person2) {
    let result = '';
    if (person1.name === person2.friend && person1.friend === person2.name) {
        result = true;
    } else { result = false}
    return result
};
