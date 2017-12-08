var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("vessel").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("vessel").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
