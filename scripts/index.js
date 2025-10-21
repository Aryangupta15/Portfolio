const { jsx } = require("react/jsx-runtime");

const index = {};

index.$menu = $('#sideMenu');
index.$navItem = $('.navItem');
index.$navItemName = $('.navItemName')
index.$home = $('#home');
index.$about=$('#about');
index.$skills = $('#skills');
index.$works = $('#works');
index.$contact = $('#contact');
index.$menuButton = $('#menuButton');
index.$scrollDown = $('#scrollDown');
index.isOpen = false;

// Scroll function
index.scroll = function(target) {
  $('html,body').animate({ scrollTop: $(target).offset().top }, 500);
}

// Menu button function
index.showHideMenu = function() {
  index.$menu.toggleClass('sideMenuHide sideMenuShow');
  index.isOpen = !index.isOpen;
}

// Mobile class changes on initial load
if ($(window).width() <= 990) {
  index.$menu.addClass('sideMenuHide').removeClass('sideMenuShow');
  index.$scrollDown.hide();
}

index.eventListeners = function() {
  // when windox resizes between large and small displayes
  $(window).on('resize', function() {
    if ($(window).width() > 990) {
      index.$menu.removeClass('sideMenuHide').addClass('sideMenuShow')
      index.$scrollDown.show();
      index.isOpen= false;
    } else {
      index.$menu.removeClass('sideMenuShow').addClass('sideMenuHide');
      index.isOpen = false;
      index.$scrollDown.hide();
    }
  });

  // Nav menu click events for scroll function
  $('a[href*=\\#]').on('click', function () {
    index.scroll(this.hash);
  });

  // Menu button click event
  index.$menuButton.on('click', index.showHideMenu);

  // Hide menu when clicking a link
  index.$navItem.on('click', function() {
    if (index.isOpen) {// Hide menu when clicking a link
      index.showHideMenu();
    }
  });

  // Menu button ENTER key event
  index.$menuButton.on('keypress', function(e){
    if (e.which === 13) {
      $(this).trigger('click');
    }
  })
}

// init method
index.init = function() {
  index.eventListeners();
}

// Document Ready
$(function() {
  index.init();
})

                                          // cursor pointer theme

// document.onmousemove = function (e){
//   var y = e.pageY;
//   var x = e.pageX;

//   document.querySelector('.cursor').style.left = `${x}px`;
//   document.querySelector('.cursor').style.top = `${y}px`;
// }

// Shery.mouseFollower({
//   //Parameters are optional.
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 0,
// });

// changing theme to black.
var root = document.querySelector(":root");

  function ChangeBlack(){
    root.style.setProperty("--f","#000000");
    root.style.setProperty("--main","#494949");
    root.style.setProperty("--second","#969696");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangeBlue(){
    root.style.setProperty("--f","#4E31AA");
    root.style.setProperty("--main","#2F58CD");
    root.style.setProperty("--second","#7ed8ff");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangeRed(){
    root.style.setProperty("--f","#D21312");
    root.style.setProperty("--main","#ED2B2A");
    root.style.setProperty("--second","#ffa0a0ff");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangePurple(){
    root.style.setProperty("--f","#2E073F");
    root.style.setProperty("--main","#7A1CAC");
    root.style.setProperty("--second","#F5C6A5");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangeYellow(){
    root.style.setProperty("--f","#F98404");
    root.style.setProperty("--main","#ffbb1bff");
    root.style.setProperty("--second","#F98404");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangeGreen(){
    root.style.setProperty("--f","#004030");
    root.style.setProperty("--main","#4A9782");
    root.style.setProperty("--second","#DCD0A8");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangeBrown(){
    root.style.setProperty("--f","#604652");
    root.style.setProperty("--main","#735557");
    root.style.setProperty("--second","#97866A");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }

  function ChangeTeal(){
    root.style.setProperty("--f","#00545bff");
    root.style.setProperty("--main","#00a5a8ff");
    root.style.setProperty("--second","#00e5ffff");
    root.style.setProperty("--body-color","rgba(235, 235, 235, 0.565)");
  }


//Theme togger for mobile devices

    document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");
  const themeOptions = document.querySelector(".theme-options");

  themeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    themeOptions.classList.toggle("show");
  });

  // close menu when clicking outside
  document.addEventListener("click", () => {
    themeOptions.classList.remove("show");
  });
});
