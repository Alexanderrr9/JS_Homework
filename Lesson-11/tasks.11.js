//task_1
var names = ['Vasy','Petya','Vova'];

function showNames(v, i, a) {

    return {name: v};

}

names.map(showNames);

//task_2
var soon = new Date();
var time = ['00', '13', '24'];

function arr(time) {

    return 'Текущее время : '+ soon.toLocaleTimeString();
}

time.reduce(arr);

//task_3
function vowelCount(str) {

    str = 'В этом тексте 6 гласных';
    return str.replace(/[^аеёиоуыэюя]/gi, "").length;

};
vowelCount();

//task_4
var regular = ' Вторая запись, где! Шаблон находится? Между слешами, обрабатывает - обратные слеши. По-другому.';
var a = regular.split(/[!?.]/gi);

function showText (v,i,a) {

    console.log( v + ' ' + v.split(/[' ',-]/gi).join('').length );

}

a.forEach(showText);
