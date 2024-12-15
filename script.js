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

                // Limpa mensagens anteriores
                document.getElementById('nomeError').textContent = '';
                document.getElementById('nomeSuccess').textContent = '';
                document.getElementById('emailError').textContent = '';
                document.getElementById('emailSuccess').textContent = '';
                document.getElementById('cpfError').textContent = '';
                document.getElementById('cpfSuccess').textContent = '';
                document.getElementById('instituicaoError').textContent = '';
                document.getElementById('instituicaoSuccess').textContent = '';
                document.getElementById('senhaError').textContent = '';
                document.getElementById('senhaSuccess').textContent = '';

                // Mostra mensagens baseadas na resposta
                if (response.nomeError) {
                    document.getElementById('nomeError').textContent = response.nomeError;
                } else if (response.nomeSuccess) {
                    document.getElementById('nomeSuccess').textContent = response.nomeSuccess;
                }

                if (response.emailError) {
                    document.getElementById('emailError').textContent = response.emailError;
                } else if (response.emailSuccess) {
                    document.getElementById('emailSuccess').textContent = response.emailSuccess;
                }

                if (response.cpfError) {
                    document.getElementById('cpfError').textContent = response.cpfError;
                } else if (response.cpfSuccess) {
                    document.getElementById('cpfSuccess').textContent = response.cpfSuccess;
                }

                if (response.instituicaoError) {
                    document.getElementById('instituicaoError').textContent = response.instituicaoError;
                } else if (response.instituicaoSuccess) {
                    document.getElementById('instituicaoSuccess').textContent = response.instituicaoSuccess;
                }

                if (response.senhaError) {
                    document.getElementById('senhaError').textContent = response.senhaError;
                } else if (response.senhaSuccess) {
                    document.getElementById('senhaSuccess').textContent = response.senhaSuccess;
                }

                if (response.nomeSuccess && response.emailSuccess && response.cpfSuccess && response.instituicaoSuccess && response.senhaSuccess) {
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

                document.getElementById('nomeError').textContent = '';
                document.getElementById('nomeSuccess').textContent = '';
                document.getElementById('emailError').textContent = '';
                document.getElementById('emailSuccess').textContent = '';
                document.getElementById('cpfError').textContent = '';
                document.getElementById('cpfSuccess').textContent = '';
                document.getElementById('senhaError').textContent = '';
                document.getElementById('senhaSuccess').textContent = '';

                if (response.nomeError) {
                    document.getElementById('nomeError').textContent = response.nomeError;
                } else if (response.nomeSuccess) {
                    document.getElementById('nomeSuccess').textContent = response.nomeSuccess;
                }

                if (response.emailError) {
                    document.getElementById('emailError').textContent = response.emailError;
                } else if (response.emailSuccess) {
                    document.getElementById('emailSuccess').textContent = response.emailSuccess;
                }

                if (response.cpfError) {
                    document.getElementById('cpfError').textContent = response.cpfError;
                } else if (response.cpfSuccess) {
                    document.getElementById('cpfSuccess').textContent = response.cpfSuccess;
                }

                if (response.senhaError) {
                    document.getElementById('senhaError').textContent = response.senhaError;
                } else if (response.senhaSuccess) {
                    document.getElementById('senhaSuccess').textContent = response.senhaSuccess;
                }

                if (response.nomeSuccess && response.emailSuccess && response.cpfSuccess && response.senhaSuccess) {
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

                document.getElementById('emailError').textContent = '';
                document.getElementById('senhaError').textContent = '';
                document.getElementById('emailSuccess').textContent = '';
                document.getElementById('senhaSuccess').textContent = '';

                if (response.emailError) {
                    document.getElementById('emailError').textContent = response.emailError;
                } else if (response.emailSuccess) {
                    document.getElementById('emailSuccess').textContent = response.emailSuccess;
                }

                if (response.senhaError) {
                    document.getElementById('senhaError').textContent = response.senhaError;
                } else if (response.senhaSuccess) {
                    document.getElementById('senhaSuccess').textContent = response.senhaSuccess;
                }

                if (response.emailSuccess && response.senhaSuccess) {
                    document.getElementById('loginForm').submit();
                    alert("Deu certo! Seu login foi concluído.\nAproveite nossos recursos!")
                }
            }
        };

        xhr.send(formData);
    });
}