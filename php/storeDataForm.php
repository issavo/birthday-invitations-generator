<?php

//Storing data in variables
    $name = cleanString($_POST['name_user']);
    $date = cleanString($_POST['date_user']);
    $time = cleanString($_POST['time_user']);
    $local = cleanString($_POST['localName_user']);
    $address = cleanString($_POST['address_user']);
    $response = [];
    $errors = [];
    
//Data verification
    if($name == "" || $date == "" || $time == "" || $local == "" || $address == ""){ $errors += "Debe rellenar los campos del formulario"; 
   } else {
        $response = [
        "name_user" => $name,
        "date_user" => $date,
        "time_user" => $time,
        "localName_user" => $local,
        "address_user" => $address
        ];
        echo json_encode($response);
    }

    if(isset($errors)){
    ?>
        <div class="alert alert-danger" role="alert">
            <strong>Ops!Ha habido un error<br/></strong>
            <?php 
                foreach($errors as $error){
                    echo $error;
                }
            ?>   
        </div>
        
    <?php 
    }

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