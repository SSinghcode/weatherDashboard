let apiKey = "7b46c14946479735a697818258742c91";
let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=" +
  apiKey;
let searchButton = $("#searchbtn");
let redirectURL = "index.html";
let today = moment();
let date = today.format("dddd, MMMM Do, YYYY");



searchButton.on("click", function (event) {
  event.preventDefault();
  city = $("#userInput").val();

  console.log(city);
  city = city.toUpperCase();
  cityCall(city);
});
function cityCall(city) {
    current =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey;
  
  
    fetch(current)
      .then(function (response) {
        if (response.status != 200) {
          alert("Please enter a correct city name.");
          document.location.replace(redirectURL);
        } else return response.json();
      })
      .then(function (data) {
  
        let iconEl =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $("#mainRow").css("border", "2px solid black");
        $("#city-date").text(`${city} (${date})`);
        $("#icon").empty();
        $("#icon").append($("<img>").attr("src", iconEl));
        $("#weather-data").empty();
        $("#weather-data").css("style", "list-style: none;");
        $("#weather-data").append(`<li>Temperature: ${data.main.temp}°C</li>`);
        $("#weather-data").append(`<li>Wind: ${data.wind.speed} KM/H</li>`);
        $("#weather-data").append(`<li>Humidity: ${data.main.humidity}%</li>`);
        forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=${apiKey}`;
  
     
  
        fetch(forecast)
          .then(function (response) {
            if (response.status != 200) {
              document.location.replace(redirectURL);
            } else return response.json();
          })
          .then(function (data) {
            processForecast(data);
          });
      });
   
  }
  