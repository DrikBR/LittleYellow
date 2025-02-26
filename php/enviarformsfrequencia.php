<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarCadastro();
}

function validarCadastro() {
    $data = trim($_POST['data']);
    $turno = trim($_POST['turno']);
    $discente = trim($_POST['discente']);

    $resposta = [];

    if (empty($data)) {
        $resposta['dataErrada'] = 'Por favor, selecione uma data para a frequência.';
    } else {
        $resposta['dataCerta'] = 'Data selecionada com sucesso!';
    }

    if (empty($turno)) {
        $resposta['turnoErrado'] = 'Por favor, selecione um turno para a frequência.';
    } else {
        $resposta['turnoCerto'] = 'Turno selecionado com sucesso!';
    }

    if (empty($discente)) {
        $resposta['discenteErrado'] = 'Não é possível realizar a frequência sem alunos.';
    } else {
        $resposta['discenteCerto'] = 'Os discentes foram registrados com sucesso!';
    }

    echo json_encode($resposta);
}
?>