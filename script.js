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

let icons = document.querySelectorAll(".nav-icon");
let contents = document.querySelectorAll(".site-main");
let radio = document.querySelectorAll(".radio");

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
                    
    let ind  = Array.prototype.indexOf.call(icons, this);
    contents.forEach(
        function(currentValue){
            currentValue.style.display = "none";
        }
    );
    contents[ind].style.display = "block";
}

function changeShip(){
    let id = this.id.substring(this.id.length-1);
    let name = document.querySelector("#name"+id).innerHTML;
    let speed = document.querySelector("#speed"+id).innerHTML;
    let capacity = document.querySelector("#capacity"+id).innerHTML;
    let icon = document.querySelector("#rocket-icon"+id).src;

    document.querySelector("#rocket-icon").src = icon;
    document.querySelector("#rocket-name").innerHTML = name;
    document.querySelector("#rocket-speed").innerHTML = speed;
    document.querySelector("#rocket-capacity").innerHTML = capacity;
}

function buildRocket() {
    let name = document.querySelector("#rocket-name").innerHTML;
    let speed = document.querySelector("#rocket-speed").innerHTML;
    let capacity = document.querySelector("#rocket-capacity").innerHTML;
    let icon = document.querySelector("#rocket-icon").src;
    let rocket = new Rocket(name, speed, capacity, icon);
}