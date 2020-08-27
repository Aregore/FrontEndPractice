class Rocket{
    constructor(name, speed, capacity, icon){
        this.name = name;
        this.speed = speed;
        this.teamNumber = capacity;
        this.icon = icon;
    }

    launch () {
        document.querySelector('#mainRocket').className+=' rocket-go';
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
let rocket = new Object;
let RoleNames=new Map();
document.querySelector('#Fire').disabled=true;

$(document).ready(function(){
    contents[0].style.display='block';
    SetRoleNames();
    
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
	document.querySelector("#mainRocket").className="rocket-img-ship"+id;
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
	shipCapacity=parseInt(capacity, 10); 
	ClearTeam();
	ChangeStats('Rocket');
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
    if (crewAmount===shipCapacity) {
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
		this.roleName=RoleNames.get(role);
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
    ChangeStats('Crew');
    ShowTeam();
}

function SetRoleNames(){
	RoleNames=new Map();
	RoleNames.set('captain','Капитан');
	RoleNames.set('engineer','Борт инженер');
	RoleNames.set('doctor','Врач');
	RoleNames.set('marine','Космодесантник');
}

function checkStats(){
	if (document.querySelectorAll('.status-list-no').length===0) {
		document.querySelector('#Fire').className='button-go-yes';
		document.querySelector('#Fire').disabled=false;
	} else {
		document.querySelector('#Fire').className='button-go-no';
		document.querySelector('#Fire').disabled=true;
	}
}

function ChangeStats(stat){
	document.querySelector('#stats'+stat).className='status-list-yes';
	checkStats();
}

function ClearTeam(){
	document.getElementById("statsCrew").className="status-list-no";
	document.querySelector('#mainpageCrew').innerHTML='';
}

function ShowTeam(){
	let tempstring='';
	CurrentTeam.forEach(function(currentValue){
		tempstring+='<div class="underline text-padding"><span class="bold __'+currentValue.role+'">'+currentValue.roleName+'</span><span>'+currentValue.name+'</span></div>';
	});
	document.querySelector('#mainpageCrew').innerHTML=tempstring;
	let temp=document.querySelector('#mainpageCrew').querySelectorAll('.underline');
	temp[temp.length-1].className='';
}

function WeatherCheck(){
	let tempweather='';
	place=document.getElementById('TakeoffSpot').value.trim();
	if (place!=''){
	let url='https://api.openweathermap.org/data/2.5/weather?q='+place+'&appid=28867f40dd391e7ad8706ada68f1cfae';
	fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
	  if(data.cod===404) {tempweather='Населённый пункт не найден';
		document.getElementById("mainWeather").innerHTML=tempweather;
		document.getElementById("weatherPage").innerHTML='<div class="underline text-padding"><span class="bold">Локация</span><span><input type="text" id="TakeoffSpot"></span></div>'+tempweather;
		document.getElementById("statsWeather").className="stats";
		checkStats();
	} else {
		temperature=data.main.temp-273.15;
		if (data.wind.deg<22.5) direction='С';
		else if (data.wind.deg<67.5) direction='СВ';
		else if (data.wind.deg<112.5) direction='В';
		else if (data.wind.deg<157.5) direction='ЮВ';
		else if (data.wind.deg<202.5) direction='Ю';
		else if (data.wind.deg<247.5) direction='ЮЗ';
		else if (data.wind.deg<292.5) direction='З';
		else if (data.wind.deg<337.5) direction='СЗ';
		else direction='З';
		tempweather='<div class="underline text-padding"><span class="bold">Локация</span><span>'+place+'</span></div>';
		tempweather+='<div class="underline text-padding"><span class="bold">Температура</span><span>'+Math.round(temperature)+' °C</span></div>';
		tempweather+='<div class="underline text-padding"><span class="bold">Влажность</span><span>'+Math.round(data.main.humidity)+'%</span></div>';
		tempweather+='<div class="text-padding"><span class="bold">Ветер</span><span>'+Math.round(data.wind.speed)+' м/с, '+direction+'</span></div>';
		ChangeStats('Weather');
		document.getElementById("mainWeather").innerHTML=tempweather;
		document.getElementById("weatherPage").innerHTML='<div class="underline text-padding"><span class="bold">Локация</span><span><input type="text" id="TakeoffSpot"></span></div>'+tempweather;		}
  });
	}
}