$(function(){
    // input type=number 押下
$('input[type="number"]').click(function(){
    let quantity = $(this).val();
    let price = $(".price").text().replace(',','');
    let totalprice = Number(totalpriceCal(price,quantity)).toLocaleString();
    $(".totalprice").text(totalprice);
    console.log(price);
});

function totalpriceCal(price,quantity){
    return price * quantity;
}

$('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
});
$('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
});

});
