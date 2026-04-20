const sumAll = function(int1, int2) {
    if (int1 < 0 ||
        int2 < 0 ||
        !Number.isInteger(int1, int2) ||
        typeof (int1, int2) != "number")
        {
        return "ERROR";
    } else {
        let range = [int1, int2].sort();
        let sum = 0;
        for (let i = range[0]; i <= range[1]; i++) {
            sum += i;
        } return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
