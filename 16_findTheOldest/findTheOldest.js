const findTheOldest = function () {
    return arr.forEach(element => {
        element.yearOfDeath - element.yearOfBirth
    });
};

// Do not edit below this line
module.exports = findTheOldest;
