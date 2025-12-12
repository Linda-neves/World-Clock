setInterval(function ()
{ //pretoria
   let pretoriaElement = document.querySelector("#pretoria");
   if(pretoriaElement)
   {
     let pretoriaDateElement = pretoriaElement.querySelector(".date");
     let pretoriaTimeElement = pretoriaElement.querySelector(".time");

     pretoriaDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
     pretoriaTimeElement.innerHTML = `${moment().format("HH:mm [<small>]a[</small>]")}`;
   }
   
}, 1000);


setInterval(function ()
{//luanda
   let luandaElement = document.querySelector("#luanda");
   if(luandaElement)
   {
     let luandaDateElement = luandaElement.querySelector(".date");
     let luandaTimeElement = luandaElement.querySelector(".time");
     let luandaTime = moment().tz("Africa/Luanda");

     luandaDateElement.innerHTML =luandaTime.format("dddd, MMMM Do YYYY");
     luandaTimeElement.innerHTML = luandaTime.format("HH:mm [<small>]a[</small>]");
   }
   
}, 1000);

setInterval(function ()
{//london
   let londonElement = document.querySelector("#london");
   if(londonElement)
   {
     let londonDateElement = londonElement.querySelector(".date");
     let londonTimeElement = londonElement.querySelector(".time");
     let londonTime = moment().tz("Europe/London");

     londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
     londonTimeElement.innerHTML = londonTime.format("HH:mm [<small>]a[</small>]");
   }
   
}, 1000);

function updateCity(event)
{
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current")
    {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#the-city");
    cityElement.innerHTML = `
    <div class="cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("HH:mm [<small>]a[</small>]")}</div>  
   </div>
   <a href="/">Go Back</a>
   `;
   
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);