/*
Make NPM library called find-combinations or something that uses this.
You pass in an array of items (or object?) and get back the # of combinations and a result set of all combinations.
 */

function swap (alphabets, index1, index2) {
    var temp = alphabets[index1];
    alphabets[index1] = alphabets[index2];
    alphabets[index2] = temp;
    return alphabets;
}

function permute (alphabets, startIndex, endIndex) {
    if (startIndex === endIndex) {
        combinations++;
        console.log(alphabets.join(''));
    } else {
        var i;
        for (i = startIndex; i <= endIndex; i++) {
            swap(alphabets, startIndex, i);
            permute(alphabets, startIndex + 1, endIndex);
            swap(alphabets, i, startIndex); // backtrack
        }
    }
}


var alphabets = ['A','B','C','D','E'];
var combinations = 0;
permute(alphabets, 0, alphabets.length-1); // ABC, ACB, BAC, BCA, CBA, CAB
console.log('total combinations: ', combinations)