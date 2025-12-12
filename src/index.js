setInterval(function ()
{
//pretoria
let pretoriaElement = document.querySelector("#pretoria");
let pretoriaDateElement = pretoriaElement.querySelector(".date");
let pretoriaTimeElement = pretoriaElement.querySelector(".time");

pretoriaDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
pretoriaTimeElement.innerHTML = `${moment().format("HH:mm [<small>]a[</small>]")}`;
}, 1000);

setInterval(function ()
{
//luanda
let luandaElement = document.querySelector("#luanda");
let luandaDateElement = luandaElement.querySelector(".date");
let luandaTimeElement = luandaElement.querySelector(".time");
let luandaTime = moment().tz("Africa/Luanda");

luandaDateElement.innerHTML =luandaTime.format("dddd, MMMM Do YYYY");
luandaTimeElement.innerHTML = luandaTime.format("HH:mm [<small>]a[</small>]");
}, 1000);

setInterval(function ()
{
//london
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("HH:mm [<small>]a[</small>]");
}, 1000);