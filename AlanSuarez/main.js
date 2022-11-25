var btnBarra = document.getElementById("bars"),
    btnCruz = document.getElementById("cruz"),
    overlay = document.getElementById("caja");

btnBarra.addEventListener('click', function () {
    overlay.classList.add('active');
});
btnCruz.addEventListener('click', function () {
    overlay.classList.remove('active');
});

var btnInfo = document.getElementById('info'),
    btnCruzinfo = document.getElementById('cruzinfo'),
    caja = document.getElementById('cajainfo');

btnInfo.addEventListener('click', function () {
    caja.classList.add('visible');
});
btnCruzinfo.addEventListener('click', function () {
    caja.classList.remove('visible');
});