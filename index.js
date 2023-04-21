function showOverlay(){
    document.querySelector("div#imageOverlay").style.display = "flex";

}
function hideOverlay(){
    document.querySelector("diV#imageOverlay").style.display = "none";
}

document.querySelector("div#bigImage img").addEventListener("click", showOverlay);

document.querySelector("div#imageOverlay").addEventListener("click", hideOverlay);