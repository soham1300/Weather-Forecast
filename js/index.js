async function getInfo()
{
    city=document.querySelector(".getCity").value;
    result=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b3e5a09fb0f011164bcd3582c682192c&units=metric");
    if (result.status==200)
    {
        response=await result.json();
        console.log(response);
        showInfo(response);
    }
    else
    {
        alert("Please enter valid city name.")
    }
}
async function getInfo1()
{
    city=document.querySelector(".getCity1").value;
    result=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b3e5a09fb0f011164bcd3582c682192c&units=metric");
    if (result.status==200)
    {
        response=await result.json();
        console.log(response);
        showInfo(response);
    }
    else
    {
        alert("Please enter valid city name.")
    }
}
function showInfo(resp)
{
    document.querySelector(".BSearch").style.display="none";
    document.querySelector(".ASearch").style.display="block";
    document.querySelector(".cityName").innerHTML=resp.name+" ("+resp.sys.country+")";
    document.querySelector(".temp").innerHTML=resp.main.temp+"<sup>o</sup><span>c</span>";
    document.querySelector(".type").innerHTML=resp.weather[0].description;
    document.querySelector(".maxTemp").innerHTML="Max Temp : "+resp.main.temp_max+"<sup>o</sup><span>c</span>";
    document.querySelector(".minTemp").innerHTML="Min Temp : "+resp.main.temp_min+"<sup>o</sup><span>c</span>";
    document.querySelector(".logo").src="css/img/"+resp.weather[0].description+".png";
}
