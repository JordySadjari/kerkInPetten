<?php
include '../includes/config.php';
include '../includes/database.php';


//upload file naar de server
//var_dump($_FILES);
$image_path = '../images/';
$target_file = $image_path . basename($_FILES["file"]["name"]);
$filename = $_FILES['file']['name'];
var_dump($target_file);
var_dump($image_path);

$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
var_dump($imageFileType);
$image_size = getimagesize($_FILES['file']['tmp_name']);
var_dump($image_size);
////check of het een image is
if($image_size==FALSE){
    echo "is geen image";
}
if ($_FILES["file"]["size"] > 2048000) {
    echo "image is te groot";
}
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
    echo "image is niet goeie formaat";
}
if ($filename == "image.png"){
    $filename = 'image' . rand(0,999999) . '.png';
}

if ($filename == "image.jpeg"){
    $filename = 'image' . rand(0,999999) . '.jpeg';
}

if ($filename == "image.jpg"){
    $filename = 'image' . rand(0,999999) . '.jpg';
}

$tmp_filename = $_FILES['file']['tmp_name'];
$destination = $image_path . $filename;
$destination2 = "kerk/".$image_path . $filename;


$person = $_POST["personName"];
$concept = $_POST["conceptName"];
$email = $_POST["Email"];
$company = $_POST["companyName"];
$text = $_POST["text"];

var_dump($filename);
var_dump($person);
var_dump($concept);
var_dump($email);
var_dump($company);
var_dump($text);

if (move_uploaded_file($tmp_filename, $destination)) {
    echo 'foto is geupload' . '<br>';
} else {
    echo 'Fout tijdens uploaden' . '<br>';
}
$sql = 'INSERT INTO kerk (naamPersoon,naamConcept,naamBedrijf,email,image,content) values ("' . $person .'","' . $concept . '","' . $company . '","' . $email . '","' . $destination2 . '","' . $text . '")';

var_dump($sql);
$result = $mysqli->query($sql);
var_dump($result);

header('Location: ../index.php');
?>