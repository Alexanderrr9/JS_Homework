//task_1
var names = ['Vasy','Petya','Vova'];

function showNames(v, i, a) {
    return {name: v};
}

names.map(showNames);

//task_2
var arr = ['00', '13', '24'];

function time (r,v,i,a) {
    return r+ ' : ' +v;
}

arr.reduce(time,'Текущее время');

//task_3
function vowelCount(str) {
    var arr = ['а','е','ё','и','о','у','ы','э','ю','я'];
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        for (var a = 0; a < arr.length; a++) {
            if (arr[a] === str[i]) {
                counter++;
            }
        }
    }
    return counter;
}

vowelCount('В этом тексте 6 гласных');

//task_4
var regular = ' Вторая запись, где! Шаблон находится? Между слешами, обрабатывает - обратные слеши. По-другому.';
var a = regular.split(/[!?.]/gi);

function showText (v,i,a) {
    console.log( v + ' ' + v.split(/[' ',-]/gi).join('').length );
}

a.forEach(showText);
