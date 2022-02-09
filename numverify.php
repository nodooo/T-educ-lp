<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $phone = file_get_contents('https://neutrinoapi.com/phone-validate?user-id=gwumkt&api-key=pzFyxOdFgzSyjIL1oOyB8JjX3K1iuzqVTMVqIRD2xvUKUyK5&number='.$_POST['phone']);
    echo $phone;
}

