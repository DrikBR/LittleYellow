function selecionarDiscente() {
    const caixaPresenca = document.querySelector('.caixaPresenca');
    const listaPresenca = document.querySelector('.listaPresenca');
    const discente = document.querySelector('.discente');
    const inputDiscente = document.getElementById('discentevalor');

    function atualizarSelecionados() {
        let escolhidos = Array.from(discente.querySelectorAll('input:checked'))
            .map(checkbox => checkbox.value);
        inputDiscente.value = escolhidos.join(", ");
    }

    discente.addEventListener('change', atualizarSelecionados);

    listaPresenca.addEventListener('click', () => {
    caixaPresenca.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!caixaPresenca.contains(event.target)) {
            caixaPresenca.classList.remove('open');
        }
    })
}

function cadastroF() {
    selecionarDiscente();
    document.getElementById('cadastroFreq').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        var enviarformsfrequencia = "../php/enviarformsfrequencia.php";

        xhr.open('POST', enviarformsfrequencia, true);

        xhr.onload = function() {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);

                document.getElementById('dataErrada').textContent = '';
                document.getElementById('dataCerta').textContent = '';
                document.getElementById('turnoErrado').textContent = '';
                document.getElementById('turnoCerto').textContent = '';
                document.getElementById('discenteErrado').textContent = '';
                document.getElementById('discenteCerto').textContent = '';

                if (response.dataErrada) {
                    document.getElementById('dataErrada').textContent = response.dataErrada;
                } else if (response.dataCerta) {
                    document.getElementById('dataCerta').textContent = response.dataCerta;
                }

                if (response.turnoErrado) {
                    document.getElementById('turnoErrado').textContent = response.turnoErrado;
                } else if (response.turnoCerto) {
                    document.getElementById('turnoCerto').textContent = response.turnoCerto;
                }

                if (response.discenteErrado) {
                    document.getElementById('discenteErrado').textContent = response.discenteErrado;
                } else if (response.discenteCerto) {
                    document.getElementById('discenteCerto').textContent = response.discenteCerto;
                }

                if (response.dataCerta && response.turnoCerto && response.discenteCerto) {
                    document.getElementById('cadastroFreq').submit();
                    alert("Deu certo! A frequência foi realizada com sucesso.")
                }
            }
        };

        xhr.send(formData);
    });
}

window.addEventListener("DOMContentLoaded", cadastroF);