<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarCadastro();
}

function validarCadastro() {
    $nome = trim($_POST['nomeM']);
    $email = trim($_POST['emailM']);
    $cpf = trim($_POST['CPFM']);
    $senha = trim($_POST['senhaM']);

    $resposta = [];

    if (empty($nome)) {
        $resposta['nomeErrado'] = 'O nome não pode estar vazio.';
    } elseif (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $nome)) {
        $resposta['nomeErrado'] = 'O nome deve conter apenas letras e espaços.';
    } else {
        $resposta['nomeCerto'] = 'Nome válido!';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $resposta['emailErrado'] = 'E-mail inválido. Por favor, insira um e-mail válido.';
    } else {
        $resposta['emailCerto'] = 'E-mail válido!';
    }

    if (!preg_match("/^\d{3}\.\d{3}\.\d{3}-\d{2}$/", $cpf)) {
        $resposta['cpfErrado'] = 'CPF inválido. Utilize o formato: XXX.XXX.XXX-XX.';
    } else {
        $resposta['cpfCerto'] = 'CPF válido!';
    }

    if (empty($senha)) {
        $resposta['senhaErrada'] = 'A senha não pode estar vazia.';
    } elseif (strlen($senha) < 6) {
        $resposta['senhaErrada'] = 'A senha deve conter pelo menos 6 caracteres.';
    } else {
        $resposta['senhaCerta'] = 'Senha válida!';
    }

    echo json_encode($resposta);
}
