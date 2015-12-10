$(function() {

  //Prevent link function, grab location information
  jQuery('#location ul li a').click(function(event) {
    event.preventDefault();
    var location = $(this).attr('id');
    var apiKey = '17ec2d7c6c96095b';
    var restUrl = "http://api.wunderground.com/api/" + apiKey + "/tide/q/" + location + ".json";

    //Request the data and process it
    jQuery.ajax({
      url: resturl,
      type: "GET",
      dataType: "json",

      success: function(tide) {
        //Prove success
        console.log(tide);
        var obj = jQuery.parseJSON(tide);
        //Create div to hold data
        var tdiv = jQuery('#tideinfo');
        //Display data
        tdiv.html(obj.tideSummary);
      }
    });
  });
});
