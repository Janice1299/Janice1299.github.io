document.getElementById('step2').style.display = 'none';

document.getElementById('step1next').addEventListener('click', function () {
    username = document.getElementById('username').value;
    spanname = document.getElementById('spanname');

    spanname.innerHTML = username;

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';

})

document.getElementById('calculate').addEventListener('click', function () {

    inputa = document.getElementById('paxno').value;


    result = document.getElementById('result');
    i = inputa;
    if (i < 0) {
        i = "Come to eat Pasta!";
    }
    else if (i <= 8) {
        i *= 20;
    } else {
        i = 200;
    }
    result.innerHTML = "$" + i;


})