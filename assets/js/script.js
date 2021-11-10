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