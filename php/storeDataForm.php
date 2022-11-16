<?php
// Clean strings to prevent sql injection
function cleanString($textString)
{
    $textString = trim($textString);
    $textString = stripslashes($textString);
    $textString = str_ireplace("<script>", "", $textString);
    $textString = str_ireplace("</script>", "", $textString);
    $textString = str_ireplace("<script src>", "", $textString);
    $textString = str_ireplace("</script type>", "", $textString);
    $textString = str_ireplace("SELECT * FROM", "", $textString);
    $textString = str_ireplace("DELETE * FROM", "", $textString);
    $textString = str_ireplace("INSERT INTO", "", $textString);
    $textString = str_ireplace("DROP TABLE", "", $textString);
    $textString = str_ireplace("DROP DATABASE", "", $textString);
    $textString = str_ireplace("TRUNCATE TABLE", "", $textString);
    $textString = str_ireplace("SHOW TABLES", "", $textString);
    $textString = str_ireplace("SHOW DATABASES", "", $textString);
    $textString = str_ireplace("<?php", "", $textString);
    $textString = str_ireplace("?>", "", $textString);
    $textString = str_ireplace("--", "", $textString);
    $textString = str_ireplace("^", "", $textString);
    $textString = str_ireplace("<", "", $textString);
    $textString = str_ireplace("[", "", $textString);
    $textString = str_ireplace("]", "", $textString);
    $textString = str_ireplace("==", "", $textString);
    $textString = str_ireplace(";", "", $textString);
    $textString = str_ireplace("::", "", $textString);
    $textString = trim($textString);
    $textString = stripslashes($textString);

    return $textString;
}   
  











?>