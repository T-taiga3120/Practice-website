$(function(){

  const errMsgHalfSizeAlphanumeric = "半角英数字で入力してください";
  const errMsgDigitAlphanumeric = "8桁以上の英数字で入力してください";

  var AlphanumericPattern = /^[a-zA-Z0-9]+$/;
  var mailAlphanumericPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  var DigitAlphanumericPattern = /^([a-zA-Z0-9]{8,})$/;

  var userIdCheck = false;
  var mailCheck = false;
  var passIdCheck = false;


  $("input[name='userId']").focusout(function(){
    if(!$(this).val().match(AlphanumericPattern)){
      $(".err-msg-name").text(errMsgHalfSizeAlphanumeric);
      userIdCheck = false;
      console.log(errMsgHalfSizeAlphanumeric);
    }else{
      $(".err-msg-name").empty();
      userIdCheck = true;
    }
  });

  $("input[name='emailAdress']").focusout(function(){
    if(!$(this).val().match(mailAlphanumericPattern)){
      $(".err-msg-mail").text(errMsgHalfSizeAlphanumeric);
      mailCheck = false;
      console.log(errMsgHalfSizeAlphanumeric);
    }else{
      $(".err-msg-mail").empty();
      mailCheck = true;
    }

  });

  $("input[name='password']").focusout(function(){
    if(!$(this).val().match(DigitAlphanumericPattern)){
      $(".err-msg-pass").text(errMsgDigitAlphanumeric);
      passIdCheck = false;
      console.log(errMsgDigitAlphanumeric);
    }else{
      $(".err-msg-pass").empty();
      passIdCheck = true;
    }
  });

  $("input").focusout(function(){
    if(userIdCheck && mailCheck && passIdCheck){
      $("input[name='submit']").fadeIn(100)
    }else{
      $("input[name='submit']").fadeOut(100);
    }
  });


});

