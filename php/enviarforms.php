<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarFormulario();
}

function validarFormulario() {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $response = [];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['emailError'] = 'E-mail não encontrado no sistema. Por favor, tente novamente.';
    } else {
        $response['emailSuccess'] = 'E-mail válido!';
    }

    if (empty($senha)) {
        $response['senhaError'] = 'A senha não pode estar vazia.';
    } else {
        $response['senhaSuccess'] = 'Senha preenchida corretamente.';
    }

    echo json_encode($response);
}
?>
