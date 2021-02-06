    // parallax backgrounds
    $('.promo').parallax({imageSrc: 'promo/img/promo_bg.jpg'});
    $('.about-me').parallax({imageSrc: 'promo/img/second_bg.jpg'});

    if(window.innerWidth >= 767) {
        $('.my-works').parallax({imageSrc: 'promo/img/my-work_bg.jpg'});
    }

    // hover main items
    let mainItemIcon = document.querySelectorAll('.img__item-icon'),
        itemTitle = document.querySelectorAll('.item__title'),
        itemDescription = document.querySelectorAll('.item__descr');

    function HoverMainIcon() {
        for (let i = 0; i < mainItemIcon.length; i++) {
            mainItemIcon[i].addEventListener('mouseover', function() {
                mainItemIcon[i].style.transform = "translateY(-25px)";
                itemTitle[i].style.transform = "translateY(-25px)";
                itemDescription[i].style.opacity = "1";
            });
        }
    }

    function OutHoverMainIcon() {
        for (let i = 0; i < mainItemIcon.length; i++) {
            mainItemIcon[i].addEventListener('mouseout', function() {
                mainItemIcon[i].style.transform = "translateY(0)";
                itemTitle[i].style.transform = "translateY(0)";
                itemDescription[i].style.opacity = "0";
            });
        }
    }

    // hover contacts
    let contactItemIcon = document.querySelectorAll('.contacts__item-logo'),
        contactItemDescr = document.querySelectorAll('.contacts__item-descr');

    function HoverContactIcon() {
        for (let i = 0; i < contactItemIcon.length; i++) {
            contactItemIcon[i].addEventListener('mouseover', function () {
                contactItemDescr[i].style.transform = "translateY(0)";
                contactItemDescr[i].style.opacity = "1";
            });
        }
    }

    function OutHoverContactIcon() {
        for (let i = 0; i < contactItemIcon.length; i++) {
            contactItemIcon[i].addEventListener('mouseout', function () {
                contactItemDescr[i].style.transform = "translateY(25px)";
                contactItemDescr[i].style.opacity = "0";
            });
        }
    }

    if(window.innerWidth >= 1201) {
        HoverMainIcon();
        OutHoverMainIcon();
        HoverContactIcon();
        OutHoverContactIcon();
    }

    // hamburger
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.nav__menu'),
            menuItem = document.querySelectorAll('.menu__item'),
            hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('nav__menu_active');
            })
        })
    })

    // tabs
    const btnWrapper = document.querySelector('.btn-wrapper'),
        tabButton = document.querySelectorAll('.tab-button'),
        tabItems = document.querySelectorAll('.tab__items');

        function Hide () {
            for (let i = 0; i < tabItems.length; i++) {
                tabItems[i].classList.remove('show');
                tabItems[i].classList.add('hide');
                tabButton[i].classList.remove('active-tab');
            }
        }

        function Show(e) {
            tabItems[e].classList.add('show');
            tabItems[e].classList.remove('hide');
            tabButton[e].classList.add('active-tab');
        }

        Hide();
        Show(0);

        btnWrapper.addEventListener('click', function (e) {
            let btnClick = e.target;
            if (btnClick && btnClick.classList.contains('tab-button')) {
                for (let i = 0; i < tabButton.length; i++) {
                    if (tabButton[i] == btnClick) {
                        Hide();
                        Show(i);
                    }
                }
            }
        });

        // slider review
    const slide = document.querySelectorAll('.slider-block__wrap__item'),
        slideRow = document.querySelector('.slide-row'),
        count = document.querySelector('.counter'),
        title = document.querySelectorAll('.slider-block__wrap__item__title'),
        photo  = document.querySelectorAll('.photo'),
        review = document.querySelectorAll('.slider-block__wrap__item__review');
    let swipeStep =1,
        size=406,
        clickCount = 0;
    function swipeLeft (){
        slideRow.style.transition = "transform .3s ease-in-out";
        swipeStep >= slide.length - 1 ? false : swipeStep++;
        slideRow.style.transform = 'translateX(' + (-swipeStep * size) + 'px)';
        change();
        giveclass();
        document.querySelector('.slider-arrows').onclick = '';
        setTimeout(function(){
            if (clickCount == (slide.length - 4)){
                clickCount = 1;
            } else {
                clickCount++;
            }
            count.innerHTML = clickCount + ' из ' + (slide.length -4);
            document.querySelector('.slider-arrows').onclick = (function(e){
                if(e.target && e.target.classList.contains('arrowNext')){
                    swipeLeft();
                } else
                if(e.target.classList.contains('arrowPrev')){
                    swipeRight();
                }
            });
        },300)
    }
    function swipeRight (){
        slideRow.style.transition = "transform .3s ease-in-out";
        swipeStep <= 0 ? false : swipeStep--;
        slideRow.style.transform = 'translateX(' + (-swipeStep * size) + 'px)';
        change();
        giveclass();
        document.querySelector('.slider-arrows').onclick = '';
        setTimeout(function(){
            if (clickCount == 1){
                clickCount = slide.length - 4;
            } else {
                clickCount--;
            }
            count.innerHTML = clickCount + ' из ' + (slide.length -4);
            document.querySelector('.slider-arrows').onclick = (function(e){
                if(e.target && e.target.classList.contains('arrowNext')){
                    swipeLeft();
                } else
                if(e.target.classList.contains('arrowPrev')){
                    swipeRight();
                }
            });
        },300)
    }
    swipeLeft();
    document.querySelector('.slider-arrows').onclick = (function(e){
        if(e.target && e.target.classList.contains('arrowNext')){
            swipeLeft();
        } else
        if(e.target.classList.contains('arrowPrev')){
            swipeRight();
        }
    });
    document.querySelector('.slide-row').onclick = (function(e){
        if(e.target && e.target.classList.contains('following')){
            swipeLeft();
        } else
        if(e.target.classList.contains('previous')){
            swipeRight();
        }
    });
    function giveclass(){
        for(let i = 0; i < slide.length; i++){
            slide[i].classList.remove('current');
            slide[i].classList.remove('following');
            slide[i].classList.remove('previous');
            slide[i].classList.remove('no-transition');
            title[i].classList.remove('following');
            title[i].classList.remove('previous');
            title[i].classList.remove('no-transition');
            photo[i].classList.remove('following');
            photo[i].classList.remove('previous');
            photo[i].classList.remove('no-transition');
            review[i].classList.remove('following');
            review[i].classList.remove('previous');
            review[i].classList.remove('no-transition');

        }
        slide[swipeStep-1].classList.add('previous');
        slide[swipeStep].classList.add('current');
        slide[swipeStep+1].classList.add('following');
        slide[swipeStep-1].classList.add('previous');
        slide[swipeStep+1].classList.add('following');
        photo[swipeStep-1].classList.add('previous');
        photo[swipeStep+1].classList.add('following');
        title[swipeStep-1].classList.add('previous');
        title[swipeStep+1].classList.add('following');
        review[swipeStep-1].classList.add('previous');
        review[swipeStep+1].classList.add('following');
    }
    function giveclassNoTransition(){
        for(let i = 0; i < slide.length; i++){
            slide[i].classList.remove('current');
            slide[i].classList.remove('following');
            slide[i].classList.remove('previous');
            title[i].classList.remove('following');
            title[i].classList.remove('previous');
            title[i].classList.remove('no-transition');
            photo[i].classList.remove('following');
            photo[i].classList.remove('previous');
            photo[i].classList.remove('no-transition');
            review[i].classList.remove('following');
            review[i].classList.remove('previous');
            review[i].classList.remove('no-transition');
            slide[i].classList.add('no-transition');
        }
        slide[swipeStep-1].classList.add('previous');
        slide[swipeStep].classList.add('current');
        slide[swipeStep+1].classList.add('following');
        slide[swipeStep+1].classList.add('following');
        photo[swipeStep-1].classList.add('previous');
        photo[swipeStep+1].classList.add('following');
        title[swipeStep-1].classList.add('previous');
        title[swipeStep+1].classList.add('following');
        review[swipeStep-1].classList.add('previous');
        review[swipeStep+1].classList.add('following');
    }
    function change(){
        slideRow.addEventListener('transitionend', function(){
            slideRow.style.transition = "none";
            if(document.querySelectorAll('.slider-block__wrap__item')[swipeStep].id === 'First-clone'){
                swipeStep = slide.length - 3;
                slideRow.style.transform = 'translateX(' + (-swipeStep * size) + 'px)';
                giveclassNoTransition();
            }
            if(document.querySelectorAll('.slider-block__wrap__item')[swipeStep].id === 'Second-clone'){
                swipeStep = 2;
                slideRow.style.transform = 'translateX(' + (-swipeStep * size) + 'px)';
                giveclassNoTransition();
            }
            slideRow.style.transform = 'translateX(' + (-swipeStep * size) + 'px)';
        });
    }

    // Smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();