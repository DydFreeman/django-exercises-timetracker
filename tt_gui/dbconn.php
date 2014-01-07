<?php

$db_host = "localhost";
$db_user = "root";
$db_password = "";
$db_database = "timetracker";

$connessione=mysql_connect($db_host,$db_user,$db_password)
    or die("Errore, non posso connettermi al database: " . mysql_error());
mysql_select_db($db_database,$connessione)
    or die("Errore, non posso selezionare il database: " . mysql_error());

?>
