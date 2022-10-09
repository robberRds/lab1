function mathfunction1() {
    var l = document.getElementById('l').value;

    var r = l / (2 * 3.14);
    var s = 3.14 * Math.pow(r, 2);

    document.getElementById('result1').innerHTML = s;
}
document.getElementById('bt1').addEventListener('click', mathfunction1);