<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }

        #gameArea {
            position: relative;
        }

        #gameCanvas {
            border: 2px solid #000;
            background-color: #fff;
        }

        #score {
            text-align: center;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div id="gameArea">
        <canvas id="gameCanvas"></canvas>
    </div>
    <div id="score">Score: 0</div>

    <script src="script.js"></script>
</body>
</html>
