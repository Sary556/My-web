 /* 2줄
 주석 */

 //한줄주석

 console.log("방가방가")
 //alert("반갑습니다.")

 //menu
 $('.nav>ul>li').mouseover(function () {
     console.log($(this));
     $(this).find('.submenu').stop().slideDown();
 });

 $('.nav>ul>li').mouseout(function () {
     $(this).find('.submenu').stop().slideUp();
 });

 //banner
 /* 🐱‍👤변수:변하는 값이라는 의미
 let 변수이름=값; */

 /* let 주머니 = 100;
 컴퓨터에서 = 는 같다는의미가 아닌 주머니라는곳에 100을 넣어라는뜻이래요 */

 // console.log(주머니 + 1)

 let currentIndex = 0;

 /* setInterval(할일=function,시간);
 setInterval(function(){},시간(1초));==>1초마다 할일이 실행
 setInterval(function(){},3000);==>3초마다 할일이실행 */

 /* if(조건문){
     조건이 만족하면 할일
 }else{
     조건이 만족 하지 않으면 할일
 }
  */

 setInterval(function () {
     if (currentIndex<2) {
        currentIndex++;
        // 1씩 더해라 (조건이 만족하면 할일목록 1씩 더하다 2까지만 되고 2이상이 되면 else로이동)
     } else {
        currentIndex=0;
        /* 다시 0을 입력해라
         조건이 만족 하지 않으면 할일 */
     }
    //  console.log(currentIndex)
    let sildePostion=currentIndex * (-378) + "px";
    console.log(sildePostion)

    // $('.slidelist').animate({실행문},시간)
    $('.slidelist').animate({
        top:sildePostion
    },400)
 }, 3000);

//  탭(tap)메뉴
// .find() --> css에서 띄워쓰기(하위요소)와 동일,자손 
// .hide() --> display:none; 과 같다 
// .show() --> display:block 과 같다 
// .next() --> 형제중 바로밑 동생을 호출 //내가 셋째라면 넷째를 의미 
// .parent() --> 바로위 상위요소(부모요소를 호출) 
// .siblings() --> 나를제외한 형제들

let tabmenu=$('.notice');

tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();

tabmenu.find('ul>li>a').click(function(e){
    e.preventDefault(); //#때문에 튕기는 현상 막기

    // $(this).parent('li').addClass('active'); 
    // $(this).parent('li').siblings('li').removeClass('active');
    // $(this).parent('li').siblings('li').find('ul').hide();

    $(this).parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();

    $(this).next().show()
});

// $('.ad').click(어떤일);
// $('.ad').click(function(){실행문});


$('.ad').click(function(){
    // $('.layer-bg').show;
    // $('.layer-bg').slideDown;
    $('.layer-bg').fadeIn();
});

$('.layer .close').click(function(){
    // $('.layer-bg').slideUp();
    // $('.layer-bg').hide();
    // $('.layer-bg').fadeOut(1000);
    $('.layer-bg').hide();
});
