function mathfunction1() {
    var l = document.getElementById('l').value;

    var r = l / (2 * 3.14);
    var s = 3.14 * Math.pow(r, 2);

    document.getElementById('result1').innerHTML = s;
}
document.getElementById('bt1').addEventListener('click', mathfunction1);

function mathfunction2() {
    var n = 1000;
    var s = 0;
    for (var i = 0; i < 50; i++) {
        n = n + n / 40;
        if (n >= 3000 && s == 0) s = i;
    }
    document.getElementById('result2').innerHTML = s;
}

document.getElementById('bt2').addEventListener('click', mathfunction2);

function mathfunction3() {
    var l1 = document.getElementById('z3').value;
    var l2 = document.getElementById('z3.1').value;
    var s;
    if (l1.length < l2.length) s = l1.length
    else s = l2.length;
    var l;
    l1 = l1.split("");
    l2 = l2.split("");
    for (var i = 0; i < s; i++) {

        l = l1[i];
        l1[i] = l2[i];
        l2[i] = l;
    }
    var res = l1.join("") + " " + l2.join("");

    document.getElementById('result3').innerHTML = res;
}

document.getElementById('bt3').addEventListener('click', mathfunction3);

function mathfunction4() {
    var l1 = document.getElementById('zad4').value;
    var b = document.getElementById('zad4.1').value;
    var s1 = l1.search(b);
    document.getElementById('result4').innerHTML = s1;
}

document.getElementById('bt4').addEventListener('click', mathfunction4);

function mathfunction5() {
    //var mas1 = [2,5,-2,0,1,-4,34,-32,4,56,99,-32,43,98,-43,-71];
    var mas1 = [15];
    for (var i = 0; i < 15; i++) {
        mas1[i] = getRandomInt(-10, 10);
    }
    var mas2 = [];
    for (var i = 0; i < mas1.length; i++) {
        if (mas1[i] < 0) {
            mas2[mas2.length] = mas1[i];
        }
    }
    var res = "X[" + mas1 + "]   |||   Y[" + mas2 + "]"
    document.getElementById('result5').innerHTML = res;
}

document.getElementById('bt5').addEventListener('click', mathfunction5);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function mathfunction6() {
    var n = document.getElementById('n').value;
    var arr = [n];
    for (var i = 0; i < n; i++) {
        arr[i] = [n];
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            arr[i][j] = getRandomInt(0, 10);
        }
    }
    var res = "";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            res += arr[i][j] + ", ";
        }
        res += "<br>";
    }
    res += "<br>";

    var max;
    var bool = 1;
    for (var i = 0; i < n; i++) {
        max = Math.abs(arr[i][0]);
        for (var j = 0; j < n; j++) {
            if (Math.abs(arr[i][j]) >= max) {
                max = arr[i][j];
            }
        }
        for (var j = 0; j < n; j++) {
            if (bool = 1) {
                if (Math.abs(arr[i][j]) == max) {
                    arr[i][j] *= -1;
                    bool = 0;
                }
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            res += arr[i][j] + ", ";
        }
        res += "<br>";
    }
    res += "<br>";
    document.getElementById("result6").innerHTML = res;
}

document.getElementById('bt6').addEventListener('click', mathfunction6);