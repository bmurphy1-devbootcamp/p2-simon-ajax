$(document).ready(function(){

  $("#get_color").click(function(e) {
    e.preventDefault();
    $.post("/color", function(data) {
      console.log(data);
      console.log(typeof data);
      console.log(data.cell);
      // Just have to figure out how to color the selected element
      $("#color_me li:nth-child(" + data.cell + ")").css("background-color", data["color"]) ;
    }, "json");
  });
});
