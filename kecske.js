window.addEventListener("load", init);

function ID(e) {
    return document.getElementById(e);
}

function CL(e) {
    return document.getElementsByClassName(e);
}

function $(e) {
    return document.querySelector(e);
}

function $a(e) {
    return document.querySelectorAll(e);
}

var kepek = [];
let i = 0;
var txt = "";

function kepKatt() {
    kepek.push(event.target.src);
    console.log(kepek);
    event.target.removeEventListener("click", kepKatt);
}

function kurzorBe() {
    event.target.className = "kiemel";
}

function kurzorKi() {
    event.target.className = "";
}

function kepCsonakba() {
    event.target.style.display = "none";
    /* txt = "<img>";
    ID("csonak").innerHTML += txt;
    $("#csonak img").src = event.target.src;
    $("#csonak img").alt = event.target.alt;
    event.target.removeEventListener("click", kepCsonakba); */
    ID("csonak").innerHTML += "<img>";
    $a("#csonak img")[1].src = event.target.src;
    $a("#csonak img")[1].alt = event.target.alt;
}

// MAIN
function init() {
    $("footer p").innerHTML = "@ Piller András";
    $("footer p").style.textAlign = "center";
    $("footer p").style.fontSize = "20px";

    txt = txt + "<img>"
    $("#csonak").innerHTML = txt;
    $("#csonak img").src = "kepek/csonak.png";
    $("#csonak img").alt = "csonak";
    $("#csonak img").className = "csonak";

    
    /* console.log($a("#bal img"));
    console.log($a("#bal img")[0]); */
    var kepekHossza = $a("#bal img").length;
    for(i = 0; i < kepekHossza; i++) {
        $a("#bal img")[i].addEventListener("click", kepKatt);
    }
    /* kepek.push(event.target.src = "kepek/csonak.png");
    kepek.push(event.target.src = "kepek/farkas.png");
    kepek.push(event.target.src = "kepek/kaposzta.png");
    kepek.push(event.target.src = "kepek/kecske2.png"); */

    for(i = 0; i < kepekHossza; i++) {
        $a("#bal img")[i].addEventListener("mouseover", kurzorBe);
        $a("#bal img")[i].addEventListener("mouseout", kurzorKi);
    }

    for(i = 0; i < kepekHossza; i++) {
        $a("#bal img")[i].addEventListener("click", kepCsonakba)
    }
}