$(function () {
  // Show / Hide / Toggle
  $("#hide").click(() => {
    $("#text").hide();
  });
  $("#show").click(() => {
    $("#text").show();
  });
  $("#toggle").click(() => {
    $("#text").toggle();
  });

  // Fade Effects
  $("#fadein").click(() => {
    $(".box").fadeIn(1000);
  });
  $("#fadeout").click(() => {
    $(".box").fadeOut(1000);
  });
  $("#fadetoggle").click(() => {
    $(".box.blue").fadeToggle(1000);
  });
  $("#fadeto").click(() => {
    $(".box.red").fadeTo(1000, 0.3);
  });

  // Slide Effects
  $("#slideup").click(() => {
    $("#panel").slideUp(1000);
  });
  $("#slidedown").click(() => {
    $("#panel").slideDown(1000);
  });
  $("#slidetoggle").click(() => {
    $("#panel").slideToggle(1000);
  });

  // HTML Get / Set / Add / Remove
  $("#gettext").click(() => {
    $("#result").text("GET TEXT: " + $("#htmlText").text());
  });
  $("#gethtml").click(() => {
    $("#result").html("GET HTML: " + $("#htmlText").html());
  });
  $("#settext").click(() => {
    $("#htmlText").text("This is updated TEXT");
  });
  $("#sethtml").click(() => {
    $("#htmlText").html("<b>This is updated HTML</b>");
  });
  $("#append").click(() => {
    $("#htmlText").append(" <span>(Appended)</span>");
  });
  $("#prepend").click(() => {
    $("#htmlText").prepend("<span>(Prepended) </span>");
  });
  $("#removeElement").click(() => {
    $("#htmlText").remove();
  });

  // CSS Classes
  $("#addClassBtn").click(() => {
    $("#classPara").addClass("myClass");
  });
  $("#removeClassBtn").click(() => {
    $("#classPara").removeClass("myClass");
  });
  $("#toggleClassBtn").click(() => {
    $("#classPara").toggleClass("highlight");
  });

  // css()
  $("#cssBtn").click(() => {
    $("#classPara").css({
      fontSize: "24px",
      color: "blue",
      background: "lightgray",
      padding: "10px",
    });
  });

  // Animation
  $("#animBtn").click(() => {
    $(".animation").animate({ left: "300px" }, 2000, () => {
      $(".animation").css("background", "red");
    });
  });
});
