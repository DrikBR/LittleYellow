function verificarEscolha() {
    if (formu.escolha1.selectedIndex == 1) {
        alert("Vamos fazer o cadastro do discente, então!")
        window.location = "cadastroDiscente.html";
    } else if (formu.escolha1.selectedIndex == 2) {
        alert("Vamos fazer o cadastro do motorista, então!")
        window.location = "cadastroMotorista.html";
    }
}

function verificarEscolha2() {
    instituicao = null;
    if (aluno.escolha2.selectedIndex == 1) {
        instituicao = "IFBA";
    } else if (aluno.escolha2.selectedIndex == 2) {
        instituicao = "CETEP";
    } else if (aluno.escolha2.selectedIndex == 3) {
        instituicao = "Núbia";
    }
    return (instituicao);
}

function cadastroConcluido() {
    alert("Muito bem! Seu cadastro foi concluído com sucesso")
    alert("Para acessar nosso site, faça o login")
}

function loginConcluido() {
    alert("Deu certo! Seu login foi concluído")
    alert("Aproveite nossos recursos")
}