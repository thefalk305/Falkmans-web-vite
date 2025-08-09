<template>
<a href="#" id="back-to-top" class="back-to-top" style=" display: inline-block;">
  <img src="../assets/SupArrow.png" alt="Back to Top" />
  <span style="
    position: absolute;
    top: 62%;
    left: 18%;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  ">
    Top
  </span>
</a>

</template>

<script>
import $ from 'jquery';

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

export default { backTop, toTop, scroolTop };
</script>

<!-- Styles your button (this is a 40x40 pixels image) -->
<style>
.back-to-top {
  /* Remove the background color */
  color: #ffffff;
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
  z-index: 999;
  position: fixed;
  right: 25px;
  bottom: 25px;

  /* Change the width and height to match your image dimensions*/
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 0%;
}

.back-to-top.show {
  opacity: 1;
}
</style>
