<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avaliação</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="AvaliaçãoM">
        <h1>Avaliação do <br>Motorista</h1>
        <?php
            $conn = mysqli_connect ("localhost", "root", "", "LittleYellow");

            $rsMotoristas = mysqli_query($conn, "SELECT * FROM motorista");
            $motoristas = array();
            $i = 0;
            while($motorista = mysqli_fetch_assoc($rsMotoristas)){
                $motoristas[$i] = $motorista;
                $i++;
            }
        ?>

        <form action="../conexaoBanco/avaliacao.php" id="avaliouM" method="post">
            
            <label for="escolher">Escolha quem avaliar:</label>
                <select id="escolher" name="motorista" required>
                    <option value="" selected disabled>Escolher:</option>
                    <?php
                        foreach($motoristas as $m) { ?>
                            <option value="<?php echo $m['cpfM'] ?>"><?php echo$m['nomeM'] ?></option>
                    <?php } ?>
                </select><br>
            <div id="motoristaErrado" class="erro"></div>
            <div id="motoristaCerto" class="sucesso"></div>

            <p id="notaescrita" class="nota"></p>
    
            <img src="../imagens/Estrela vazia.png" id="s1" class="estrela" onclick="Avaliar(1)">
            <img src="../imagens/Estrela vazia.png" id="s2" class="estrela" onclick="Avaliar(2)">
            <img src="../imagens/Estrela vazia.png" id="s3" class="estrela" onclick="Avaliar(3)">
            <img src="../imagens/Estrela vazia.png" id="s4" class="estrela" onclick="Avaliar(4)">
            <img src="../imagens/Estrela vazia.png" id="s5" class="estrela" onclick="Avaliar(5)">
        
            <input name="notaMotorista" id="valoravaliacao" type="hidden">

            <div id="nota" class="nota"></div>
            <div id="notaErrada" class="erro"></div>
            <div id="notaCerta" class="sucesso"></div>

            <h2>Avalie de forma escrita (opcional):</h2>

            <textarea placeholder="Digite sua mensagem" name="avaliaçãoescrita"></textarea><br><br>

            <button type="submit">Enviar sugestão</button>
        </form>
        
    </div>
</body>
</html>
<script src="../scripts/avaliacaoM.js"></script>