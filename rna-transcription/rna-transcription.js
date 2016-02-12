/**
 * Created by robert.passmore on 2016/02/12.
 */

var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (DnaString) {

    var translateSingleNucleotides = function (DnaNucleotide) {

        var DnaToRnaDictionary = {
            C: 'G',
            G: 'C',
            A: 'U',
            T: 'A'
        };

        return DnaToRnaDictionary[DnaNucleotide];
    };

    var DnaArray = DnaString.split('');
    var RnaString;

    RnaString = DnaArray.map(function(x){return translateSingleNucleotides(x);}).join('');

    return RnaString;
};

module.exports = DnaTranscriber;
