var speedOfMan=3.6;
var speedOfBicycle=20.1;
var speedOfCar=70;
var speedOfPlane=800;

var elForm=document.querySelector(".form");
var elInputDistance=elForm.querySelector(".input");
var elResultOfMan=elForm.querySelector(".result-man");
var elResultOfBike=elForm.querySelector(".result-bike");
var elResultOfCar=elForm.querySelector(".result-car");
var elResultOfPlane=elForm.querySelector(".result-plane");

elForm.addEventListener("submit", function(evt)
{
    evt.preventDefault();

    elResultOfMan.textContent=(Number(elInputDistance.value.trim())/speedOfMan).toFixed(2)+" Hours";
    elResultOfBike.textContent=(Number(elInputDistance.value.trim())/speedOfBicycle).toFixed(2)+" Hours";
    elResultOfCar.textContent=(Number(elInputDistance.value.trim())/speedOfCar).toFixed(2)+" Hours";
    elResultOfPlane.textContent=(Number(elInputDistance.value.trim())/speedOfPlane).toFixed(2)+" Hours";
});

