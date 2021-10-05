<?php
$mysqli = new mysqli('aa1iktijjgxntg2.cztezettxe1n.us-east-1.rds.amazonaws.com', 'Grocery', 'internet', 'Grocery');

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
 $show1= $_GET['db11'];
$query = "select * from Store where product_id=$show1";

if ($result = $mysqli->query($query)) {
    while ($row = $result->fetch_row()) {
        
        printf ("<table><tr><td>Id</td><td>%s</td></tr>  
                <tr><td>Name</td><td>%s</td></tr>  
                <tr><td>Price</td><td>%s</td></tr>  
                <tr><td>PackSize</td><td>%s</td></tr><tr><td>Enter the Quantity you want: </td><td><input type='number' min='1' max='20', value='1', id='value1'></input></td></tr></table> ", $row[0], $row[1], $row[2],$row[3]);
                $add1=json_encode(array($row[0], $row[1], $row[2],$row[3]));
        printf("<button type='button' onclick='addincart($add1)'>Add In Your Cart</button>");
        
        
        
    }

    // free result set 
    $result->close();
}

// close connection 
$mysqli->close(); 
?>



