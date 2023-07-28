const API_KEY = 'f6b6c97ccd26b1e672e3c6015128d91e';


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json().then(data=>{
        const city = document.querySelector('#weather span:first-child');
        const cityTemp = document.querySelector('#weather span:last-child');
        cityTemp.innerText = data.main.temp;
        city.innerText = data.name;
    }));
}

function onGeoError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
onGeoOk()