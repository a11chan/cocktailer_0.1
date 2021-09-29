$(document).ready(function () {
  $("#trigger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#mainmenu").toggleClass("active");
  });

  var tasteFilter = $(".submenu input");
  var targetList = $(".carouselBox > .itemBox");
  var targetList2 = $(".pickedBox > li > label");
  var chevronAll = $(".chevron, .Bchevron");
  var chevron0 = $(".Bchevron");
  var chevron1 = $(".pickedBox > .toLeft1, .pickedBox > .toRight1, .itemShow > .Bchevron");
  var chevron2 = $(".pickedBox > .toLeft2, .pickedBox > .toRight2, .itemShow > .Bchevron");
  var chevron3 = $(".pickedBox > .toLeft3, .pickedBox > .toRight3, .itemShow > .Bchevron");
  var chevron4 = $(".pickedBox > .toLeft4, .pickedBox > .toRight4, .itemShow > .Bchevron");

  chevronAll.hide();
  targetList.hide();
  targetList2.hide();

  tasteFilter.click(function () {
    chevronAll.hide();
    targetList.hide();
    targetList2.hide();

    var targetValue = [];
    tasteFilter.filter(":checked").each(function () {
      targetValue.push("." + $(this).val());
    });
    var targetClass = targetValue.join(", ");

    $(targetClass).fadeIn(); // 선택된 클래스 전부 표시(문서전체)

    if (targetClass.match(".n_")) {
      chevron1.fadeIn(), chevron0.fadeIn();
    } else {
      chevron1.hide();
    }
    if (targetClass.match(".p_")) {
      chevron2.fadeIn(), chevron0.fadeIn();
    } else {
      chevron2.hide();
    }
    if (targetClass.match(".f_")) {
      chevron3.fadeIn(), chevron0.fadeIn();
    } else {
      chevron3.hide();
    }
    if (targetClass.match(".t_")) {
      chevron4.fadeIn(), chevron0.fadeIn();
    } else {
      chevron4.hide();
    }

    if (targetClass == "") {
      chevronAll.hide();
    }

    console.log(targetClass); //함수 검증용
  });

  // 라디오-체크박스 적용 (inline-block처럼 서로의 특징 혼합)
  $("#noseBtn").click(function () {
    $('input[name="taste"]').not("#noseBtn").prop("checked", false);
  });
  $("#palateBtn").click(function () {
    $('input[name="taste"]').not("#palateBtn").prop("checked", false);
  });
  $("#finishBtn").click(function () {
    $('input[name="taste"]').not("#finishBtn").prop("checked", false);
  });
  $("#typeBtn").click(function () {
    $('input[name="taste"]').not("#typeBtn").prop("checked", false);
    // console.log($("#noseBtn").is(":checked"))
  });

  // 검색 결과 출력 토글
  $(".itemShow").hide();
  $("#searchBtn").click(function () {
    $(".itemShow").fadeToggle();
  });

  // .pickedBox 좌우 스크롤
  $(".toLeft1").click(function () {
    $(".pickedBox > li").eq(0).animate({ scrollLeft: "-=100" }, 30, "swing");
  });
  $(".toRight1").click(function () {
    $(".pickedBox > li").eq(0).animate({ scrollLeft: "+=100" }, 30, "swing");
  });
  $(".toLeft2").click(function () {
    $(".pickedBox > li").eq(1).animate({ scrollLeft: "-=100" }, 30, "swing");
  });
  $(".toRight2").click(function () {
    $(".pickedBox > li").eq(1).animate({ scrollLeft: "+=100" }, 30, "swing");
  });
  $(".toLeft3").click(function () {
    $(".pickedBox > li").eq(2).animate({ scrollLeft: "-=100" }, 30, "swing");
  });
  $(".toRight3").click(function () {
    $(".pickedBox > li").eq(2).animate({ scrollLeft: "+=100" }, 30, "swing");
  });
  $(".toLeft4").click(function () {
    $(".pickedBox > li").eq(3).animate({ scrollLeft: "-=100" }, 30, "swing");
  });
  $(".toRight4").click(function () {
    $(".pickedBox > li").eq(3).animate({ scrollLeft: "+=100" }, 30, "swing");
  });

  // .itemShow 좌우 스크롤
  $(".toLeft").click(function () {
    $(".carouselBox").animate({ scrollLeft: "-=90" }, 30, "swing");
  });
  $(".toRight").click(function () {
    $(".carouselBox").animate({ scrollLeft: "+=90" }, 30, "swing");
  });
}); // end of script
