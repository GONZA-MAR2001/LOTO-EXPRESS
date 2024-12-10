<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hola mundo
    <p>fecha del browser: <span id="fecha"></span></p>
    <hr>
    <p>fecha del server: <?php echo date('')
    </p>
    <script>
        var fecha = new date()
        var div = document.getElementById("fecha")
        div.innerHTML = fecha.toString()
    </script>
</body>
</html>