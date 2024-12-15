<?php
// Verificar se o formulário foi enviado via POST (AJAX)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarCadastro();
}

function validarCadastro() {
    // Receber os dados do formulário
    $nome = trim($_POST['nomeM']);
    $email = trim($_POST['emailM']);
    $cpf = trim($_POST['CPFM']);
    $senha = trim($_POST['senhaM']);

    // Array para armazenar as mensagens de erro ou sucesso
    $response = [];

    // Validação do nome
    if (empty($nome)) {
        $response['nomeError'] = 'O nome não pode estar vazio.';
    } elseif (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $nome)) {
        $response['nomeError'] = 'O nome deve conter apenas letras e espaços.';
    } else {
        $response['nomeSuccess'] = 'Nome válido!';
    }

    // Validação do e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['emailError'] = 'E-mail inválido. Por favor, insira um e-mail válido.';
    } else {
        $response['emailSuccess'] = 'E-mail válido!';
    }

    // Validação do CPF (apenas formato básico para o exemplo)
    if (!preg_match("/^\d{3}\.\d{3}\.\d{3}-\d{2}$/", $cpf)) {
        $response['cpfError'] = 'CPF inválido. Utilize o formato: XXX.XXX.XXX-XX.';
    } else {
        $response['cpfSuccess'] = 'CPF válido!';
    }

    // Validação da senha
    if (empty($senha)) {
        $response['senhaError'] = 'A senha não pode estar vazia.';
    } elseif (strlen($senha) < 6) {
        $response['senhaError'] = 'A senha deve conter pelo menos 6 caracteres.';
    } else {
        $response['senhaSuccess'] = 'Senha válida!';
    }

    // Retornar a resposta em formato JSON
    echo json_encode($response);
}
