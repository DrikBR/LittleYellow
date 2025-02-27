<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frequência</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class = "CadastroF">
        <h1>Frequência</h1> <br>

        <?php
            $conn = mysqli_connect ("localhost", "root", "", "LittleYellow");

            $rsDiscentes = mysqli_query($conn, "SELECT * FROM discente");
            $discentes = array();
            $i = 0;
            while($discente = mysqli_fetch_assoc($rsDiscentes)){
                $discentes[$i] = $discente;
                $i++;
            }
        ?>

        <form action="../conexaoBanco/frequenciaC.php" name="frequencia" id="cadastroFreq" method="post">
            
            <label for="data">DATA:</label>
            <input type="date" id="data" name="data" required>
            <div id="dataErrada" class="erro"></div>
            <div id="dataCerta" class="sucesso"></div>

            <label for="escolher">TURNO:</label>
            <select id="escolher" name="turno" required>
                <option value="" selected disabled>Escolher:</option>
                <option value="MATUTINO">Matutino</option>
                <option value="VESPERTINO">Vespertino</option>
                <option value="NOTURNO">Noturno</option>
            </select><br>
            <div id="turnoErrado" class="erro"></div>
            <div id="turnoCerto" class="sucesso"></div>
            
            <label>PRESENÇA:</label>
            <div class="caixaPresenca" onclick="selecionarDiscente()">
                <div class="listaPresenca"><label class="tituloescolha"> Escolha os discentes: </label></div>
                <div class="discente">
                    <?php
                        foreach($discentes as $d) { ?>
                            <label><input type="checkbox" value="<?php echo $d['cpfD'] ?>"><?php echo$d['nomeD'] ?></label>
                    <?php } ?>
                </div>
            </div> 
            <input name="discente" id="discentevalor" type="hidden"> <br>
            <div id="discenteErrado" class="erro"></div>
            <div id="discenteCerto" class="sucesso"></div>

            <button type="submit">Enviar</button><br>
        
        </form>
        <br>
        <a href = "frequenciaGeral.php">Frequência Geral</a> <br>
        
    </div>
</body>
</html>
<script src="../scripts/frequencia.js"> </script>