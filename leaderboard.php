<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
    
    //Output header and navigation 
    outputHeader("Leaderboard");
    outputNavbar();
?>

<!-- Contents of the page -->
<body>
    <div class="container">
        <h1 class="text-center">Leaderboard</h1>
            <table class="table table-striped">
                <tr>
                    <th> Rank </th> 
                    <th> Name </th> 
                    <th> Score </th>
                </tr>
                <tr>
                    <td id="1">1.</td>
                    <td>Timmy Turner</td>
                    <td>999</td>
                </tr>
                <tr>
                    <td id="2">2.</td>
                    <td>Billy Bob</td>
                    <td>888</td>
                </tr>
                <tr>
                    <td id="3">3.</td>
                    <td>Timmy Turner</td>
                    <td>777</td>
                </tr>
                <tr>
                    <td id="4">4.</td>
                    <td>Billy Bob</td>
                    <td>666</td>
                </tr>
                <tr>
                    <td id="5">5.</td>
                    <td>Timmy Turner</td>
                    <td>555</td>
                </tr>
                <tr>
                    <td id="6">6.</td>
                    <td>Billy Bob</td>
                    <td>444</td>
                </tr>
                <tr>
                    <td id="7">7.</td>
                    <td>Timmy Turner</td>
                    <td>333</td>
                </tr>
                <tr>
                    <td id="8">8.</td>
                    <td>Billy Bob</td>
                    <td>222</td>
                </tr>
                <tr>
                    <td id="9">9.</td>
                    <td>Timmy Turner</td>
                    <td>101</td>
                </tr>
                <tr>
                    <td id="10">10.</td>
                    <td>Billy Bob</td>
                    <td>0</td>
                </tr>
            </table>

    </div>

</body>
<?php
    //Output the footer
    outputFooter();
?>