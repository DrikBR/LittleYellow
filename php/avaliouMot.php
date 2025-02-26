<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarAvaliacao();
}

function validarAvaliacao() {
    $motorista = trim($_POST['motorista']);
    $nota = trim($_POST['notaMotorista']);
    $avaliacaoEscrita = trim($_POST['avaliaçãoescrita']);

    $resposta = [];

    if (empty($motorista)) {
        $resposta['motoristaErrado'] = 'Por favor, selecione um motorista para avaliar';
    } else {
        $resposta['motoristaCerto'] = 'Motorista selecionado com sucesso!';
    }

    if (empty($nota)) {
        $resposta['notaErrada'] = 'Por favor, atribua uma nota ao motorista';
    } else {
        $resposta['notaCerta'] = 'Nota atribuída com sucesso!';
    }

    echo json_encode($resposta);
}
?>