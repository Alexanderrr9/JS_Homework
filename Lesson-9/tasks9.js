//task1
function deepClone(initialObj) {

    var obj;

    obj = Array.isArray(initialObj) ? [] : {};

    for (var key in initialObj) {

        obj[key] = (typeof initialObj[key] === "object") ? deepClone(initialObj[key]) : initialObj[key];

    }

    return obj;
}
//task2
function checkObject(obj1, obj2) {
    if(typeof obj1 == typeof obj1) {
        if(typeof obj1 == "object" && obj1 != null) {
            var equal = true;
            for(var key in obj1) {
                if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
                    if(!checkObject(obj1[key], obj2[key])) {
                        equal = false;
                    }
                } else {
                    equal = false;
                }
            }
            return equal;
        } else {
            return obj1 === obj2;
        }
    } else {
        return false;
    }
}

var obj = {these: {name: 'Vasya', boolean: true}, object: 2};

console.log(checkObject(obj, obj));
console.log(checkObject(obj, {these: 10, object: 20, object2: 4}));
console.log(checkObject(obj, {these: {name: 'Vasya', boolean: true}, object: 2}))