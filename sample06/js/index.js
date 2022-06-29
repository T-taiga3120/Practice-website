$(function(){
    // $('.main-visual').click(
    //     function(event) {
    //       //クリック
    //     console.log("カーソル");
    //     let this_index = $(this).find(".activ")
    //     let $mv_img = $(this).find(".mv-img");

    //     let index = $("img").index(this_index);
    //     let mv_index = $(".mv-img").length -1;
      
    //     if(index == mv_index){
    //       $mv_img.eq(index).fadeToggle();
    //       $mv_img.eq(index).removeClass("activ");
    //       $mv_img.eq(0).fadeToggle();
    //       $mv_img.eq(0).addClass("activ");
    //     }else{
    //       $mv_img.eq(index).fadeToggle();
    //       $mv_img.eq(index).removeClass("activ");
    //       $mv_img.eq(index).next().fadeToggle();
    //       $mv_img.eq(index).next().addClass("activ");
    //     }
    //         }
    // );

  $(".main-visual img").click(function(){
    console.log(this);
    $(this).fadeToggle();
    if($(this).is($(".main-visual img").last())){
      $(".main-visual img").first().fadeToggle();
    }else{
      $(this).next().fadeToggle();
    }
  })
});

