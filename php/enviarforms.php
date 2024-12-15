<?php
// Verificar se o formulário foi enviado via POST (AJAX)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Chamar a função de validação
    validarFormulario();
}


function validarFormulario() {
    // Receber os dados do formulário
    $email = $_POST['email'];
    $senha = $_POST['senha'];


    // Array para armazenar as mensagens de erro ou sucesso
    $response = [];


    // Validação do e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['emailError'] = 'E-mail não encontrado no sistema. Por favor, tente novamente.';
    } else {
        $response['emailSuccess'] = 'E-mail válido!';
    }


    // Validação da senha (verifica se não está vazia)
    if (empty($senha)) {
        $response['senhaError'] = 'A senha não pode estar vazia.';
    } else {
        $response['senhaSuccess'] = 'Senha preenchida corretamente.';
    }


    // Retornar a resposta em formato JSON
    echo json_encode($response);
}
?>
