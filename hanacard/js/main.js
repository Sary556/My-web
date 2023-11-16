    // slick
    // let eb_slider = $('.eb_slider_list')
    // $('.eb_slider_list')
    $('.eb_slider_list').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
        fade:true,
    });

    //정지/재생 버튼
    /* 자바스크립트 였을시에 코드 */
    // 선택자.addEventListener('click',function(){})
    // 선택자.onclick(function(){})

    /* jquery로 하는법 */
    $('.event_box2 .page_act .btn_stop').click(function(e){
        e.preventDefault();
        if($('.event_box2 .page_act').hasClass('on')){
            //on이라는 클래스명을 가지고있다면 true, 없다면 false
            $('.event_box2 .page_act').removeClass('on');
            $('.eb_slider_list').slick('slickPause');
        }
    }) 

    $('.event_box2 .page_act .btn_play').click(function(e){
        e.preventDefault();
        if(!$('.event_box2 .page_act').hasClass('on')){
            //!를(!= not !!->not의 not true 긍정) 붙혀서 on이 있다면 반대로 false 없으면 true
        $('.event_box2 .page_act').addClass('on');
        $('.eb_slider_list').slick('slickPlay');
        }
    })
    