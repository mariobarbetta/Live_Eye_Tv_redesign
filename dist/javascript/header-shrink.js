window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("lg-scrn-header").style.height = "90px";
    document.getElementById("header-bottom-row").style.height = "55px";
    document.getElementById("slide-nav").style.left = "50px";
    document.getElementById("header-top-row").style.display = "none";
    document.getElementById("header-hr").style.top = "-8px";
    document.getElementById("header-hr").style.marginBottom = "0px";
    document.getElementById("slide-tv").style.right = "-25px";
    document.getElementById("slide-tv").style.opacity = "1";
  } else {
    document.getElementById("lg-scrn-header").style.height = "210px";
    document.getElementById("header-bottom-row").style.height = "88px";
    document.getElementById("slide-nav").style.left = "-90px";
    document.getElementById("header-top-row").style.display = "flex";
    document.getElementById("header-hr").style.top = "10px";
    document.getElementById("header-hr").style.marginBottom = "8px";
    document.getElementById("slide-tv").style.right = "100px";
    document.getElementById("slide-tv").style.opacity = "0";
  }
}
