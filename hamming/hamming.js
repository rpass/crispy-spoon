/**
 * Created by robert.passmore on 2016/02/10.
 */
var hamming;
hamming = function () {
};


hamming.prototype.compute = function (arg1, arg2) {
    var areDifferent = function (char1, char2) {
        return char1 !== char2;
    };

    var DifferentLengthError = new Error('DNA strands must be of equal length.');

    var hamDistance = 0;

    if(arg1.length !== arg2.length) {
        throw DifferentLengthError;
    } else {
        for(var i=0; i<arg1.length; i++){
            hamDistance += areDifferent(arg1.charAt(i), arg2.charAt(i));
        }
    }
    return hamDistance;
};

module.exports = hamming;