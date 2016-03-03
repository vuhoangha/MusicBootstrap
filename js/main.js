$(document).ready(function () {
    $("#login-button").click(function () {
        $("#login-form").show();
    });

    $("#button-me-cancel").click(function () {
        $("#login-form").hide();
    });
});

$(document).ready(function () {
    var displaygenres=0;
    $("#genres-button").click(function () {
        if (displaygenres==0) {
            $("#genres-detail").show();
            $(this).css("background", "#eee");
            displaygenres = 1;
        } else {
            $("#genres-detail").hide();
            $(this).css("background", "transparent");
            displaygenres = 0;
        }
    })
});

//slider

$(document).ready(function () {
    var stt = 0;
    firstImg = $(".slider-img:first").attr("stt");
    endImg = $(".slider-img:last").attr("stt");
    $(".slider-img").each(function () {
        if ($(this).is(':visible')) {
            stt = $(this).attr("stt");
        }
    });

    function sliderNext() {
        stt++;
        if (stt > endImg) {
            stt = firstImg;
        }
        $(".slider-img").hide();
        $(".slider-img").eq(stt).show();
        $(".slider-li").removeClass('slider-li-active');
        $(".slider-li").eq(stt).addClass('slider-li-active');
    }

    function sliderPrev() {
        stt--;
        if (stt < firstImg) {
            stt = endImg;
        }
        $(".slider-img").hide();
        $(".slider-img").eq(stt).show();
        $(".slider-li").removeClass('slider-li-active');
        $(".slider-li").eq(stt).addClass('slider-li-active');
    }

    intervalID = setInterval(function () {
        sliderNext();
    }, 3000);

    $(".slider-img").on("mouseover", function () {
        clearInterval(intervalID);
    });

    $(".slider-img").on("mouseout", function () {
        intervalID = setInterval(function () {
            sliderNext();
        }, 3000);
    });

    $(".slider-li").on("click", function () {
        var sttLI = $(this).attr("stt");
        $(".slider-li").removeClass('slider-li-active');
        $(".slider-li").eq(sttLI).addClass('slider-li-active');
        $(".slider-img").hide();
        $(".slider-img").eq(sttLI).show();
        stt = sttLI;
    });
});

//top-6-dj

$(document).ready(function () {
    $(".top-6-dj-slider-div").on("click", function () {
        var stt = $(this).attr("stt");
        $(".top-6-dj-content-div").hide();
        $(".top-6-dj-content-div").eq(stt).show();
        $(".top-6-dj-slider-div").removeClass('top-6-dj-slider-div-active');
        $(".top-6-dj-slider-div").eq(stt).addClass('top-6-dj-slider-div-active');
    });
});

//new track
$(document).ready(function () {
    $(".new-tracks-pages-li").on("click", function () {
        var stt = $(this).attr("stt");
        $(".new-track-div").hide();
        $(".new-track-div").eq(stt).show();
        $(".new-tracks-pages-li").removeClass('new-tracks-pages-li-active');
        $(".new-tracks-pages-li").eq(stt).addClass('new-tracks-pages-li-active');
    });
});

//hot remix
$(document).ready(function () {
    $(".hot-remix-pages-li").on("click", function () {
        var stt = $(this).attr("stt");
        $(".hot-remix-div").hide();
        $(".hot-remix-div").eq(stt).show();
        $(".hot-remix-pages-li").removeClass('hot-remix-pages-li-active');
        $(".hot-remix-pages-li").eq(stt).addClass('hot-remix-pages-li-active');
    });
});

//top-liveset
$(document).ready(function () {
    $(".live-set-slider-div").on("click", function () {
        var stt = $(this).attr("stt");
        $(".live-set-content-div").hide();
        $(".live-set-content-div").eq(stt).show();
        $(".live-set-slider-div").removeClass('live-set-slider-div-active');
        $(".live-set-slider-div").eq(stt).addClass('live-set-slider-div-active');
    });
});

//bucket
$(document).ready(function () {
    $(".bucket-pages-li").on("click", function () {
        var stt = $(this).attr("stt");
        $(".bucket-img").hide();
        $(".bucket-img").eq(stt).show();
        $(".bucket-pages-li").removeClass('bucket-pages-li-active');
        $(".bucket-pages-li").eq(stt).addClass('bucket-pages-li-active');
    });
});

$(document).ready(function () {
    var playmusic = 0;
    var audio = document.getElementById("myTune");
    
    //event end audio
    audio.onended = function(){
        if(audio.loop==false){
            PauseMusic();
        }
    };
    
    //function play music
    function PlayMusic() {
        audio.play();
        playmusic = 1;
        $("#playButton .glyphicon-play").hide();
        $("#playButton .glyphicon-pause").show();
    }
    
    //function pause music
    function PauseMusic() {
        audio.pause();
        playmusic = 0;
        $("#playButton .glyphicon-pause").hide();
        $("#playButton .glyphicon-play").show();
    }

    //event click loop
    $("#loopButton").click(function () {
        if (audio.loop == false) {
            if (playmusic == 0) {
                PlayMusic();
            }
            audio.loop = true;
            $("#loopButton").css("color", "#fff");
        } else {
            audio.loop = false;
            $("#loopButton").css("color", "#888");
        }

    });
    
    //event click playmusic
    $("#playButton").click(function () {
        if (playmusic == 0) {
            PlayMusic();
        } else {
            PauseMusic();
        }
    });
    
    intervalID = setInterval(function () {
        sliderNext();
    }, 3000);

    $(".slider-img").on("mouseover", function () {
        clearInterval(intervalID);
    });
    
});