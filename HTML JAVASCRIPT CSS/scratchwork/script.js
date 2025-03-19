var x = [4, 7, 11];


x.forEach(stepUp);

function stepUp(value, i, arr) {

    arr[i] = value + 1;

}

console.log(x);
