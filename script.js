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
let check=document.querySelectorAll(".crewdetails");
let crew=document.querySelectorAll(".teamimg");
let CurrentTeam = new Map();
document.querySelector("#gather-crew").disabled=true;
let crewAmount=0;
let shipCapacity=2;
let rocket = Object;

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
    crew.forEach(
            function(currentValue){
                currentValue.style.display="none";
            });
	
	check.forEach(
        function(currentValue){
            currentValue.addEventListener("change",changeCrew);
            currentValue.checked=false;
    });
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
    rocket = new Rocket(name, speed, capacity, icon);
    document.querySelector("#rocket-name-choice").innerHTML= name;
    document.querySelector("#rocket-speed-choice").innerHTML= speed;
    document.querySelector("#rocket-capacity-choice").innerHTML= capacity;
    document.querySelector("#rocket-icon-choice").src= icon;
    shipCapacity = capacity;
}

function changeCrew(){
    let icon=this.value;
    let role=this.name;
    if (this.checked) {
        document.querySelector("#"+role+icon).style.display="inline-grid";
        crewAmount+=1;
    }
    else{
        document.querySelector("#"+role+icon).style.display="none";
        crewAmount-=1;
    }
    crewBtn();
}

function crewBtn(){
    let gather_crew_button=document.querySelector("#gather-crew");
    if (crewAmount==shipCapacity) {
        gather_crew_button.disabled=false;
        gather_crew_button.className="build-crew-btn-active";
        
    }
    else{
        gather_crew_button.disabled=true;
        gather_crew_button.className="build-crew-btn-inactive";
        
    }
}

class TeamMember{
    constructor(name, icon, role){
        this.name=name;
        this.icon=icon;
        this.role=role;
    }
}

function TeamBuilding(){
    let i=0;
    CurrentTeam = new Map();
    check.forEach(
        function(currentValue){
            if (currentValue.checked) {
                let tempname=currentValue.id;
                let temprole=currentValue.name;
                let tempid=currentValue.value;
                CurrentTeam.set(i,new TeamMember(tempname,tempid,temprole));
                i+=1;
            }
        });
    console.log(CurrentTeam);
}