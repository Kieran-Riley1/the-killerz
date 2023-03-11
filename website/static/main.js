
var today = new Date();

$(window).on('load', function () {
    getTableData();
    getMarqueeData();
});

function sortByDate(arr) {
    const sorter = (a, b) => {
       return new Date.parse(a.date).getTime() - new Date.parse(b.date).getTime();
    };
    arr["DATA"].sort(sorter);
    return arr;
};

function getTableData() {
    let gigHtml = '';

    for (x in gigs) {
        let gig = gigs[x]

        var dateParts = gig.date.split("-");
        var dateFormat = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        var gigDate =  new Date(dateFormat);

        if (gigDate > today) {
            gigHtml += `
                <tr>
                    <td class="t-date">
                        ${convertDate(gigDate)}
                    </td>
                    <td class="t-name">
                        ${gig.venue}<br>
                        <div id="breaker"><hr></div>
                    </td>
                    <td class="t-subname">
                        ${gig.city}
                        <br>
                        <p class="t-subname2">
                            ${gig.location}
                        </p>
                    </td>
                `;
                if (gig.ticket_link) {
                    gigHtml += `
                            <td>
                                <button class="table-btn" onclick="window.open('${gig.ticket_link}' + location.search)">
                                    BOOK NOW
                                </button>
                            </td>
                        </tr>
                    `;
                } else {
                    gigHtml += `
                        <td>
                            <button class="table-btn" disabled>
                                COMING SOON
                            </button>
                        </td>
                    </tr>
                `;}
        } else {
            continue
        }
    }
    $("#gig-table").html(gigHtml)

};

function getMarqueeData() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                  'August', 'September', 'October', 'November', 'December'];

    let marqueeText = '<h7><strong>Upcoming tour dates:</strong></h7>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    const lineBreak = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'

    for (x in gigs) {
        let gig = gigs[x]

        var dateParts = gig.date.split("-");
        var dateFormat = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        var gigDate =  new Date(dateFormat);

        var fullDate = `${days[gigDate.getDay()]} ${gigDate.getDate()}th \
                        ${months[gigDate.getMonth()]} ${gigDate.getFullYear()} `

        if (gigDate > today) {
            marqueeText += `${fullDate} - ${gig.venue}, ${gig.city}`
            marqueeText += lineBreak
        } else {
            continue
        }
    }
    $("#marquee-text").html(marqueeText)

};

$('#submit_btn').on('click', function() {
  if (validate()) {
    $.ajax({
      type : 'POST',
      data: {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'phone': $('#phone').val(),
        'date': $('#date').val(),
        'message': $('#message').val(),
      },
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

