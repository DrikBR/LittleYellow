function login() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        var enviarforms = "../php/enviarforms.php";

        xhr.open('POST', enviarforms, true);

        xhr.onload = function() {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);

                document.getElementById('emailErrado').textContent = '';
                document.getElementById('senhaErrada').textContent = '';
                document.getElementById('emailCerto').textContent = '';
                document.getElementById('senhaCerta').textContent = '';

                if (response.emailErrado) {
                    document.getElementById('emailErrado').textContent = response.emailErrado;
                } else if (response.emailCerto) {
                    document.getElementById('emailCerto').textContent = response.emailCerto;
                }

                if (response.senhaErrada) {
                    document.getElementById('senhaErrada').textContent = response.senhaErrada;
                } else if (response.senhaCerta) {
                    document.getElementById('senhaCerta').textContent = response.senhaCerta;
                }

                if (response.emailCerto && response.senhaCerta) {
                    document.getElementById('loginForm').submit();
                    alert("Deu certo! Seu login foi concluído.\nAproveite nossos recursos!")
                }
            }
        };

        xhr.send(formData);
    });
}

function verificarEscolha() {
    if (formu.escolha1.selectedIndex == 1) {
        alert("Vamos fazer o cadastro do discente, então!")
        window.location = "cadastroDiscente.html";
    } else if (formu.escolha1.selectedIndex == 2) {
        alert("Vamos fazer o cadastro do motorista, então!")
        window.location = "cadastroMotorista.html";
    }
}

window.addEventListener("DOMContentLoaded", login);