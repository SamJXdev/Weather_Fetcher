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
            throw new Error("City not found. Please try again!");
        }

        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        alert(error.message);
        console.error("Error fetching weather:", error);
    }
});

function updateWeather(data) {
    const { temp_c, humidity } = data.current;
    const condition = data.current.condition.text;

    tempPara.innerHTML = `Temperature 🌡️: ${temp_c}°C`;
    humidityPara.innerHTML = `Humidity 💧: ${humidity}%`;
    conditionPara.innerHTML = `Condition ☁️: ${condition}`;
}