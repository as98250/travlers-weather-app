

let apiKey = 'e3e81fa4ef5b80b11d86d31f2d5c05c1';
let citySearchEl = document.getElementsByClassName('city-search');
let searchBtn = document.getElementById('searchBtn');
let searchHist = document.getElementsByClassName('searchHistroy');
let dailyFor = document.getElementsByClassName('dailyForcastContainer');
let fiveDay = document.getElementsByClassName('fiveDayForcast');

let formSubmitHandler = function (event) {
    event.preventDefault();

};

let apiURL = "";

function getCity(){
    console.log(getCity);
    let citySearch = citySearchEl.textContent;
    apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&appid=' + apiKey;
    fetch(apiURL)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {})

    } 
  

searchBtn.addEventListener('click', getCity);


