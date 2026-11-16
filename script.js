document.addEventListener("DOMContentLoaded", () => {

    const weatherElement = document.getElementById("weather");

    async function loadWeather() {

        try {

            const response = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=51&longitude=-115&current_weather=true"
            );

            if (!response.ok) {
                throw new Error("Weather request failed");
            }

            const data = await response.json();

            weatherElement.textContent =
                `Temperature: ${data.current_weather.temperature}°C`;

        } catch (error) {

            console.error(error);

            weatherElement.textContent =
                "Unable to load weather information.";

        }
    }

    loadWeather();

    const form = document.getElementById("trailForm");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        document.cookie =
            "contact=true; Secure; SameSite=Strict; Max-Age=86400";

        alert("Form submitted successfully.");

    });

});