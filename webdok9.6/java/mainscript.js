// GETTING ELEMENTS
var body = document.getElementsByTagName("BODY")[0];
var audio = new Audio('../audio/gif_sound.mp3');
var pageoverlaywrap = document.getElementById("pageoverlaywrap");
var pageoverlay = document.getElementById("pageoverlay");

// forside
var forside = document.getElementById('forside');
var splat = document.getElementById('splatter');
var scrollicon = document.getElementById('scrollwrap');

// menu
var menuoverlay = document.getElementById('menuoverlay');
var menuoverlaytest = document.getElementById('menuoverlaytest');
var Bar = document.getElementById('moveBar');
var barting = document.getElementById('barting');
var MenuL = document.getElementById('menuL');
var MenuLBG = document.getElementById('menuLBG');
var MenuR = document.getElementById('menuR');
var MenuRBG = document.getElementById('menuRBG');

// right section
var hiddenSideR = document.getElementById('hiddenSideR');
var Jonasvideo = document.getElementById('Jonasvideo');
var sectionR = document.getElementById('sectionwrapR');
var eleverne = document.getElementById('eleverne');


// P2
var Righ1p2 = document.getElementById('Righ1p2');
var textwrap1 = document.getElementById('textwrap1');

// P3
var Righ1p3 = document.getElementById('Righ1p3');
var textwrap2 = document.getElementById('textwrap2');


// left section
var hiddenSideL = document.getElementById('hiddenSideL');
var sectionL = document.getElementById('sectionwrapL');
var skolen = document.getElementById('skolen');

// ON START
setTimeout(function () {
    scrollicon.style.opacity = "0.6", scrollicon.style.transition = "1s"
}, 2000);
var webstate = 0;
var allowscroll = true;
var downcheck = false;
var failsafe = true;
window.addEventListener("wheel", nonscrollwheel, true)


// ON RESIZE
window.addEventListener("resize", function(){
    wmin = window.innerWidth / 5 + "px";
    wmax = (window.innerWidth / 5) * 4 + "px";
    if (webstate < 1) {
    Bar.style.left = window.innerWidth / 2 + "px";
    removeAnimation();
    } 
    if (webstate < 1 && window.pageYOffset > splatpng.offsetTop) {
        window.scrollTo(0, menuoverlay.offsetHeight);
    }
}, true);

var paralaxenabler = false;

// function failfix(){
//     if (failsafe) {
//         failsafe = false;
//         setTimeout(function () {
//             failsafe = true;
//         }, 500);
//         setTimeout(function () {
//             allowscroll = true;
//         }, 1000);
//     }
// }


// SCROLLING
// WEBSTATE 0
// scroller ned "til menu fra forsiden"
function nonscrollwheel(event) {
    if (webstate == 0) {
        if (event.deltaY > 0 && allowscroll) {
            splat.style.transition = "0.4s";
            allowscroll = false;

            window.scroll({
            top: menuoverlay.offsetHeight,
            left: 0,
            behavior: "smooth"
            });


            setTimeout(function () {
                allowscroll = true;
            }, 1000);
            // animation hide on scroll
            splat.style.opacity = "0"
            scrollicon.style.opacity = "0";

            
            // scroller op "til forsiden"
        } else if (event.deltaY < 0 && allowscroll) {
            allowscroll = false;
            splat.src = "animations/88888888.gif"+"?a="+Math.random();

            window.scroll({
                top: forside.offsetTop,
                left: 0,
                behavior: "smooth"
                });



            scrollicon.style.display = "initial"
            splat.style.display = "initial"
            setTimeout(function () {
                audio.play();
            }, 450);
            setTimeout(function () {
                allowscroll = true;
            }, 1000);
            // animation show on scroll
            setTimeout(function () {
                splat.style.opacity = 1
            }, 500);
            setTimeout(function () {
                splat.style.opacity = 1
            }, 500);
            setTimeout(function () {
                scrollicon.style.opacity = "0.6"
            }, 2000);
        }

        // WEBSTATE 1-2
        // scroller ned "til freescroll sections"
    } else if (webstate > 0) {
        if (event.deltaY > 0 && allowscroll) {
            allowscroll = false;
            Jonasvideo.pause();
            // pageoverlay.style.opacity = 0.20;
            body.style.overflowY = "inherit"
            paralaxenabler = true;
            // scroller op "til menu"
        } else if (event.deltaY < 0 && allowscroll && window.pageYOffset == MenuL.offsetTop) {
            allowscroll = false;
            setTimeout(function () {
                allowscroll = true;
            }, 1000);
            resetMenu();
        }
    }
}


var splatpng = document.getElementById("splatpng");
var splatpngimg = document.getElementById("splatpngimg");
var splatpng2 = document.getElementById("splatpng2");
var splatpng2img = document.getElementById("splatpng2img");
var splatpng3 = document.getElementById("splatpng3");
var splatpng3img = document.getElementById("splatpng3img");
var splatpng4 = document.getElementById("splatpng4");
var splatpng4img = document.getElementById("splatpng4img");

var splatpngL = document.getElementById("splatpngL");
var splatpngLimg = document.getElementById("splatpngLimg");
var splatpng2L = document.getElementById("splatpng2L");
var splatpng2imgL = document.getElementById("splatpng2imgL");
var splatpng3L = document.getElementById("splatpng3L");
var splatpng3imgL = document.getElementById("splatpng3imgL");




var windowYPosi = window.pageYOffset;
// tilbage til menu on scroll up
function topchecker() {
    // pageoverlaywrap.style.transform = "translateY(" + (window.pageYOffset) + "px)";
    if (window.pageYOffset > MenuL.offsetTop + 100 && webstate > 0) {
        downcheck = true;
    }
    if (window.pageYOffset == 0 && downcheck) {
        downcheck = false;
        if (webstate == 1) {
        // pageoverlay.style.opacity = 1;
        Jonasvideo.play();
        }
        body.style.overflowY = "hidden"
        setTimeout(function () {
            allowscroll = true;
        }, 1000);
    }


// scroll triggers

    // animation og trigger til splatter Right
    // if (window.pageYOffset > splatpng2.offsetHeight-window.innerHeight+100 && webstate == 1 && paralaxenabler == true) {

    //     splatpng2img.style.transform = "translate(-50%, -50%) scale(1.7)"
    //     }
    //     if (window.pageYOffset > splatpng3.offsetHeight && webstate == 1 && paralaxenabler == true) {
    //         splatpng3img.style.transform = "translate(-50%, -50%) scale(1.7)"
    //         } 
    //         if (window.pageYOffset > splatpng4.offsetHeight+600 && webstate == 1 && paralaxenabler == true) {
    //             splatpng4img.style.transform = "translate(-50%, -50%) scale(1.7)"
    //             }

    var howmuch = ((MenuL.offsetTop) - window.pageYOffset) / ((MenuL.offsetTop) - (MenuL.offsetHeight))

    if (webstate == 1 && paralaxenabler == true) {
            splatpng2.style.transition = "0s"
            splatpng3.style.transition = "0s"
            splatpng.style.transition = "0s"
            Jonasvideo.style.transition = "0s"

    if (howmuch > 0.5) {
    splatpng2img.style.transform = "translate(-50%, -50%) scale(1.7)"
    }
    if (howmuch > 1.5) {
    splatpng3img.style.transform = "translate(-50%, -50%) scale(1.7)"
    }
    if (howmuch > 2.5) {
    splatpng4img.style.transform = "translate(-50%, -50%) scale(1.7)"
    }

        Jonasvideo.style.transform = "translateY("+(1+howmuch*200*-1)+"%) translate(-50%, -50%)"
        splatpng2.style.transform = "translateY("+((1-howmuch)*200)+"px) translate(-50%, -50%) rotate(-60deg)"
        splatpng3.style.transform = "translateY("+((2-howmuch)*100)+"px) translate(-50%, -50%) scaleX(-1)"
        splatpng4.style.transform = "translateY("+((3-howmuch)*200)+"px) translate(-50%, -50%) rotate(60deg)"

        Righ1p2.style.transform = "translateY("+((1-howmuch)*600)+"px) translate(-50%, -50%)"
        textwrap1.style.transform = "translateY("+((1-howmuch)*300)+"px) translate(-50%, -50%)"

        Righ1p3.style.transform = "translateY("+((2-howmuch)*600)+"px) translate(-50%, -50%)"
        textwrap2.style.transform = "translateY("+((2-howmuch)*300)+"px) translate(-50%, -50%)"

        Righ1p4.style.transform = "translateY("+((3-howmuch)*600)+"px) translate(-50%, -50%)"
        textwrap3.style.transform = "translateY("+((3-howmuch)*300)+"px) translate(-50%, -50%)"
    }

        if (webstate == 2 && paralaxenabler == true) {

            splatpng2L.style.transition = "0s"
            splatpng3L.style.transition = "0s"
            splatpngL.style.transition = "0s"

            if (howmuch > 0.5) {
                splatpng2imgL.style.transform = "translate(-50%, -50%) scale(1.7)"
                }
                if (howmuch > 1.5) {
                splatpng3imgL.style.transform = "translate(-50%, -50%) scale(1.7)"
                }

                splatpng2L.style.transform = "translateY("+((1-howmuch)*200)+"px) translate(-50%, -50%) rotate(-60deg)"
                splatpng3L.style.transform = "translateY("+((2-howmuch)*100)+"px) translate(-50%, -50%) scaleX(-1)"
                leftp1.style.transform = "translateY("+(1+howmuch*200*-1)+"%) translate(-50%, -50%)"
                textwrap.style.transform = "translateY("+(1+howmuch*200*-1)+"%) translate(-50%, -50%)"
                
        
                leftp2.style.transform = "translateY("+((1-howmuch)*600)+"px) translate(-50%, -50%)"
                textwrapL1.style.transform = "translateY("+((1-howmuch)*300)+"px) translate(-50%, -50%)"
        
                leftp3.style.transform = "translateY("+((2-howmuch)*600)+"px) translate(-50%, -50%)"
                textwrapL2.style.transform = "translateY("+((2-howmuch)*300)+"px) translate(-50%, -50%)"
        }
}

// THE BAR
Bar.addEventListener('mousedown', mouseDown, false);
Bar.addEventListener('mouseup', mouseUp, false);

// når man trykker
function mouseDown() {
    removeAnimation();
    window.addEventListener('mousemove', move, true);
    barting.style.opacity = 0;
    startposbar = Bar.style.left;
}

// når man slipper
function mouseUp() {
    window.removeEventListener('mousemove', move, true);
    resetMenu();
}

// variable til bar animation
var wmin = window.innerWidth / 5 + "px";
var wmax = (window.innerWidth / 5) * 4 + "px";
var LeftPercentage;
var RightPercentage;

var MenuLBG = document.getElementById('menuLBG');


// trek funktion
function move() {
    // string til integer
    var minpos = parseInt(wmin, 10);
    var maxpos = parseInt(wmax, 10);
    var startpos = parseInt(startposbar, 10);


    // source
    if (event.clientX >= minpos && event.clientX <= maxpos) {


        // Bar.style.transform = "translateX(" + (event.clientX-window.innerWidth / 2) + "px)";
        MenuL.style.transform = "translateX(" + (event.clientX-window.innerWidth) + "px)";
        MenuR.style.transform = "translateX(" + (event.clientX) + "px)";

        // Bar.style.left = event.clientX + 'px';
        // MenuL.style.width = event.clientX + 'px';


        LeftPercentage = ((startpos) - (event.clientX)) / (startpos - minpos);
        RightPercentage = ((startpos) - (event.clientX)) / (startpos - maxpos);

        // right menu animationer
        MenuRBG.style.backgroundPositionX = -25*(1+RightPercentage) + "vw";
        MenuRBG.style.filter = "blur(" + ((LeftPercentage * 20) + "px)");
        MenuRBG.style.opacity = 1 - LeftPercentage;
        eleverne.style.filter = "blur(" + ((LeftPercentage * 80) + "px)");
        eleverne.style.opacity = 1 - LeftPercentage;
        eleverne.style.transform = "translateX(" + (event.clientX-window.innerWidth/2)*-0.55 + "px) translate(-50%, -50%) scale("+(1+LeftPercentage)+")"
        if (LeftPercentage > 0) {
            menuoverlay.style.opacity = 0.5 - LeftPercentage*2;
            menuoverlaytest.style.opacity = 0.5 - LeftPercentage;
            Bar.style.transform = "translateX(" + (event.clientX-window.innerWidth / 2) + "px) translate(-50%, 0%) scaleX("+(1-LeftPercentage)+")";
        }

        // left menu animationer
        MenuLBG.style.backgroundPositionX = 25*(1+LeftPercentage) + "vw";
        MenuLBG.style.filter = "blur(" + ((RightPercentage * 20) + "px)");
        MenuLBG.style.opacity = 1 - RightPercentage;
        skolen.style.filter = "blur(" + ((RightPercentage * 80) + "px)");
        skolen.style.opacity = 1 - RightPercentage;
        skolen.style.transformOrigin = "center";
        skolen.style.transform = "translateX(" + (event.clientX-window.innerWidth/2)*-0.55 + "px) translate(-50%, -50%) scale("+(1+RightPercentage)+")"
        if (RightPercentage > 0) {
            menuoverlay.style.opacity = 0.5 - RightPercentage/2;
            menuoverlaytest.style.opacity = 0.6 - RightPercentage;
            Bar.style.transform = "translateX(" + (event.clientX-window.innerWidth / 2) + "px) translate(-50%, 0%) scaleX("+(1-RightPercentage)+")";
        }

        // webstate triggers
    } else if (event.clientX <= minpos) {
        Bar.removeEventListener('mouseup', mouseUp, false);
        RightSectionPicked();
    } else if (event.clientX >= maxpos) {
        Bar.removeEventListener('mouseup', mouseUp, false);
        LeftSectionPicked();
    }
}

// right section triggered
function RightSectionPicked() {
    body.style.overflowY = "hidden"
    forside.style.display = "none"
    window.scroll({
        top: MenuL.offsetTop,
        left: 0,
        });
    webstate = 1;
    // vis
    Jonasvideo.setAttribute("controls","controls")   
    MenuR.style.transform = "translateX(0%)";
    hiddenSideR.style.opacity = "1";
    sectionR.style.display = "initial"
    splatpngimg.style.transition = "1.5s";
    splatpngimg.style.transform = "translate(-50%, -50%) scale(1.7)"
    
    // fjern
    MenuL.style.transform = "translateX(-100%)";
    Bar.style.transform = "translateX(" + (-window.innerWidth/2) + "px) scaleX(0)";
    scrollicon.style.display = "none"
    splat.style.display = "none"
    MenuRBG.style.opacity = 0;
    menuoverlaytest.style.opacity = 0;
    menuoverlay.style.opacity = 0;
    eleverne.style.opacity = 0;

    // add animation times
    MenuR.style.transition = "0.3s"
    MenuL.style.transition = "0.3s";
    Bar.style.transition = "0.3s";
    // andet
    window.removeEventListener('mousemove', move, true);
    allowscroll = true;
    Jonasvideo.play();
}

// left section triggered
function LeftSectionPicked() {
    body.style.overflowY = "hidden"
    forside.style.display = "none"
    window.scroll({
        top: MenuL.offsetTop,
        left: 0,
        });
    webstate = 2;
    // vis
    hiddenSideL.style.opacity = "1";
    // hiddenSideR.style.opacity = "1";
    sectionL.style.display = "initial"
    splatpngLimg.style.transition = "1.5s";
    splatpngLimg.style.transform = "translate(-50%, -50%) scale(1.7)"

    // fjern
    MenuL.style.transform = "translateX(0%)";
    MenuR.style.transform = "translateX(100%)";
    Bar.style.transform = "translateX(" + (window.innerWidth/2) + "px) scaleX(0)";

    scrollicon.style.display = "none"
    splat.style.display = "none"
    MenuLBG.style.opacity = 0;
    menuoverlaytest.style.opacity = 0;
    menuoverlay.style.opacity = 0;
    skolen.style.opacity = 0;
    // add animation times
    MenuL.style.transition = "0.3s";
    Bar.style.transition = "0.3s";
    MenuR.style.transition = "0.3s";
    // andet

    window.removeEventListener('mousemove', move, true);
    allowscroll = true;
}

// RESETTER TIL MENU "webstate 0"
function resetMenu() {
    forside.style.display = "inherit"
    // pageoverlay.style.opacity = 0.20;
    window.scroll({
        top: MenuL.offsetHeight,
        left: 0,
        });
    webstate = 0;
    addAnimation();
    paralaxenabler = false;
    // The bar
    Bar.style.transform = "translateX(-50%)";
    barting.style.opacity = 0.8;
    // MENU
    menuoverlay.style.opacity = 0.5
    menuoverlaytest.style.opacity = 0.5

    // Right menu
    MenuR.style.transform = "translateX(50%)";
    MenuRBG.style.backgroundPositionX = "-25vw";
    MenuRBG.style.opacity = 1;
    Jonasvideo.pause();
    MenuRBG.style.opacity = 1;
    MenuRBG.style.filter = "blur(0px)";
    eleverne.style.opacity = 1;
    eleverne.style.filter = "blur(0px)";
    eleverne.style.transform = "translateX(0) translate(-50%, -50%) scale(1)"
    Jonasvideo.removeAttribute("controls","controls")   

    // Left menu
    MenuL.style.transform = "translateX(-50%)";
    MenuLBG.style.backgroundPositionX = "25vw";
    MenuLBG.style.opacity = 1;
    MenuLBG.style.filter = "blur(0px)";
    skolen.style.opacity = 1;
    skolen.style.filter = "blur(0px)";
    skolen.style.transform = "translateX(0) translate(-50%, -50%) scale(1)"

    // alt under
    sectionwrapR.style.display = "none"
    sectionwrapL.style.display = "none"

    splatpngLimg.style.transition = "0.3s"
    splatpngLimg.style.transform = "translate(-50%, -50%) scale(0.1)"
    splatpng2imgL.style.transform = "translate(-50%, -50%) scale(0.1)"
    splatpng3imgL.style.transform = "translate(-50%, -50%) scale(0.1)"

    splatpngimg.style.transition = "0.3s"
    splatpngimg.style.transform = "translate(-50%, -50%) scale(0.1)"
    splatpng2img.style.transform = "translate(-50%, -50%) scale(0.1)"
    splatpng3img.style.transform = "translate(-50%, -50%) scale(0.1)"
    splatpng4img.style.transform = "translate(-50%, -50%) scale(0.1)"

    // listeners
    Bar.addEventListener('mouseup', mouseUp, false);
}


function addAnimation() {
    // The bar
    Bar.style.transition = "1s";

    // MENU
    menuoverlay.style.transition = "1s";
    menuoverlaytest.style.transition = "1s";

    // Right menu
    MenuR.style.transition = "1s";
    MenuRBG.style.transition = "1s";
    eleverne.style.transition = "1s";

    // Left menu
    MenuL.style.transition = "1s";
    MenuLBG.style.transition = "1s";
    skolen.style.transition = "1s";
}

function removeAnimation() {
    Bar.style.transition = "0s";
    MenuL.style.transition = "0s";
    MenuR.style.transition = "0s";
    MenuRBG.style.transition = "0s";
    MenuLBG.style.transition = "0s";
    menuoverlay.style.transition = "0s";
    menuoverlaytest.style.transition = "0s";
    skolen.style.transition = "0s";
    eleverne.style.transition = "0s";
}

function tilbage(){
    window.scroll({
        top: MenuL.offsetTop,
        left: 0,
        behavior: "smooth"
        });
        setTimeout(function () {
            resetMenu();
        }, 1000);
}
function tilbage(){
    window.scroll({
        top: MenuR.offsetTop,
        left: 0,
        behavior: "smooth"
        });
        setTimeout(function () {
            resetMenu();
        }, 1000);
}

