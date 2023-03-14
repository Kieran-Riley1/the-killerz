console.log("jhsvdfjhsebdf")
$('#submit_btn').on('click', function() {
    if (validate()) {
        $.ajax({
            url : 'contact.php',
            type : 'POST',
            success : function () {
                $('#form').slideToggle()
                $('#success').slideToggle()
            },
            error : function () {
                console.log ('error');
            }

        });
    }
});


function convertDate(s) {
    return s.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Navbar
let header = document.querySelector('.header');

window.addEventListener('scroll', function(){
    let windowPos = window.scrollY > 0;
    header.classList.toggle('active', windowPos)
})

$('.span').on('click', function () {
    header.classList.toggle('nav-menu-open');
    $('#marquee').toggle()
})

$('.nav-link').on('click', function () {
    $('#marquee').hide()
})


// Marquee
window.addEventListener('scroll', function(){
    if ($(document).scrollTop() > 0) {
        $('#marquee').addClass('fixed')
    } else {
        $('#marquee').removeClass('fixed')
    }
});

$(function () {
    $("#gall-img").slice(0, 10).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("gall-img:hidden").slice(0, 4).slideDown();
        if ($("gall-img:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

function isValidURL(string) {
    if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test
        (string) || !$('#email').val().includes("http")) {
        return true
    }
    return false
};

function validate() {
    var acceptedDomains = ['.com', '.co.uk'];

    var dummy = $('#nice-try').val() == ''
    var email = (new RegExp(acceptedDomains.join('|')).test($('#email').val()))
    var message = $('#message').val();

    if (dummy && email && message) {
        return true
    }
    return false
};


$('#view-more-btn').on('click', function () {
    $('.gallery').css('height', 'auto');
    $('.btn-container').toggle()
});

