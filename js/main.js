var speedOfMan=3.6;
var speedOfBicycle=20.1;
var speedOfCar=70;
var speedOfPlane=800;

var elForm=document.querySelector(".form");
var elInputDistance=elForm.querySelector(".input");
var elResultOfMan=document.querySelector(".result-man");
var elResultOfBike=document.querySelector(".result-bike");
var elResultOfCar=document.querySelector(".result-car");
var elResultOfPlane=document.querySelector(".result-plane");

elForm.addEventListener("submit", function(evt)
{
    evt.preventDefault();

    elResultOfMan.textContent=(Number(elInputDistance.value.trim())/speedOfMan);
    console.log(elResultOfMan.textContent)
    elResultOfBike.textContent=(Number(elInputDistance.value.trim())/speedOfBicycle);
    elResultOfCar.textContent=(Number(elInputDistance.value.trim())/speedOfCar);
    elResultOfPlane.textContent=(Number(elInputDistance.value.trim())/speedOfPlane);
});

