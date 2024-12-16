function verificarEscolha() {
    if (formu.escolha1.selectedIndex == 1) {
        alert("Vamos fazer o cadastro do discente, então!")
        window.location = "cadastroDiscente.html";
    } else if (formu.escolha1.selectedIndex == 2) {
        alert("Vamos fazer o cadastro do motorista, então!")
        window.location = "cadastroMotorista.html";
    }
}

function cadastroD() {
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        var enviarformsdiscente = "../php/enviarformsdiscente.php";

        xhr.open('POST', enviarformsdiscente, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                document.getElementById('nomeErrado').textContent = '';
                document.getElementById('nomeCerto').textContent = '';
                document.getElementById('emailErrado').textContent = '';
                document.getElementById('emailCerto').textContent = '';
                document.getElementById('cpfErrado').textContent = '';
                document.getElementById('cpfCerto').textContent = '';
                document.getElementById('instituicaoErrada').textContent = '';
                document.getElementById('instituicaoCerta').textContent = '';
                document.getElementById('senhaErrada').textContent = '';
                document.getElementById('senhaCerta').textContent = '';

                if (response.nomeErrado) {
                    document.getElementById('nomeErrado').textContent = response.nomeErrado;
                } else if (response.nomeCerto) {
                    document.getElementById('nomeCerto').textContent = response.nomeCerto;
                }

                if (response.emailErrado) {
                    document.getElementById('emailErrado').textContent = response.emailErrado;
                } else if (response.emailCerto) {
                    document.getElementById('emailCerto').textContent = response.emailCerto;
                }

                if (response.cpfErrado) {
                    document.getElementById('cpfErrado').textContent = response.cpfErrado;
                } else if (response.cpfCerto) {
                    document.getElementById('cpfCerto').textContent = response.cpfCerto;
                }

                if (response.instituicaoErrada) {
                    document.getElementById('instituicaoErrada').textContent = response.instituicaoErrada;
                } else if (response.instituicaoCerta) {
                    document.getElementById('instituicaoCerta').textContent = response.instituicaoCerta;
                }

                if (response.senhaErrada) {
                    document.getElementById('senhaErrada').textContent = response.senhaErrada;
                } else if (response.senhaCerta) {
                    document.getElementById('senhaCerta').textContent = response.senhaCerta;
                }

                if (response.nomeCerto && response.emailCerto && response.cpfCerto && response.instituicaoCerta && response.senhaCerta) {
                    document.getElementById('cadastroForm').submit();
                    alert("Muito bem! Seu cadastro foi concluído com sucesso.\nPara acessar nosso site, faça o login!")
                }
            }
        };
        xhr.send(formData);
        
    });
}

function cadastroM() {
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        var enviarformsmotorista = "../php/enviarformsmotorista.php";

        xhr.open('POST', enviarformsmotorista, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                document.getElementById('nomeErrado').textContent = '';
                document.getElementById('nomeCerto').textContent = '';
                document.getElementById('emailErrado').textContent = '';
                document.getElementById('emailCerto').textContent = '';
                document.getElementById('cpfErrado').textContent = '';
                document.getElementById('cpfCerto').textContent = '';
                document.getElementById('senhaErrada').textContent = '';
                document.getElementById('senhaCerta').textContent = '';

                if (response.nomeErrado) {
                    document.getElementById('nomeErrado').textContent = response.nomeErrado;
                } else if (response.nomeCerto) {
                    document.getElementById('nomeCerto').textContent = response.nomeCerto;
                }

                if (response.emailErrado) {
                    document.getElementById('emailErrado').textContent = response.emailErrado;
                } else if (response.emailCerto) {
                    document.getElementById('emailCerto').textContent = response.emailCerto;
                }

                if (response.cpfErrado) {
                    document.getElementById('cpfErrado').textContent = response.cpfErrado;
                } else if (response.cpfCerto) {
                    document.getElementById('cpfCerto').textContent = response.cpfCerto;
                }

                if (response.senhaErrada) {
                    document.getElementById('senhaErrada').textContent = response.senhaErrada;
                } else if (response.senhaCerta) {
                    document.getElementById('senhaCerta').textContent = response.senhaCerta;
                }

                if (response.nomeCerto && response.emailCerto && response.cpfCerto && response.senhaCerta) {
                    document.getElementById('cadastroForm').submit();
                    alert("Muito bem! Seu cadastro foi concluído com sucesso.\nPara acessar nosso site, faça o login!")
                }
            }
        };

        xhr.send(formData);
    });
}

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