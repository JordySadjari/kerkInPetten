<?php



$sql = 'SELECT * FROM kerk';
$result = $mysqli->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_object()) {



        echo '<div class="concept"><div class="conceptImg" style="background-image: url(' . $row->image . ');"></div><div class="conceptPitch"><h3>'. $row->naamConcept .'</h3>
                <p>' . $row->content . '</p><p class="smallerContent">' . $row->naamPersoon . '<br> ' . $row->naamBedrijf . '</p>
                </div></div>';
    }
}