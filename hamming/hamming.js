/**
 * Created by robert.passmore on 2016/02/10.
 */
var hamming;
hamming = function () {};

hamming.prototype.compute = function (arg1, arg2) {
    if(arg1 === arg2){
        return 0;
    }
};

module.exports = hamming;