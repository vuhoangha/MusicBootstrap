$(document).ready(function () {
    var stt = 0;
    var firstImg = $(".slider-na-img:first").attr("stt");
    var endImg = $(".slider-na-img:last").attr("stt");
    $(".slider-na-img").each(function () {
        if ($(this).is(':visible')) {
            stt = $(this).attr("stt");
        }
    });

    function sliderNext() {
        stt++;
        if (stt > endImg) {
            stt = firstImg;
        }
        $(".slider-na-img").hide();
        $(".slider-na-img").eq(stt).show();
        $(".slider-na-button").removeClass("slider-na-button-active");
        $(".slider-na-button").eq(stt).addClass("slider-na-button-active");
    }

    function sliderPrev() {
        stt--;
        if (stt < firstImg) {
            stt = endImg;
        }
        $(".slider-na-img").hide();
        $(".slider-na-img").eq(stt).show();
        $(".slider-na-button").removeClass("slider-na-button-active");
        $(".slider-na-button").eq(stt).addClass("slider-na-button-active");
    }

    $(".slider-na-button").on("click", function () {
        var sttSelect = $(this).attr("stt");
        $(".slider-na-button").removeClass('slider-na-button-active');
        $(".slider-na-button").eq(sttSelect).addClass('slider-na-button-active');
        $(".slider-na-img").hide();
        $(".slider-na-img").eq(sttSelect).show();
        stt = sttSelect;
    });
});