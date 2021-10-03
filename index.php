<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/Draggable.min.js"></script>
    <script src="scripts/canvas2image.min.js"></script>
    <script src="scripts/html2canvas.min.js"></script>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="styles/style.css">
    <meta charset="utf-8"/>
    <title>MIRotterdam Ontwerpomgeving</title>
</head>
<body>

<div class="menu" id="menu"></div>

<button class="menu-button" id="menu-button"></button>

<div class="container">
    <div id="canvas" class="canvas"></div>
    <div class="options" id="options">
        <button class="option-button scale" id="scale-slider-button"></button>
        <label for="scale-slider"><input type="range" class="slider" id="scale-slider"></label>
        <button class="option-button ok" id="ok"></button>
    </div>
</div>

</body>
<script src="scripts/get-images.php"></script>
<script src="scripts/menu-slider.js"></script>
<script src="scripts/screenshot-canvas.js"></script>
<script src="scripts/scripts.js"></script>

</html>
