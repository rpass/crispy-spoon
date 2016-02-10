var leap = function(year) {
    this.year = year;

    this.isDivisibleBy = function (number) {
        return this.year % number === 0;
    }
};

leap.prototype.isLeap = function () {
    return (!this.isDivisibleBy(100) || this.isDivisibleBy(400)) && this.isDivisibleBy(4);
};


module.exports = leap;
