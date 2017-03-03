



$(function(event) {
  $("#animalsAll").change(function() {
    $(this).find("option:selected").each(function() {
      var animalSelect = $(this).attr("value");
      console.log(animalSelect);


      if (animalSelect === "select") {
        alert("Please select an animal");
      }

      if (animalSelect === "snakes") {
        $("#snakes").show();
        $("#turtles").hide();
        $("#sheep").hide();
      }

      else if (animalSelect === "turtles") {
        $("#turtles").show();
        $("#snakes").hide();
        $("#sheep").hide();
      }

      else if (animalSelect === "sheep") {
        $("#sheep").show();
        $("#snakes").hide();
        $("#turtles").hide();
      }

      else {
        alert("Please select an animal");
      }

      event.preventDefault();
    });
  });
});



// $("#animalsAll").on('change', function(){
// var animalSelect = $("#animals").val();















// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
//
//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       console.log(userInput);
//       $("." + blank).text(userInput).val();
//
//     });
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });
