<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabela da frequência geral</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="container">
        <h1 class="titulo">Frequência</h1>

        <?php
            $conn = mysqli_connect ("localhost", "root", "", "LittleYellow");

            $rsFrequencia = mysqli_query($conn, "SELECT * FROM frequencia");
            $frequenciaA = array();
            $i = 0;
            while($frequencia = mysqli_fetch_assoc($rsFrequencia)){
                $frequenciaA[$i] = $frequencia;
                $i++;
            }
        ?>

        <div class="tabela-container">
            <table border="1" id="tabelaF">
                <tr class="cabecalho">
                    <?php
                        $datas_exibidas = [];
                        foreach ($frequenciaA as $f) {
                            if (!in_array($f['dataF'], $datas_exibidas)) { ?>
                                <th><?php echo$f['dataF'] ?></th> <?php
                                $datas_exibidas[] = $f['dataF'];
                            } }
                    ?>
                </tr>
                <tr class="restotb">
                    <td>IFBA</td>
                    <td>IFBA</td>
                    <td>IFBA</td>
                </tr>
                <tr class="restotb">
                    <td>CETEP</td>
                    <td>CETEP</td>
                    <td>CETEP</td>
                </tr>
                <tr class="restotb">
                    <td>Núbia</td>
                    <td>Núbia</td>
                    <td>Núbia</td>
                </tr>
            </table> <br>
        </div>
        <br>
        <a href = "recursos.html">Voltar para a tela de recursos</a>
    </div>
</body>
</html>
<script src="../scripts/tabelafrequencia.js"></script>