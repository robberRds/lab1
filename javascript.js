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