function removeFromArray(array, ...args) {
    for (arg of args) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg) {
                array.splice(i, 1);
            } else {
                continue;
            }
        }
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
