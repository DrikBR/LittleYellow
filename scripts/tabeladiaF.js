function armazenarInfo() {
    const escola = localStorage.getItem('escola');
    const dia = localStorage.getItem('dia');

    if (escola && dia && !sessionStorage.getItem("formEnviado")) {

    document.getElementById('escola').value = escola;
    document.getElementById('dia').value = dia;
    document.getElementById('formEnvio').submit();

    localStorage.removeItem('escola');
    localStorage.removeItem('dia');
    }
}

window.addEventListener("DOMContentLoaded", armazenarInfo);