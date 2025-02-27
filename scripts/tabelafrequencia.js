function escolhaF() {
    const tabela = document.getElementById("tabelaF");

    tabela.addEventListener('click', function(event){
        const cabecalho = tabela.rows[0]; 
        instituicao = event.target.parentNode.rowIndex;
        const coluna = event.target.cellIndex; 

        if (coluna >= 0) { 
            const data = cabecalho.cells[coluna].textContent; 
            localStorage.setItem('dia', data); 
        }

        if (instituicao) {
            localStorage.setItem('escola', instituicao);
            window.location.href = "../htmls/frequenciaDoDia.php";
        }
    })
}

window.addEventListener("DOMContentLoaded", escolhaF);