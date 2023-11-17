    // slick
    // let eb_slider = $('.eb_slider_list')
    // $('.eb_slider_list')
    $('.eb_slider_list').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        fade: true,
    });

    //정지/재생 버튼
    /* 자바스크립트 였을시에 코드 */
    // 선택자.addEventListener('click',function(){})
    // 선택자.onclick(function(){})

    /* jquery로 하는법 */
    $('.event_box2 .page_act .btn_stop').click(function (e) {
        e.preventDefault();
        if ($('.event_box2 .page_act').hasClass('on')) {
            //on이라는 클래스명을 가지고있다면 true, 없다면 false
            $('.event_box2 .page_act').removeClass('on');
            $('.eb_slider_list').slick('slickPause');
        }
    })

    $('.event_box2 .page_act .btn_play').click(function (e) {
        e.preventDefault();
        if (!$('.event_box2 .page_act').hasClass('on')) {
            //!를(!= not !!->not의 not true 긍정) 붙혀서 on이 있다면 반대로 false 없으면 true
            $('.event_box2 .page_act').addClass('on');
            $('.eb_slider_list').slick('slickPlay');
        }
    })


    $('.card').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        fade: true,
    });



    $('.event_box3 .page_act .btn_stop').click(function (e) {
        e.preventDefault();
        if ($('.event_box3 .page_act').hasClass('on')) {
            //on이라는 클래스명을 가지고있다면 true, 없다면 false
            $('.event_box3 .page_act').removeClass('on');
            $('.card').slick('slickPause');
        }
    })

    $('.event_box3 .page_act .btn_play').click(function (e) {
        e.preventDefault();
        if (!$('.event_box3 .page_act').hasClass('on')) {
            //!를(!= not !!->not의 not true 긍정) 붙혀서 on이 있다면 반대로 false 없으면 true
            $('.event_box3 .page_act').addClass('on');
            $('.card').slick('slickPlay');
        }
    })

    //life 버튼

    let tab = $('.life_menu ul li')
    let menu = $('.life_style ul li')

    /* 최대한 변수 선언을 해서 만드는게 좋다
    사용자는 차이를 못느끼겠지만 변수선언없이 그냥 만들면 컴퓨터가 더많은 일들을 해서 느려지기때문이다 */

    tab.mouseover(function(){
        let target = $(this);
        let index = target.index();
        console.log(index);
        menu.css({opacity:0})
        menu.eq(index).css({opacity:1})
        /* li중에서 index번호와 같은걸 recall(eq)
        마우스를 올리면 전부 opacity가 0이 되는데 마우스를 올린 인덱스번호에 해당하는 li는 opacity가 1이되서 보인다*/
    })

