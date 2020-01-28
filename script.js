$(function() {
  //faq-list-itemがクリックされたら
  $('.faq-list-item').click(function(){
    var $answer = $(this).children('.answer');
    //answerがopenを持っているか調べる

    //持っていたら
    if($answer.hasClass('open')){
      //openクラスを除去
      $answer.removeClass('open');
      //非表示にする
      $answer.slideUp(500);
      //spanの中身を+に
      $(this).children('span').text('+');
    }else{
      //持っていなかったら
      //openクラスを追加
      $answer.addClass('open');
      //表示
      $answer.slideDown(500);
      //spanの中身を-に
      $(this).children('span').text('-');
    }
  });

  //ログインボタンがクリックされたら
  $('#login-btn').click(function(){
    //モーダルを表示させる
    $('#login-modal').show();
  });

  //モーダルのxボタンがクリックされたら
  $('#exit-btn').click(function(){
    //モーダルを隠す
    $('#login-modal').hide();
  });


});
