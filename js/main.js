$(document).ready(function () {
  // $("#age_submit").click(function () {
  //   var inputValue = $("input[type=text]").val();
  //   if ((parseInt(inputValue) === NaN) | (parseInt(inputValue) < 0)) {
  //     var div = document.createElement("div");
  //     div.innerHTML = "Please write real positive number!";
  //     var text = $("input[type=text]");
  //     document.body.appendChild(div);
  //   }
  // });

  $("#trigger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#mainmenu").toggleClass("active");
  });

  $(".flexslider").flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
  });

  var barWidth = $(".numbox__bar").css("width");
  // bar 애니메이션
  $(function nowBar() {
    $("div.numbox__bar__now").animate({ width: barWidth }, 7000);
    $("div.numbox__bar__now").animate({ width: 0 }, 0, nowBar);
    // $("div.numbox__bar__now").animate({ width: 0 }, 0, nowBar);
  });

  // 플렉스슬라이더 버튼 클릭시 텍스트 변경
  $("a.flex-prev, a.flex-next").click(function () {
    if ($("ul.slides li").eq(1).hasClass("flex-active-slide")) {
      $("div.numbox div").eq(0).text("1 / 3");
      $("div.numbox__bar__now").stop().animate({ width: barWidth }, 7000).stop();
    } else if ($("ul.slides li").eq(2).hasClass("flex-active-slide")) {
      $("div.numbox div").eq(0).text("2 / 3");
      $("div.numbox__bar__now").stop().animate({ width: barWidth }, 7000).stop();
    } else if ($("ul.slides li").eq(3).hasClass("flex-active-slide")) {
      $("div.numbox div").eq(0).text("3 / 3");
      $("div.numbox__bar__now").stop().animate({ width: barWidth }, 7000).stop();
    }
  });

  // 플렉스슬라이더 버튼 클릭 전 자동으로 text,bar 변경
  setInterval(function () {
    if ($("ul.slides li").eq(1).hasClass("flex-active-slide")) {
      $("div.numbox div").eq(0).text("1 / 3");
    } else if ($("ul.slides li").eq(2).hasClass("flex-active-slide")) {
      $("div.numbox div").eq(0).text("2 / 3");
    } else if ($("ul.slides li").eq(3).hasClass("flex-active-slide")) {
      $("div.numbox div").eq(0).text("3 / 3");
    }
  }, 7000);
});
