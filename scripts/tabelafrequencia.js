function escolhaF() {
    const tabela = document.getElementById("tabelaF");

    tabela.addEventListener('click', function(event){
        instituicao = event.target.parentNode.rowIndex;
        data = event.target.cellIndex;

        if (data == 0) {
            data = "19/11/24";
            localStorage.setItem('dia', data);
        } else if (data == 1) {
            data = "20/11/24";
            localStorage.setItem('dia', data);
        } else if (data == 2) {
            data = "21/11/24";
            localStorage.setItem('dia', data);
        }

        if (instituicao == 1) {
            instituicao = "IFBA";
            localStorage.setItem('escola', instituicao);
        } else if (instituicao == 2) {
            instituicao = "CETEP";
            localStorage.setItem('escola', instituicao);
        } else if (instituicao == 3) {
            instituicao = "Núbia";
            localStorage.setItem('escola', instituicao);
        }

        console.log(instituicao);
        console.log(data);

        if (instituicao != 0) {
            localStorage.setItem('escola', instituicao);
            window.location.href = "../htmls/frequenciaDoDia.html";
        }
    })
}

window.addEventListener("DOMContentLoaded", escolhaF);