//--------------------sidebar------------------------

  $(document).ready(function() {
    $("#spinner").click(function() {
        // Check if the sidebar is currently visible
        if ($("#mySidebar").is(":visible")) {
            // Hide the sidebar and move the spinner back to its original position
            $("#mySidebar").animate({ width: "toggle" }, "slow");
            $("#spinner").animate({ right: "0px" }, "slow");
        } else {
            // Show the sidebar and move the spinner to the right by 200px
            $("#mySidebar").animate({ width: "toggle" }, "slow");
            $("#spinner").animate({ right: "200px" }, "slow");
        }
    });
});



  
  //----------------------------------

  

 



 