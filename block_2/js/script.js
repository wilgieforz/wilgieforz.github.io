const btnWrapper = document.querySelector('.modal__sidebar'),
    tabButton = document.querySelectorAll('.sidebar__row'),
    tabItems = document.querySelectorAll('.modal__window');

    function Hide () {
        for (let i = 0; i < tabItems.length; i++) {
            tabItems[i].classList.remove('show');
            tabItems[i].classList.add('hide');
            tabButton[i].classList.remove('sidebar__row_active');
        }
    }

    function Show(e) {
        tabItems[e].classList.add('show');
        tabItems[e].classList.remove('hide');
        tabButton[e].classList.add('sidebar__row_active');
    }

    Hide();
    Show(0);

    btnWrapper.addEventListener('click', function (e) {
        let btnClick = e.target;
        if (btnClick && btnClick.classList.contains('sidebar__row')) {
            for (let i = 0; i < tabButton.length; i++) {
                if (tabButton[i] == btnClick) {
                    Hide();
                    Show(i);
                }
            }
        }
});

    function hoverModal(evt, hover_text) {
        let i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("modal__sidebar_hovered");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("sidebar__row");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(hover_text).style.display = "block";
        evt.currentTarget.className += " active";
    }