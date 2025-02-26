<?php
    $conn = new mysqli ("localhost", "root", "", "LittleYellow");

    $nome = trim($_POST['nomeD']);
    $email = trim($_POST['emailD']);
    $cpf = trim($_POST['CPFD']);
    $instituicao = trim($_POST['instituicao']);
    $senha = trim($_POST['senhaD']);

    $sql = "INSERT INTO discente (nomeD, emailD, cpfD, senhaD, idI) VALUES ('$nome', '$email', '$cpf', '$senha', '$instituicao')";

    if (mysqli_query($conn, $sql)) {
        header("Location: ../htmls/login.html");
    }

    mysqli_close($conn);
?>