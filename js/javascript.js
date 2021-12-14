$(document).ready(function () {

    $(".cookies-settings").click(function (e) { 

        e.preventDefault();
        $(".cookies-settings-box").css("display", "block");

    });

    $(".cookies-settings-close").click(function (e) { 

        e.preventDefault();
        $(".cookies-settings-box").css("display", "none");

    });

    $(".cookies-settings-srClick").click(function (e) { 

        e.preventDefault();
        if ($(this).parent(".cookies-settings-sr").hasClass("cookies-settings-srOpen")) {
            $(this).parent(".cookies-settings-sr").removeClass("cookies-settings-srOpen");
        } else {
            $(this).parent(".cookies-settings-sr").addClass("cookies-settings-srOpen");
        }

    });

    $("#cookies-agree").click(function (e) { 

        e.preventDefault();
        $(".cookies").css("display", "none");

    });

    $("#cookies-save").click(function (e) { 

        e.preventDefault();
        $(".cookies").css("display", "none");
        $(".cookies-settings-box").css("display", "none");

    });
});