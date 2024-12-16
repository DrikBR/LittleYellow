<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarFormulario();
}

function validarFormulario() {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $resposta = [];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $resposta['emailErrado'] = 'E-mail não encontrado no sistema. Por favor, tente novamente.';
    } else {
        $resposta['emailCerto'] = 'E-mail válido!';
    }

    if (empty($senha)) {
        $resposta['senhaErrada'] = 'A senha não pode estar vazia.';
    } else {
        $resposta['senhaCerta'] = 'Senha preenchida corretamente.';
    }

    echo json_encode($resposta);
}
?>
