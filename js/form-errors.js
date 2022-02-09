// error for input fields 
$(function() {
    // error for name input on regular form
    $(document).click(function(e) {
        if (!$(e.target).hasClass("input.first-fullName")) {
            var content = $(".first-fullName").val();
            var words = content.trim().split(/\s+/);
            var num_words = words.length;
            if ($("input.first-fullName").val().length !== 0 && $("input.first-fullName").val().length < 2) {
                $(".first-name-error").css("display", "inherit");
                $(".first-name-error").css("margin", "0");
                $(".first-fullName").css("margin-bottom", "0");
            } else {
                $(".first-name-error").css("display", "none");
                $(".first-fullName").css("margin-bottom", "30px");
            }
        }
    });
    // error for email input on regular form
    $(document).click(function(e) {
        if (!$(e.target).hasClass("input.first-email")) {
            var mailformat3 = /[.]/;
            var mailformat2 = /[@]/;

            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if ($("input.first-email").val().length !== 0 && !$("input.first-email").val().match(mailformat2) && !$("input.first-email").val().match(mailformat3)) {

                $(".first-email-error").css("display", "inherit");
                $(".first-email-error").css("margin", "0");
                $(".first-email").css("margin-bottom", "0");
            } else {
                $(".first-email-error").css("display", "none");
                $(".first-email").css("margin-bottom", "30px");
            }
        }
    });
    // error on name input on pop up form
    $(document).click(function(e) {
        if (!$(e.target).hasClass("input.second-fullName")) {
            var content = $(".second-fullName").val();
            var words = content.trim().split(/\s+/);
            var num_words = words.length;
            if ($("input.second-fullName").val().length !== 0 && $("input.second-fullName").val().length < 2) {
                $(".second-name-error").css("display", "inherit");
                $(".second-name-error").css("margin", "0");
                $(".second-fullName").css("margin-bottom", "0");
            } else {
                $(".second-name-error").css("display", "none");
                $(".second-fullName").css("margin-bottom", "30px");
            }
        }
    });
     // error on email input on pop up form
    $(document).click(function(e) {
        if (!$(e.target).hasClass("input.second-email")) {
            var mailformat3 = /[.]/;
            var mailformat2 = /[@]/;

            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if ($("input.second-email").val().length !== 0 && !$("input.second-email").val().match(mailformat2) && !$("input.second-email").val().match(mailformat3)) {

                $(".second-email-error").css("display", "inherit");
                $(".second-email-error").css("margin", "0");
                $(".second-email").css("margin-bottom", "0");
            } else {
                $(".second-email-error").css("display", "none");
                $(".second-email").css("margin-bottom", "30px");
            }
        }
    });
});