<?php
$conn = new mysqli ("localhost", "root", "", "LittleYellow");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    validarFormulario($conn);
}

function validarFormulario($conn) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $resposta = [];

    $sql = "SELECT senhaD FROM discente WHERE emailD = ?";
    $resultado = $conn->prepare($sql);
    $resultado->bind_param("s", $email);
    $resultado->execute();
    $resultado->store_result();

    $sql2 = "SELECT senhaM FROM motorista WHERE emailM = ?";
    $resultado2 = $conn->prepare($sql2);
    $resultado2->bind_param("s", $email);
    $resultado2->execute();
    $resultado2->store_result();

    $senhaD = null;
    $senhaM = null;

    if ($resultado->num_rows > 0) {

        $resultado->bind_result($senhaD);
        $resultado->fetch();

        $resposta['emailCerto'] = 'E-mail encontrado!';

        if ($senhaD == $senha) {
            $resposta['senhaCerta'] = 'Senha preenchida corretamente.';

        } else {
            $resposta['senhaErrada'] = 'Sua senha está incorreta. Por favor, tente novamente.';
        }

    } else if ($resultado2->num_rows > 0) {

        $resultado2->bind_result($senhaM);
        $resultado2->fetch();

        $resposta['emailCerto'] = 'E-mail encontrado!';

        if ($senhaM == $senha) {
            $resposta['senhaCerta'] = 'Senha preenchida corretamente.';

        } else {
            $resposta['senhaErrada'] = 'Sua senha está incorreta. Por favor, tente novamente.';
        }
        
    } else {
        $resposta['emailErrado'] = 'E-mail não encontrado no sistema. Por favor, tente novamente.';
        $resposta['senhaErrada'] = 'Sua senha está incorreta. Por favor, tente novamente.';
    }
    
    $conn->close();
    $resultado->close();
    $resultado2->close();

    echo json_encode($resposta);
}
?>