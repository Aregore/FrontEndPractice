class Rocket{
    constructor(name, speed, capacity, icon){
        this.name = name;
        this.speed = speed;
        this.teamNumber = capacity;
        this.icon = icon;
    }

    launch () {
        
    }
}

var icons = document.querySelectorAll(".nav-icon");
var contents = document.querySelectorAll(".site-main");
var radio = document.querySelectorAll(".radio");

$(document).ready(function(){
    contents[0].style.display='block';
    
    icons.forEach(
        function(currentValue) {
            currentValue.addEventListener("click", showElement);
        }   
    );
    radio.forEach(
        function(currentValue) {
            currentValue.addEventListener("click", changeShip);
        }   
    );
    document.querySelector("#build-rocket").addEventListener("click", buildRocket);
});

function showElement(){
    document.querySelector(".clicked").classList.remove("clicked");  
    this.classList.add("clicked");
                    
    var ind  = Array.prototype.indexOf.call(icons, this);
    contents.forEach(
        function(currentValue){
            currentValue.style.display = "none";
        }
    );
    contents[ind].style.display = "block";
}

function changeShip(){
    var id = this.id.substring(this.id.length-1);
    var name = document.querySelector("#name"+id).innerHTML;
    var speed = document.querySelector("#speed"+id).innerHTML;
    var capacity = document.querySelector("#capacity"+id).innerHTML;
    var icon = document.querySelector("#rocket-icon"+id).src;

    document.querySelector("#rocket-icon").src = icon;
    document.querySelector("#rocket-name").innerHTML = name;
    document.querySelector("#rocket-speed").innerHTML = speed;
    document.querySelector("#rocket-capacity").innerHTML = capacity;
}

function buildRocket() {
    var name = document.querySelector("#rocket-name").innerHTML;
    var speed = document.querySelector("#rocket-speed").innerHTML;
    var capacity = document.querySelector("#rocket-capacity").innerHTML;
    var icon = document.querySelector("#rocket-icon").src;
    var rocket = new Rocket(name, speed, capacity, icon);
}