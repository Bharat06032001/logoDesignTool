// WEATHER-WIDGET

const API_KEY = '604b3ef29597dda727196bdd8fd087d9';
const CITY = 'Bangalore';
const UNIT = 'metric'; 

async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNIT}&appid=${API_KEY}');
        const data = await response.json();

        if (data.cod === 200) {
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const icon ='http://openweathermap.org/img/wn/${data.weather[0].icon}.png';

            document.getElementById('city-name').textContent = CITY;
            document.getElementById('temperature').textContent = '${temperature}°C';
            document.getElementById('weather-description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('icon').src = icon;
        } else {
            console.error('Error fetching weather data:', data.message);
            
        }
    } catch (error) {
        console.error('Error:', error);
       
    }
}

window.onload = fetchWeather;




// IMAGESLIDE

              let slideIndex = 1;
              let slideInterval;
          
              function showSlides() {
                  let i;
                  let slides = document.getElementsByClassName("mySlides");
                  let dots = document.getElementsByClassName("dot");
                  
                  
                  for (i = 0; i < slides.length; i++) {
                      slides[i].style.display = "none";  
                      dots[i].getElementsByTagName("input")[0].checked = false; 
                  }
          
                  
                  if (slideIndex > slides.length) { slideIndex = 1; }
                  if (slideIndex < 1) { slideIndex = slides.length; }
          
                  slides[slideIndex - 1].style.display = "block";  
                  dots[slideIndex - 1].getElementsByTagName("input")[0].checked = true;
          
                  
                  clearInterval(slideInterval);
                  slideInterval = setInterval(() => {
                      slideIndex++;
                      showSlides();
                  }, 3000);
              }
          
              function currentSlide(n) {
                  slideIndex = n;
                  showSlides();
              }
          
              
              slideInterval = setInterval(() => {
                  slideIndex++;
                  showSlides();
              }, 2000);
          
              
              showSlides();