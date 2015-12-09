$(function() {

  //Prevent link function, grab location information
  $('#location ul li a').on('click', function(e) {
    e.preventDefault();
    var location = $(this).attr('id');
    var apiKey = '17ec2d7c6c96095b';
    var resturl = "http://api.wunderground.com/api/" + apiKey + "/tide/q/" + location + ".json";

    //Request the data and process it
    $.ajax({
      url: resturl,
      type: "GET",
      dataType: "json",

      success: function(tide) {
        //Prove success
        console.log(tide);
        //Create div to hold data
        var tdiv = $('#tideinfo');
        //Display data
        tdiv.html(JSON.stringify(tide, null, 4));
      }
    });
  });
});