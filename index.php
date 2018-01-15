<?php
include './includes/config.php';
include './includes/database.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>kerk in petten</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="http://production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js"></script>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>
</head>
<body>
<div class="headOver">
    <div class="headContent">
        <p id="smallerTitle">kerk in petten<span><a href="https://www.google.nl/maps/place/Petten/@52.7621277,4.6514279,14z/data=!3m1!4b1!4m5!3m4!1s0x47cf5b24154dec07:0x6582129561329bfe!8m2!3d52.7645968!4d4.6615332?dcr=0" target="_blank"><img src="images/location-icon.png" alt="Location Icon" id="locationImg"></a></span></p>
        <p id="title">
            #WATMOETERINDEKERK?

        </p>

    </div>

</div>
<div class="head">
</div>


<main class="story">
    <div class="kerk">
        <div class="scenario1"></div>
        <div class="scenario2"></div>
        <div class="scenario3"></div>
    </div>
</main>

<footer class="comments">
    <div class="concepts">
        <?php
        include "model/select.php";
        ?>
    </div>
    <div class="commentBox">
        <div class="conceptPitch"><p>Heb jij een geweldig idee voor onze kerk? pitch dan hier je concept.<br><button id="k1">Pitch</button></p>
            </div>
            <div class="conceptImg" style="background-image: url(parralax2.jpg)"></div>

    </div>
</footer>

<div id="inhoud1">
    <form action="model/insert.php" method="post" enctype="multipart/form-data">
    <h3>contact</h3>
    <h3>naam:</h3>
    <input class="rand" type="text" name="personName">
    <h3>Concept naam:</h3>
    <input class="rand" type="text" name="conceptName">
    <h3>Bedrijfs naam:</h3>
    <input class="rand" type="text" name="Email">
    <h3>Email:</h3>
    <input class="rand" type="text" name="companyName">
    <h3>afbeelding</h3>
    <input type="file" name="file" value="afbeelding">
    <h3></h3>
    <textarea name="text" rows="8" cols="30" placeholder="Mijn idee is..."></textarea>
    <h3></h3>
    <input id="submit" type="submit" name="name" value="submit">
    </form>
</div>



<div id="grijzeAchtergrond"></div>


<script src="modaal.js"></script>

<script src="script.js"></script>
</body>
</html>
