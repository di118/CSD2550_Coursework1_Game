<?php

    include('common.php');          //Include the PHP functions to be used on the page 
    outputHeader("Leaderboard");    //Output header and navigation 
    
?>

<!-- Contents of the page -->
<body onload="buildRankings();" >
    <div class="container">
        <h1 class="text-center">Leaderboard</h1>
         <div class="myTable">
            <table class="table table-striped">
                <tr>                                    <!-- Header leaderboard  -->
                    <th> Rank </th>                     <!-- Rank colomn -->
                    <th> Name </th>                     <!-- Name colomn -->
                    <th> Score </th>                    <!-- Score colomn -->
                </tr>
                <tr>                                    <!-- First line leaderboard -->
                    <td id="1">1.</td>                  <!-- All the names and scores will be added later using JavaScript -->   
                    <td id="1name"></td>
                    <td id="1score"></td>
                </tr>
                <tr>
                    <td id="2">2.</td>
                    <td id="2name"></td>
                    <td id="2score"></td>
                </tr>
                <tr>
                    <td id="3">3.</td>
                    <td id="3name"></td>
                    <td id="3score"></td>
                </tr>
                <tr>
                    <td id="4">4.</td>
                    <td id="4name"></td>
                    <td id="4score"></td>
                </tr>
                <tr>
                    <td id="5">5.</td>
                    <td id="5name"></td>
                    <td id="5score"></td>
                </tr>
                <tr>
                    <td id="6">6.</td>
                    <td id="6name"></td>
                    <td id="6score"></td>
                </tr>
                <tr>
                    <td id="7">7.</td>
                    <td id="7name"></td>
                    <td id="7score"></td>
                </tr>
                <tr>
                    <td id="8">8.</td>
                    <td id="8name"></td>
                    <td id="8score"></td>
                </tr>
                <tr>
                    <td id="9">9.</td>
                    <td id="9name"></td>
                    <td id="9score"></td>
                </tr>
                <tr>
                    <td id="10">10.</td>
                    <td id="10name"></td>
                    <td id="10score"></td>
                </tr>
                
            </table>
           </div>
    </div>

</body>
<?php

    outputFooter();         //Output the footer

?>