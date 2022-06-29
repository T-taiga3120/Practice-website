$(function(){
    $('.dropdown-btn').hover(
        function() {
          //カーソルが重なった時
        console.log("カーソル");
        $(this).find('.dropdown').toggleClass('open');
        }, function() {
          //カーソルが離れた時
        $(this).find('.dropdown').toggleClass('open');
        }
    );
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
