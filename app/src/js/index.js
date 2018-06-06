$(document).ready(function () {


    /* ---------------------------------------------- /*
         * Phone mask
    /* ---------------------------------------------- */

    $('input[name="phone"]').inputmask({"mask": "+7(999) 999-9999"});


    /* ---------------------------------------------- /*
         * Fotorama
    /* ---------------------------------------------- */

    /* ---------------------------------------------- /*
         * Goods PopUp
    /* ---------------------------------------------- */

    $('.goodsItem').click(function () {

        const dataName = this.getAttribute('data-name');
        const title = this.querySelector('.goodsItem__title').textContent;
        const price = this.querySelector('.goodsItem__price').querySelector('.highlight').textContent;
        const desc = this.querySelector('.goodsItem__desc').innerHTML;
        const popUp = document.querySelector('.goodsPopUp');
        const imgList = [
            {img: './src/images/goods/'+ dataName +'/1.jpg'},
            {img: './src/images/goods/'+ dataName +'/2.jpg'},
            {img: './src/images/goods/'+ dataName +'/3.jpg'},
            {img: './src/images/goods/'+ dataName +'/4.jpg'},
            {img: './src/images/goods/'+ dataName +'/5.jpg'},
            {img: './src/images/goods/'+ dataName +'/6.jpg'},
            {img: './src/images/goods/'+ dataName +'/7.jpg'},
            {img: './src/images/goods/'+ dataName +'/8.jpg'},
            {img: './src/images/goods/'+ dataName +'/9.jpg'},
            {img: './src/images/goods/'+ dataName +'/10.jpg'},
            {img: './src/images/goods/'+ dataName +'/11.jpg'},
            {img: './src/images/goods/'+ dataName +'/12.jpg'},
            {img: './src/images/goods/'+ dataName +'/13.jpg'},
            {img: './src/images/goods/'+ dataName +'/14.jpg'},
            {img: './src/images/goods/'+ dataName +'/15.jpg'},
        ];

        popUp.querySelector('.goodsPopUp__title').textContent = title;
        popUp.querySelector('input[name="project_name"]').setAttribute('value', title);
        popUp.querySelector('.goodsPopUp__desc').innerHTML = desc;
        popUp.querySelector('.goodsPopUp__price').querySelector('.highlight').textContent = price;
        popUp.querySelector('.goodsPopUp__cover').innerHTML = '<div id="fotorama" class="fotorama" data-auto="false"></div>';

        $('#fotorama').fotorama({
            nav: 'thumbs',
            allowfullscreen: 'true',
            arrows: 'true',
            // click: 'true',
            loop: 'true',
            thumbwidth: '110',
            thumbheight: '60',
            width: '100%',
            height: 'auto',
            maxheight: '377',
            data: imgList
        });

    });

    $('.goodsItem').magnificPopup({
        items: {
            src: $('#goodsPopUp'),
            type: 'inline'
        },
        preloader: false,
        showCloseBtn: false,
        autoFocusLast: true,
        fixedContentPos: false,
    });


    /* ---------------------------------------------- /*
         * Request PopUp
    /* ---------------------------------------------- */

    $('#callToMe').magnificPopup({
        items: {
            src: $('#requestPopUp'),
            type: 'inline',
        },
        preloader: false,
        showCloseBtn: false,
        autoFocusLast: true,
        fixedContentPos: false,
    });


    /* ---------------------------------------------- /*
         * PopUp close
    /* ---------------------------------------------- */

    $('.popUp__close').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /* ---------------------------------------------- /*
         * Form submit
    /* ---------------------------------------------- */

    $('form').on('submit', function () {

        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: form.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                    src: $('#thankyouPopUp'),
                    type: 'inline',
                },
                preloader: false,
                showCloseBtn: false,

            });
            setTimeout(function() {
                // Done Functions
                form.trigger("reset");
                $.magnificPopup.close();
            }, 4000);
        });
        return false;
    });

});
