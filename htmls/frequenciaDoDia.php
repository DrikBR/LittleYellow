<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frequência do dia</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <form id="formEnvio" action="frequenciaDoDia.php" method="POST">
        <input type="hidden" name="escola" id="escola">
        <input type="hidden" name="dia" id="dia">
    </form>

    <div class="container">
        <?php
            $conn = mysqli_connect ("localhost", "root", "", "LittleYellow");

            $rsFrequencia = mysqli_query($conn, "SELECT * FROM frequencia");
            $frequenciaA = array();
            $i = 0;
            while($frequencia = mysqli_fetch_assoc($rsFrequencia)){
                $frequenciaA[$i] = $frequencia;
                $i++;
            }

            $rsDiscente = mysqli_query($conn, "SELECT nomeD, cpfD, idI FROM discente");
            $discentes = array();
            $i = 0;
            while($discente = mysqli_fetch_assoc($rsDiscente)){
                $discentes[$i] = $discente;
                $i++;
            }

            $rsInstituicao = mysqli_query($conn, "SELECT * FROM instituicao");
            $instituicoes = array();
            $i = 0;
            while($instituicao = mysqli_fetch_assoc($rsInstituicao)){
                $instituicoes[$i] = $instituicao;
                $i++;
            }

            $escola = isset($_POST['escola']) ? $_POST['escola'] : ''; //ID da instituição
            $dia = isset($_POST['dia']) ? $_POST['dia'] : '';

            $colegio = ""; //nome da instituição

            foreach($instituicoes as $i) { 
                if ((string)$escola === (string)$i['idI']) {
                    $colegio = $i['nomeI'];
                    break;
                }
            }
        ?>

        <h1 class="titulo">Frequência do <?php echo htmlspecialchars($colegio); ?> <br> <?php echo htmlspecialchars($dia); ?></h1>

        <div class="tabela-container">
            <table border="1" id="tabelaF">
                <tr class="cabecalho">
                    <th>ALUNO</th>
                    <th>TURNO</th>
                </tr>

                <?php
                    $cpfPresente = array();
                    foreach($frequenciaA as $f) { 
                        if ($f['dataF'] == $dia) {
                            $cpfPresente[] = $f['cpfD'];
                        }
                    }

                    foreach($discentes as $d) {
                        if (in_array($d['cpfD'], $cpfPresente) && $d['idI'] == $escola) { 
                            foreach ($frequenciaA as $f) { 
                                if ($f['cpfD'] == $d['cpfD'] && $f['dataF'] == $dia) {?>
                                    <tr class="restotb">
                                        <td><?php echo $d['nomeD'] ?></td>
                                        <td><?php echo $f['turno'] ?></td>
                                    </tr>
                                <?php }
                            }
                        }
                    }
                    ?>
            </table> <br>
        </div>
        <br>
        <a href="frequenciaGeral.php">Voltar para a seleção da frequência</a>
    </div>
</body>
</html>
<script src="../scripts/tabeladiaF.js"></script>