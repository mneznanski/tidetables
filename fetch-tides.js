$(function() {

  //Prevent link function, grab location information
  jQuery('#location ul li a').click(function(event) {
    event.preventDefault();
    var location = $(this).attr('id');
    var xml = location + ".xml",
      xmlDoc = $.parseXML(xml),
      $xml = $(xmlDoc),
      $date = $xml.find("date");
      $time = $xml.find("time");
      $height = $xml.find("predictions_in_ft");

    // Append "date" to #date
    $("#date").append($date.text());

    // Append "time" to #time
    $("#time").append($time.text());

    // Append "predictions_in_ft" to #height
    $("#height").append($height.text());

  });
});