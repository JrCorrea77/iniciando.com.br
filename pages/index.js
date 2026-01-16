function Home(){
#    return <h1> Página em construção. Será a minha primeira página na web!</h1> /#
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Em Construção</title>
    <style>
        /* Reset e Configurações Básicas */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            /* Tema Escuro Moderno (similar ao GitHub Dark) */
            background-color: #0d1117;
            color: #c9d1d9;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        }

        /* Container Principal */
        .container {
            max-width: 600px;
            padding: 40px;
            border-radius: 16px;
            background: rgba(22, 27, 34, 0.8); /* Fundo ligeiramente translúcido */
            border: 1px solid #30363d;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        /* --- Arte Gráfica em CSS (Engrenagens) --- */
        .graphic-container {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto 30px auto;
        }

        .gear {
            position: absolute;
            width: 60px;
            height: 60px;
            background: #58a6ff; /* Azul GitHub */
            border-radius: 50%;
        }

        /* Criando os dentes da engrenagem com pseudo-elementos */
        .gear::before, .gear::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: inherit;
            border-radius: inherit;
        }
        .gear::before { transform: rotate(30deg); }
        .gear::after { transform: rotate(60deg); }

        /* Buraco central da engrenagem */
        .gear-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 25px;
            height: 25px;
            background: #0d1117; /* Mesma cor do fundo principal */
            border-radius: 50%;
            z-index: 2;
        }

        /* Posicionamento e Animação das duas engrenagens */
        .gear-one {
            top: 10px;
            left: 10px;
            animation: spin-right 6s linear infinite;
        }

        .gear-two {
            bottom: 10px;
            right: 10px;
            opacity: 0.7;
            transform: scale(0.8);
            animation: spin-left 6s linear infinite;
        }

        @keyframes spin-right {
            100% { transform: rotate(360deg); }
        }
        @keyframes spin-left {
            100% { transform: rotate(-360deg) scale(0.8); }
        }
        /* --------------------------------------- */

        /* Tipografia */
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 600;
            color: #ffffff;
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #8b949e;
            margin-bottom: 2rem;
        }

        /* Botão opcional para o repositório */
        .btn-repo {
            display: inline-block;
            padding: 12px 24px;
            font-size: 0.9rem;
            font-weight: 600;
            color: #ffffff;
            background-color: #238636; /* Verde GitHub */
            text-decoration: none;
            border-radius: 6px;
            transition: background-color 0.2s;
        }

        .btn-repo:hover {
            background-color: #2ea043;
        }

    </style>
</head>
<body>

    <div class="container">
        <div class="graphic-container">
            <div class="gear gear-one"><div class="gear-inner"></div></div>
            <div class="gear gear-two"><div class="gear-inner"></div></div>
        </div>

        <h1>Algo incrível está sendo construído.</h1>
        <p>Estamos trabalhando nos bastidores para preparar esta seção do projeto. O código está fluindo e em breve teremos novidades por aqui.</p>

        </div>

</body>
</html>

}

export default Home;
