<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarCadastro();
}

function validarCadastro() {
    $nome = trim($_POST['nomeD']);
    $email = trim($_POST['emailD']);
    $cpf = trim($_POST['CPFD']);
    $instituicao = trim($_POST['instituicao']);
    $senha = trim($_POST['senhaD']);

    $response = [];

    if (empty($nome)) {
        $response['nomeError'] = 'O nome não pode estar vazio.';
    } elseif (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $nome)) {
        $response['nomeError'] = 'O nome deve conter apenas letras e espaços.';
    } else {
        $response['nomeSuccess'] = 'Nome válido!';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['emailError'] = 'E-mail inválido. Por favor, insira um e-mail válido.';
    } else {
        $response['emailSuccess'] = 'E-mail válido!';
    }

    if (!preg_match("/^\d{3}\.\d{3}\.\d{3}-\d{2}$/", $cpf)) {
        $response['cpfError'] = 'CPF inválido. Utilize o formato: XXX.XXX.XXX-XX.';
    } else {
        $response['cpfSuccess'] = 'CPF válido!';
    }

    if (empty($instituicao)) {
        $response['instituicaoError'] = 'Por favor, selecione uma instituição de ensino.';
    } else {
        $response['instituicaoSuccess'] = 'Instituição selecionada com sucesso!';
    }

    if (empty($senha)) {
        $response['senhaError'] = 'A senha não pode estar vazia.';
    } elseif (strlen($senha) < 6) {
        $response['senhaError'] = 'A senha deve conter pelo menos 6 caracteres.';
    } else {
        $response['senhaSuccess'] = 'Senha válida!';
    }

    echo json_encode($response);
}
?>
