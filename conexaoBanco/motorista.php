<?php
    $conn = new mysqli ("localhost", "root", "", "LittleYellow");

    $nome = trim($_POST['nomeM']);
    $email = trim($_POST['emailM']);
    $cpf = trim($_POST['CPFM']);
    $senha = trim($_POST['senhaM']);

    $sql = "INSERT INTO motorista (nomeM, emailM, cpfM, senhaM) VALUES ('$nome', '$email', '$cpf', '$senha')";

    if (mysqli_query($conn, $sql)) {
        header("Location: ../htmls/login.html");
    }

    mysqli_close($conn);
?>