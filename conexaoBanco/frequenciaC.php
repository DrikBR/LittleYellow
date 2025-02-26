<?php
    $conn = new mysqli ("localhost", "root", "", "LittleYellow");

    $data = trim($_POST['data']);
    $turno = trim($_POST['turno']);
    $discente = trim($_POST['discente']);

    $discentes = array_map('trim', explode(",", $discente));

    $sql1 = "SELECT MAX(idF) AS ultimo_id FROM frequencia";
    $resultado = $conn->query($sql1);

    if ($resultado->num_rows > 0) {
        $row = $resultado->fetch_assoc();
        $idAtual = $row['ultimo_id'] + 1;
    }

    foreach ($discentes as $d) {
        $sql2 = "INSERT INTO frequencia (idF, turno, dataF, cpfD) VALUES ('$idAtual', '$turno', '$data', '$d')";
        mysqli_query($conn, $sql2);
    }

    header("Location: ../htmls/recursos.html");

    mysqli_close($conn);
?>