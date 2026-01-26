const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;

    if (divisibleByFour && !divisibleBy100 || divisibleBy400) {
        return true
    }
    else{
        return false 
    }

    
};
console.log(leapYears(1990));

// Do not edit below this line
module.exports = leapYears;
