$(function(){

    let photos = 4;

    for(let i = 1; i <= photos; i++){
        let num = i;
        $(".main-visual").append(`
        <img class="mv-img"src="images/content_${("00" + num).slice(-2)}.jpg" alt="">
        `);

        $(".img-lisit").append(`
        <img src="images/content_${("00" + num).slice(-2)}.jpg" alt="">
        `);
    }
    $(".main-visual img").eq(0).attr('id', 'first-img');


    let $current = $("#first-img");

    $(".img-lisit img").hover(
        function(event) {
            //カーソルが重なった時
            let idx = $(this).index();
            let $nextelement = $(".main-visual img").eq(idx);

            if(!$current.is($nextelement)){
                $current.fadeOut();
                $nextelement.fadeIn();
            }
            $current = $nextelement;
        }, 
        function() {
            //カーソルが離れた時
        }
    )
    
});
