
function changeBase() {
    document.getElementById("circle1").style.backgroundColor = "#232855";
    document.getElementById("conceptBase").innerHTML = "1. BASE";

    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";

    document.getElementById("imgCatalogue").src = "catalogue/basescreen.png";

}

function changePoke() {
    document.getElementById("circle2").style.backgroundColor = "#232855";
    document.getElementById("conceptBase").innerHTML = "2. POKE";

    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";

    document.getElementById("imgCatalogue").src = "catalogue/pokescreen.png";
    
}

function changeTopping() {
    document.getElementById("circle3").style.backgroundColor = "#232855";
    document.getElementById("conceptBase").innerHTML = "3. TOPPING";

    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";

    document.getElementById("imgCatalogue").src = "catalogue/toppingscreen.png";

}

function changeGarniture() {
    document.getElementById("circle4").style.backgroundColor = "#232855";
    document.getElementById("conceptBase").innerHTML = "4. GARNITURE";

    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle5").style.backgroundColor = "white";

    document.getElementById("imgCatalogue").src = "catalogue/garniturescreen.png";
}

function changeMarinade() {
    document.getElementById("circle5").style.backgroundColor = "#232855";
    document.getElementById("conceptBase").innerHTML = "5. MARINADE";

    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle4").style.backgroundColor = "white";

    document.getElementById("imgCatalogue").src = "catalogue/marinadescreen.png";




}