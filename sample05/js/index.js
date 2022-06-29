$(function(){
    $('.dropdown-btn').hover(
        function(event) {
          //カーソルが重なった時
        console.log("カーソル");
        $(this).find('.dropdown li').animate({
          height:"35px"
        },500);
        }, 
        function() {
          //カーソルが離れた時
        $(this).find('.dropdown li').animate({
          height:0
        },500);
        }
    );

  //   $(this).find('.dropdown').toggleClass('open-list');
  // }, function() {
  //   //カーソルが離れた時
  // $(this).find('.dropdown').toggleClass('open-list');

  //   $('.dropdown-btn').hover(
  //     function() {
  //       //カーソルが重なった時
  //     console.log("カーソル");
  //     $(this).find('.dropdown:not(:animated)').slideDown();
  //     }, function() {
  //       //カーソルが離れた時
  //     $(this).find('.dropdown').slideUp();
  //     }
  // );

});

// let menulists = document.querySelectorAll(".menu>li");
// let i = 1;

// menulists[0].addEventListener("mouseover",function(){
//     console.log(menulists[0]);
//     for(let menulist of menulists){
//     menulist.classList.toggle("list"+i);
//     i++;
//     }
//     i = 1;
// })


// menulists.addEventListener("mouseout",function(){
//     console.log(menulists[0]);
//     for(let menulist of menulists){
//     menulist.classList.toggle("list"+i);
//     i++;
//     }
//     i = 1;
// })
