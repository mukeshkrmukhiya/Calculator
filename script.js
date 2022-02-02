
let sun = document.getElementById('head');
sun.addEventListener('click', function run() {
    alert('hached');
});
var a = 0;
function fun1() {
    var arg1 = document.getElementById('arg1');
    arg1.innerHTML = 7;
    a = 7;
};
console.log('outside the block',a);
seven.addEventListener('click', fun1());

function fun2() {
    var arg2 = document.getElementById('arg2');
     arg2.innerHTML = 8;
     var b = 8;
     console.log(b);
};
eight.addEventListener('click', fun2());

plus.addEventListener('click', function run1() {
    let oprt = document.getElementById('oprt');
    oprt.innerHTML = '+';

});

function fun3() {
    let eqoprt = document.getElementById('eqoprt');
    eqoprt.innerHTML = '=';
    let sum = a + b;
    ans.innerHTML= sum;
};
equalto.addEventListener('click', fun3());