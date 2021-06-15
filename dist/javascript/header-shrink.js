window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("lg-scrn-header").style.height = "60px";
    document.getElementById("lg-scrn-header").style.alignItems = "center";
    document.getElementById("top-header-l").style.display = "none";
    document.getElementById("top-header-r").style.display = "none";
    document.getElementById("search-lg-col").style.visibility = "hidden";
    document.getElementById("menu-lg-col").style.order = "2";
    document.getElementById("logo-lg-col").style.order = "1";
    document.getElementById("search-lg-col").style.order = "3";
    document.getElementById("logo-lg").style.width = "40%";
    document.getElementById("logo-lg").style.height = "auto";
    document.getElementById("header").style.paddingBottom = "4px";
    document.getElementById("slide-nav").style.left = "-120px";
  } else {
    document.getElementById("lg-scrn-header").style.height = "168px";
    document.getElementById("lg-scrn-header").style.alignItems = "flex-end";
    document.getElementById("top-header-l").style.display = "block";
    document.getElementById("top-header-r").style.display = "block";
    document.getElementById("search-lg-col").style.visibility = "visible";
    document.getElementById("menu-lg-col").style.order = "1";
    document.getElementById("logo-lg-col").style.order = "2";
    document.getElementById("search-lg-col").style.order = "3";
    document.getElementById("logo-lg").style.width = "auto";
    document.getElementById("logo-lg").style.height = "auto";
    document.getElementById("header").style.paddingBottom = "20px";
    document.getElementById("slide-nav").style.left = "0";
  }
}
