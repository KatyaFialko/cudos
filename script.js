$(document).ready(function(){
    setTimeout(function(){
        window.scrollTo(0, 0);
    }, 0);
});
// CHANGING IMAGES IN MENU ------------------------------------------------------------------------------------------
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let portfolio = document.querySelector(".portfolio");
let contact = document.querySelector(".contact_us");
let img1 = document.querySelector(".home_img");
let img2 = document.querySelector(".about_img");
let img3 = document.querySelector(".portfolio_img");
let img4 = document.querySelector(".contact_img");

let openMenu = document.getElementById("open-menu");
let circle1 = document.getElementById("Ellipse_5136");
let circle2 = document.getElementById("Ellipse_5135");
let circle3 = document.getElementById("Ellipse_5132");
let circle4 = document.getElementById("Ellipse_5134");
let circle5 = document.getElementById("Ellipse_5133");

// BLOCK 3 GREEN CIRCLE ----------------------------------------------------------------------------

// let greenCircle = document.getElementById('green-circle');
// let branding = document.getElementById('branding');
//
// branding.addEventListener("mouseover",function () {
//     img3.style.display = 'none';
//     greenCircle.style.display = 'block';
// });
// home.addEventListener("mouseout",function () {
//     home.style.opacity = '0.2';
//     img1.style.display = 'none'
// });

// FROM MENU TO MAIN PAGE -------------------------------------------------------------------------------------
home.addEventListener('click', function () {
    menuNav.style.width = '';
    (circle1.getAttribute('fill') === '#002920') ? (circle1.setAttribute('fill','none')) : (circle1.setAttribute('fill','#002920'));
    (circle2.getAttribute('fill') === '#002920') ? (circle2.setAttribute('fill','none')) : (circle2.setAttribute('fill','#002920'));
    (circle3.getAttribute('fill') === '#002920') ? (circle3.setAttribute('fill','none')) : (circle3.setAttribute('fill','#002920'));
    (circle4.getAttribute('fill') === '#002920') ? (circle4.setAttribute('fill','none')) : (circle4.setAttribute('fill','#002920'));
    (circle5.getAttribute('fill') === 'none') ? (circle5.setAttribute('fill','#002920')) : (circle5.setAttribute('fill','none'));
});
about.addEventListener('click', function () {
    menuNav.style.width = '';
    (circle1.getAttribute('fill') === '#002920') ? (circle1.setAttribute('fill','none')) : (circle1.setAttribute('fill','#002920'));
    (circle2.getAttribute('fill') === '#002920') ? (circle2.setAttribute('fill','none')) : (circle2.setAttribute('fill','#002920'));
    (circle3.getAttribute('fill') === '#002920') ? (circle3.setAttribute('fill','none')) : (circle3.setAttribute('fill','#002920'));
    (circle4.getAttribute('fill') === '#002920') ? (circle4.setAttribute('fill','none')) : (circle4.setAttribute('fill','#002920'));
    (circle5.getAttribute('fill') === 'none') ? (circle5.setAttribute('fill','#002920')) : (circle5.setAttribute('fill','none'));
});
portfolio.addEventListener('click', function () {
    menuNav.style.width = '';
    (circle1.getAttribute('fill') === '#002920') ? (circle1.setAttribute('fill','none')) : (circle1.setAttribute('fill','#002920'));
    (circle2.getAttribute('fill') === '#002920') ? (circle2.setAttribute('fill','none')) : (circle2.setAttribute('fill','#002920'));
    (circle3.getAttribute('fill') === '#002920') ? (circle3.setAttribute('fill','none')) : (circle3.setAttribute('fill','#002920'));
    (circle4.getAttribute('fill') === '#002920') ? (circle4.setAttribute('fill','none')) : (circle4.setAttribute('fill','#002920'));
    (circle5.getAttribute('fill') === 'none') ? (circle5.setAttribute('fill','#002920')) : (circle5.setAttribute('fill','none'));
});
contact.addEventListener('click', function () {
    menuNav.style.width = '';
    (circle1.getAttribute('fill') === '#002920') ? (circle1.setAttribute('fill','none')) : (circle1.setAttribute('fill','#002920'));
    (circle2.getAttribute('fill') === '#002920') ? (circle2.setAttribute('fill','none')) : (circle2.setAttribute('fill','#002920'));
    (circle3.getAttribute('fill') === '#002920') ? (circle3.setAttribute('fill','none')) : (circle3.setAttribute('fill','#002920'));
    (circle4.getAttribute('fill') === '#002920') ? (circle4.setAttribute('fill','none')) : (circle4.setAttribute('fill','#002920'));
    (circle5.getAttribute('fill') === 'none') ? (circle5.setAttribute('fill','#002920')) : (circle5.setAttribute('fill','none'));
});
// ------------------------------------------------------------------------------------------------------------
home.addEventListener("mouseover",function () {
    home.style.opacity = '1';
    img1.style.display = 'block'
});
home.addEventListener("mouseout",function () {
    home.style.opacity = '0.2';
    img1.style.display = 'none'
});
about.addEventListener("mouseover",function () {
    about.style.opacity = '1';
    img2.style.display = 'block'
});
about.addEventListener("mouseout",function () {
    about.style.opacity = '0.2';
    img2.style.display = 'none'
});
portfolio.addEventListener("mouseover",function () {
    portfolio.style.opacity = '1';
    img3.style.display = 'block'
});
portfolio.addEventListener("mouseout",function () {
    portfolio.style.opacity = '0.2';
    img3.style.display = 'none'
});
contact.addEventListener("mouseover",function () {
    contact.style.opacity = '1';
    img4.style.display = 'block'
});
contact.addEventListener("mouseout",function () {
    contact.style.opacity = '0.2';
    img4.style.display = 'none'
});

// SHOW AND CLOSE MENU-NAVIGATION --------------------------------------------------------------------
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let menuNav = document.getElementById("menu-navigation");

open.addEventListener('click', function () {
    (menuNav.style.width === '') ? (menuNav.style.width = '100%') : (menuNav.style.width = '');
});
// SHOW AND CLOSE BACK-MENU --------------------------------------------------------------------
let backMenu = document.getElementById('back-to-menu');

backMenu.addEventListener('click', function () {
    
});
// SCROLL --------------------------------------------------------------------------------------------
let anchors = [];
let currentAnchor = -1;
let isAnimating  = false;
let rightTxt = document.querySelector(".section-right-text")
$(function(){
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        // e.preventDefault();
        // e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1)
            || currentAnchor < 0 ) {
            currentAnchor = 3;
        }

        if (currentAnchor === 0){
            rightTxt.innerHTML = 'we are cudos agency';
            home.style.opacity = '1';
            img1.style.display = 'block';
            about.style.opacity = '0.2';
            portfolio.style.opacity = '0.2';
            contact.style.opacity = '0.2';
        }
        else if (currentAnchor === 1){
            rightTxt.innerHTML='abouts us';
            home.style.opacity = '0.2';
            about.style.opacity = '1';
            img2.style.display = 'block';
            img1.style.display = 'none';
            portfolio.style.opacity = '0.2';
            contact.style.opacity = '0.2';
        }
        else if(currentAnchor === 2){
            rightTxt.innerHTML='portfolio';
            home.style.opacity = '0.2';
            about.style.opacity = '0.2';
            portfolio.style.opacity = '1';
            img3.style.display = 'block';
            img2.style.display = 'none';
            contact.style.opacity = '0.2';
        }
        else if(currentAnchor === 3){
            rightTxt.innerHTML='contact us';
            home.style.opacity = '0.2';
            about.style.opacity = '0.2';
            portfolio.style.opacity = '0.2';
            contact.style.opacity = '1';
            img4.style.display = 'block';
            img3.style.display = 'none';
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();
});

// Animation open/close Menu -------------------------------------------------------------------------------------------


openMenu.addEventListener("click", function (event) {
    event.preventDefault();
    (circle1.getAttribute('fill') === '#002920') ? (circle1.setAttribute('fill','none')) : (circle1.setAttribute('fill','#002920'));
    (circle2.getAttribute('fill') === '#002920') ? (circle2.setAttribute('fill','none')) : (circle2.setAttribute('fill','#002920'));
    (circle3.getAttribute('fill') === '#002920') ? (circle3.setAttribute('fill','none')) : (circle3.setAttribute('fill','#002920'));
    (circle4.getAttribute('fill') === '#002920') ? (circle4.setAttribute('fill','none')) : (circle4.setAttribute('fill','#002920'));
    (circle5.getAttribute('fill') === 'none') ? (circle5.setAttribute('fill','#002920')) : (circle5.setAttribute('fill','none'));
});
// PHP MAILER -----------------------------------------------------
$(document).ready(function(){
    $("#form").submit(function(e) {  //устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: 'POST', //Метод отправки
            url: 'mail.php', //путь до php фаила отправителя
            data: form_data,
            success: function(data){
                if (data == 1){
                    alert   ('YAHOOO')
                }else   {
                    console.log(data);
                    alert('ERROR')
                }
                // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
            }
        });
    });
});


