<?php
    $conn = new mysqli ("localhost", "root", "", "LittleYellow");

    $motorista = trim($_POST['motorista']);
    $nota = trim($_POST['notaMotorista']);
    $avaliacaoEscrita = trim($_POST['avaliaçãoescrita']);

    $sql = "INSERT INTO avaliacao (cpfM, estrelas, AvEscrita) VALUES ('$motorista', '$nota', '$avaliacaoEscrita')";

    if (mysqli_query($conn, $sql)) {
        header("Location: ../htmls/recursos.html");
    }

    mysqli_close($conn);
?>