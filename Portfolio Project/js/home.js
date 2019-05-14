var hamMenu = document.querySelector(".ham-menu"),
    menu = document.querySelector(".opened-menu"),
     num = 0,
    dnum = 0,
    featured1 = document.querySelector(".featured-work1"),
    overlay1 = document.querySelector(".middle");
   


function openMenu(){
   hamMenu.src = "imgs/icons/x.svg";  
   hamMenu.style.width = "5%";
   menu.style.right = "0%";
   num = num + 1;    
    

     if (num > 1) {
        num = 0;

        menu.style.right = "-60%";
        hamMenu.src = "imgs/icons/menu.svg";
        hamMenu.style.width = "7%";

    }

    dnum = 0;
    
  
}



///////// SCROLL TO TOP ///////
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 600) {
  document.getElementById("top").style.opacity = 1;
  document.getElementById("top").style.display = "block";
    
    

  } else {
    document.getElementById("top").style.opacity = 0;
    document.getElementById("top").style.display = "none";
  }
}

var el = document.querySelector('#top-of-page');
el.scrollTop = el.scrollHeight;

setTimeout(function(){
  el.scrollTop = 0;
}, 500);




//
//// OPEN HAMBURGER MENU 
//function openMenu() {
//    
//    num = num + 1;
//    topmenu.style.height = "auto";
//    menu.style.left = "0%";
//    xMenu.style.opacity = 1;
//    hamburgerMenu.style.opacity = 0;
//    //container.style.display = "none";
//
//    if (num > 1) {
//        num = 0;
//
//        hamburgerMenu.style.opacity = 1;
//        xMenu.style.opacity = 0;
//
//        menu.style.left = "-100%";
//        dropRecipes.style.opacity = 0;
//        addIcon.innerHTML = "+";
//
//        topmenu.style.height = "auto";
//        //        container.style.display = "block";
//    }
//
//    dnum = 0;
//}
//
//
// 