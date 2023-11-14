$('.tit .btn').click(function(ev){
    ev.preventDefault
    // $('.nav').toggle();
    // $('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on")
});

$('.ban').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  autoplay:true
  });
  
  /* slidesToShow : 3  한 화면에 보이는 갯수
  slidesToScroll 1  버튼을 클릭하면 넘어가는 갯수*/

  $('.gallery_img').slick({
    arrows:false
  });

  $('.gallery_btn .play').click(function(){
    $('.gallery_img').slick('slickPlay');
  });

  $('.gallery_btn .pause').click(function(){
    $('.gallery_img').slick('slickPause');
  });

  $('.gallery_btn .prev').click(function(){
    $('.gallery_img').slick('slickPrev');
  });

  $('.gallery_btn .next').click(function(){
    $('.gallery_img').slick('slickNext');
  });

//   document.getElementsByClassName('ban')를압축한게 $('.ban') jquery가 하는일
//   document.getElementsByClassName('ban').addEventlisner('click',fv)

// 탭메뉴
//.next()는 바로 밑 형제요소를 호출(바로아래동생)
//.parent()는 부모요소를 호출 조상을부르는건아님
//.siblings() // 나를 제외한 형제들
//.find() 하위요소(내안에있는 요소들) (div .div개념)

let tab_list=$('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();

$('.tab_menu>ul>li>a').click(function(ev){
  ev.preventDefault();
  var $this = $(this); // javascript에서 변수를 만들때 사용할수 있는 특수 문자 $ , _
  //sconsole.log($this);
  $this.next('ul').show();
  $this.parent('li').siblings('li').find('ul').hide();



  $this.parent('li').addClass('active')
  $this.parent('li').siblings('li').removeClass('active')
});


//lightGallery
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});


// 레이어 팝업


$('.layer').click(function(ev){
  ev.preventDefault();//새로고침막기
  $('#layer').fadeIn();
});

$('#layer .close').click(function(ev){
  ev.preventDefault();//새로고침막기
  $('#layer').fadeOut();
});

// window창 열기

$('.window').click(function(ev){
  ev.preventDefault();
  window.open("popup.html", "popup","top=500,left=500,width=900,height=590");
});