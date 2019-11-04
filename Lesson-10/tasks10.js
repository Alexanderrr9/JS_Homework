//task1
var filterNumbersArr = [-1, 0, 2, 34, -2];

var numbers = filterNumbersArr.filter(function(obj) {
    return obj > 0;
});
console.log(numbers);

//task2
var findArr = [-1, 0, 2, 34, -2];

var foundArr = findArr.find(function(obj) {
    return obj > 0;

});
console.log(foundArr);

//task3
function checkPalindrome(str) {

    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
checkPalindrome('шалаШ');
checkPalindrome('привет');

//task4
function areAnagrams (str1, str2) {

    var str1 = str1.split('').sort().join(''),
        str2 = str2.split('').sort().join('');

    return (str1 === str2);
}
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

//task5
function divideArr(array, piece) {

    var result = [];
    var partLenght = array.length / piece;

    for(var i = 0; i < partLenght; i++) {
        result.push(array.splice(0, piece));
    }
    return result;
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);