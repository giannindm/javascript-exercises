const sumAll = function(num1, num2) {
    if ((num1 < 0 || num2 < 0) || (!Number.isInteger(num1) || (!Number.isInteger(num2)))) {
        return 'ERROR';
    } else {
        let smallest = num1;
        let biggest = num2;
        if (num1 > num2) {
            smallest = num2;
            biggest = num1;
        }
        let sum = 0;
        for (let i = smallest; i <= biggest; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
