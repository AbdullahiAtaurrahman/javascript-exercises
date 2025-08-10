const removeFromArray = function (arr, ...b) {
    // const newArr = [];

    // arr.forEach(item => {
    //     if (!b.includes(item)) {
    //         newArr.push(item);
    //     }
    // })
    // return newArr;

    return arr.filter(item => !b.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
