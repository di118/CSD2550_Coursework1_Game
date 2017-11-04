<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
    
    //Output header and navigation 
    outputHeader("Home");
    
?>

<!-- Contents of the page -->
<body>
    <div class ="container">
            <canvas id="myCanvas" width="1000" height="800" style="border:1px solid #000000;"></canvas>
    </div>
</body>
<?php
    //Output the footer
    outputFooter();
?>