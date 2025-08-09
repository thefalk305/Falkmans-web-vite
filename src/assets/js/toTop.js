

$("h1").delay("1000").fadeIn();

const backTop = $("#back-to-top").hide();

// fade in #back-to-top
const scroolTop = $(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
});

// scroll body to 0px on click
const toTop = $("a#back-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});

export default { backTop, toTop, scroolTop }

// hide #back-to-top first
// $(document).ready(function(){
//     $("h1").delay("1000").fadeIn();
//     // hide #back-top first
//     $("#back-top").hide();
//     // fade in #back-top
//     $(function () {
//         $(window).scroll(function () {
//             if ($(this).scrollTop() > 200) {
//                 $('#back-top').fadeIn();
//             } else {
//                 $('#back-top').fadeOut();
//             }
//         });
//         // scroll body to 0px on click
//         $('a#back-top').click(function () {
//             $('body,html').animate({
//                 scrollTop: 0
//             }, 800);
//             return false;
//         });
//     });
// });
