function estrela() {
    imagem1 = document.getElementById('s1');
    imagem2 = document.getElementById('s2');
    imagem3 = document.getElementById('s3');
    imagem4 = document.getElementById('s4');
    imagem5 = document.getElementById('s5');
    notaescrita = document.getElementById('notaescrita');

    imagem1.addEventListener("mouseover", function() {
        imagem1.src = "../imagens/Estrela preenchida.png"
        imagem2.src = "../imagens/Estrela vazia.png"
        imagem3.src = "../imagens/Estrela vazia.png"
        imagem4.src = "../imagens/Estrela vazia.png"
        imagem5.src = "../imagens/Estrela vazia.png"
        notaescrita.textContent = "Péssimo"
    });
    

    imagem2.addEventListener("mouseover", function() {
        imagem1.src = "../imagens/Estrela preenchida.png"
        imagem2.src = "../imagens/Estrela preenchida.png"
        imagem3.src = "../imagens/Estrela vazia.png"
        imagem4.src = "../imagens/Estrela vazia.png"
        imagem5.src = "../imagens/Estrela vazia.png"
        notaescrita.textContent = "Ruim"
    });
    

    imagem3.addEventListener("mouseover", function() {
        imagem1.src = "../imagens/Estrela preenchida.png"
        imagem2.src = "../imagens/Estrela preenchida.png"
        imagem3.src = "../imagens/Estrela preenchida.png"
        imagem4.src = "../imagens/Estrela vazia.png"
        imagem5.src = "../imagens/Estrela vazia.png"
        notaescrita.textContent = "Normal"
    });
    

    imagem4.addEventListener("mouseover", function() {
        imagem1.src = "../imagens/Estrela preenchida.png"
        imagem2.src = "../imagens/Estrela preenchida.png"
        imagem3.src = "../imagens/Estrela preenchida.png"
        imagem4.src = "../imagens/Estrela preenchida.png"
        imagem5.src = "../imagens/Estrela vazia.png"
        notaescrita.textContent = "Bom"
    });
    

    imagem5.addEventListener("mouseover", function() {
        imagem1.src = "../imagens/Estrela preenchida.png"
        imagem2.src = "../imagens/Estrela preenchida.png"
        imagem3.src = "../imagens/Estrela preenchida.png"
        imagem4.src = "../imagens/Estrela preenchida.png"
        imagem5.src = "../imagens/Estrela preenchida.png"
        notaescrita.textContent = "Excelente"
    });
    
}

function Avaliar($numero) {
    nota = document.getElementById('nota');
    if ($numero == 1){
        nota.textContent = "A nota avaliada foi " + $numero + " estrela";
    } else {
        nota.textContent = "A nota avaliada foi " + $numero + " estrelas";
    }
    
    document.getElementById('valoravaliacao').value = $numero;
}

function AvaliarM() {
    document.getElementById('avaliouM').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        var avaliouMot = "../php/avaliouMot.php";

        xhr.open('POST', avaliouMot, true);

        xhr.onload = function() {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);

                document.getElementById('motoristaErrado').textContent = '';
                document.getElementById('motoristaCerto').textContent = '';
                document.getElementById('notaErrada').textContent = '';
                document.getElementById('notaCerta').textContent = '';

                if (response.motoristaErrado) {
                    document.getElementById('motoristaErrado').textContent = response.motoristaErrado;
                } else if (response.motoristaCerto) {
                    document.getElementById('motoristaCerto').textContent = response.motoristaCerto;
                }

                if (response.notaErrada) {
                    document.getElementById('notaErrada').textContent = response.notaErrada;
                } else if (response.notaCerta) {
                    document.getElementById('notaCerta').textContent = response.notaCerta;
                }

                if (response.motoristaCerto && response.notaCerta) {
                    document.getElementById('avaliouM').submit();
                    alert("Deu certo! Você acabou de avaliar o motorista!\nObrigado pelo feedback")
                }
            }
        };

        xhr.send(formData);
    });
}

window.addEventListener("DOMContentLoaded", estrela);
window.addEventListener("DOMContentLoaded", AvaliarM);