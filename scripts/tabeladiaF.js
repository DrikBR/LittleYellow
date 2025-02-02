function armazenarInfo() {
    const escola = localStorage.getItem('escola');
    document.getElementById('escola').textContent = escola;
    localStorage.removeItem('escola');

    const dia = localStorage.getItem('dia');
    document.getElementById('dia').textContent = "Dia " + dia;
    localStorage.removeItem('dia');
}

window.addEventListener("DOMContentLoaded", armazenarInfo);