<?php
$message = "Ung dung PHP dang chay tren Apache trong Docker";
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bai 10 - PHP Apache</title>
</head>
<body>
    <h1><?php echo $message; ?></h1>
    <p>Hay mount ma nguon tu host vao /var/www/html khi chay container.</p>
</body>
</html>
