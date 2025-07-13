# Weather_Fetcher
## Date:
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```
<!DOCTYPE html>
<html>
    <head>
        <title>
            Weather App
        </title>
        <link href="style.css" rel="stylesheet">
        </head>
        <body class="container">
            <div class="a">
                <h2>CITY or REGION</h2>
                <input type="textarea" placeholder="Enter here" class="input_area" id="inp" required>
                <br><br>
                <button class="btn" id="btn">Submit</button>
            </div>
            <div class="b">
                <h1 class="heading">WEATHER RIGHT NOW !</h1>
                <h2 class="parameter">Temperature 🌡️ : </h2>
                <h2 class="parameter">Humdity 💧: </h2>
                <h2 class="parameter">Condition ☁️: </h2>

            </div>
            </div>
            <script src="script.js"></script>

        </body>
</html>
```

## CSS Code:
```
body{
    display: flex;
    height: 100vh;
    align-items:center;
    justify-content: space-evenly;
    background-image: url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Desktop-Wallpapers.jpg);
    
}

.a{
    background-color: lightblue;
    padding:50px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 0 25px rgb(0, 255, 251);
}

.input_area{
    font-size: 25px;
    width: 300px;
    height: 50px;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
    padding: 10px;
}

.b{
    background-color: lightblue;
    padding:100px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 0 25px rgb(96, 183, 25);

}

.heading{
    background-color: royalblue;
    color:lightblue;
    border-radius: 60px;
    padding: 15px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    box-shadow: 0 0 35px red;
}


.parameter{
    color:white;
    box-shadow: 0 0 20px blue;
    font-size: 35px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.btn{
    background-color: silver;
    font-size: 35px;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 0 15px black;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
```
## JavaScript Code:
```
const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const tempPara = document.querySelector(".parameter:nth-child(2)");
const humidityPara = document.querySelector(".parameter:nth-child(3)");
const conditionPara = document.querySelector(".parameter:nth-child(4)");

btn.addEventListener("click", async () => {
    const inputtext = inp.value.trim();
    
    if (!inputtext) {
        alert("Please enter a city or region!");
        return;
    }

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=62b27f79848d4cae8b673437251207&q=${inputtext}`
        );
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        alert(error.message);
        console.error("Error: ", error);
    }
});

function updateWeather(data) {
    const { temp_c, humidity } = data.current;
    const condition = data.current.condition.text;

    tempPara.innerHTML = `Temperature 🌡️: ${temp_c}°C`;
    humidityPara.innerHTML = `Humidity 💧: ${humidity}%`;
    conditionPara.innerHTML = `Condition ☁️: ${condition}`;
}
```

## Live web page:

## Output:
![Uploading image.png…]()

## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
