const colorType = {
  freezing: "bg-freezing",
  cold: "bg-cold",
  hot: "bg-hot",
  veryHot: "bg-very-hot",
};

const iconsType = {
  dayClear: "dayLightClear.jpeg",
  cloudy: "dayLightCloudy.png",
  raining: "dayLightRaining.jpeg",
  snowing: "dayLightSnowing.jpeg",
  thuntherStorm: "dayLightThuntherstorm.jpeg",
};

const conditionsType = {
  dayClear: [0],
  cloudy: [1, 2, 3, 45, 48],
  raining: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  snowing: [71, 73, 75, 77, 85, 86],
  thuntherStorm: [95, 96, 99],
};

const tempsType = {
  isFreezing: (temp) => temp < 5,
  isCold: (temp) => temp >= 5 && temp < 19,
  ishot: (temp) => temp >= 19 && temp < 26,
  isVeryHot: (temp) => temp >= 26,
};

async function fetchWeather() {
  const location = 50.8222022198579;
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code";

  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  const temp = data.current.temperature_2m;
  // const condition = data.current.condition.code;
  const condition = data.current.weather_code;
  const weatherValue = getWeatherValues(temp, condition);
  const text = document.getElementById("text");
  text.innerText = weatherValue[1];
  const loadScreen = document.getElementById("load-screen");
  loadScreen.classList.add("hidden");
  const weatherConditions = document.getElementById("weather-conditions");
  weatherConditions.setAttribute("src", `/weatherImgs/${weatherValue[0]}`);
  const mainContainer = document.getElementById("main-container");
  mainContainer.classList.add(weatherValue[2]);
}

fetchWeather();

function getWeatherValues(temp, condition) {
  if (conditionsType.dayClear.includes(condition)) {
    if (tempsType.isFreezing(temp)) {
      return [
        iconsType.dayClear,
        "Chaqueton, bufanda, guantes y gorro",
        colorType.freezing,
      ];
    } else if (tempsType.isCold(temp)) {
      return [iconsType.dayClear, "Chaqueton y bufanda", colorType.cold];
    } else if (tempsType.ishot(temp)) {
      return [
        iconsType.dayClear,
        "Camiseta y pantalones cortos",
        colorType.hot,
      ];
    } else if (tempsType.isVeryHot(temp)) {
      return [
        iconsType.dayClear,
        "Camiseta de tirantas, botella de agua y chancletas",
        colorType.veryHot,
      ];
    }
  }

  if (conditionsType.cloudy.includes(condition)) {
    if (tempsType.isFreezing(temp)) {
      return [
        iconsType.cloudy,
        "Chaqueton, bufanda, guantes y gorro",
        colorType.freezing,
      ];
    } else if (tempsType.isCold(temp)) {
      return [iconsType.cloudy, "Chaqueton y bufanda", colorType.cold];
    } else if (tempsType.ishot(temp)) {
      return [iconsType.cloudy, "camiseta y pantalones cortos", colorType.hot];
    } else if (tempsType.isVeryHot(temp)) {
      return [
        iconsType.cloudy,
        "Camiseta de tirantas, botella de agua y chancletas",
        colorType.veryHot,
      ];
    }
  }

  if (conditionsType.raining.includes(condition)) {
    if (tempsType.isFreezing(temp)) {
      return [
        iconsType.raining,
        "Paraguas, chaqueton, bufanda, guantes y gorro",
        colorType.freezing,
      ];
    } else if (tempsType.isCold(temp)) {
      return [
        iconsType.raining,
        "Paraguas y chaqueton y bufanda",
        colorType.cold,
      ];
    } else if (tempsType.ishot(temp)) {
      return [
        iconsType.raining,
        "Paraguas, camiseta y pantalones largos",
        colorType.hot,
      ];
    } else if (tempsType.isVeryHot(temp)) {
      return [
        iconsType.raining,
        "Paraguas, pantalones cortos, botella de agua y chancletas",
        colorType.veryHot,
      ];
    }
  }
  if (conditionsType.snowing.includes(condition)) {
    console.log("in");
    if (tempsType.isFreezing(temp)) {
      return [
        iconsType.snowing,
        "Chaqueton, bufanda, guantes y gorro",
        colorType.freezing,
      ];
    } else if (tempsType.isCold(temp)) {
      return [iconsType.snowing, "chaqueton y bufanda", colorType.cold];
      // he quitado los estados is hot y isveryhot porque nevando no llegaran nunca
    }
  }

  if (conditionsType.thuntherStorm.includes(condition)) {
    console.log("in");
    if (tempsType.isFreezing(temp)) {
      return [
        iconsType.thuntherStorm,
        "Paragua, chaqueton, bufanda, guantes y gorro",
        colorType.freezing,
      ];
    } else if (tempsType.isCold(temp)) {
      return [iconsType.thuntherStorm, "Chaqueton y bufanda", colorType.cold];
    } else if (tempsType.ishot(temp)) {
      return [
        iconsType.thuntherStorm,
        "paraguas, camiseta y pantalones cortos",
        colorType.hot,
      ];
    } else if (tempsType.isVeryHot(temp)) {
      return [
        iconsType.thuntherStorm,
        "Paraguas, camiseta de tirantas, botella de agua y chancletas",
        colorType.veryHot,
      ];
    }
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        await fetchWeather(latitude, longitude);
      },
      function (error) {
        // Manejo de errores
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("El usuario denegó la solicitud de geolocalización.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("La información de ubicación no está disponible.");
            break;
          case error.TIMEOUT:
            console.log("Se ha excedido el tiempo para obtener la ubicación.");
            break;
          case error.UNKNOWN_ERROR:
            console.log(
              "Ocurrió un error desconocido al obtener la ubicación."
            );
            break;
        }
      }
    );
  } else {
    console.log("La geolocalización no es compatible con este navegador.");
  }
}

// Llamar a la función para obtener la ubicación al cargar la página
getLocation();
