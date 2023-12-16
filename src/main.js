// document.getElementById("submitBtn").addEventListener("click", function () {
//   const city = document.getElementById("cityInput").value.trim();
//   if (city !== "") {
//     const apiKey = "TU_API_KEY"; // Reemplaza 'TU_API_KEY' con tu clave API de weatherapi.com
//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`;

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("La ciudad ingresada no se encontró");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const weatherInfo = document.getElementById("weatherInfo");
//         weatherInfo.innerHTML = `
//             <h2>El clima en ${data.location.name}, ${data.location.country}</h2>
//             <p>Temperatura: ${data.current.temp_c}°C</p>
//             <p>Condición: ${data.current.condition.text}</p>
//             <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
//           `;
//       })
//       .catch((error) => {
//         const weatherInfo = document.getElementById("weatherInfo");
//         weatherInfo.innerHTML = `<p>${error.message}</p>`;
//       });
//   } else {
//     alert("Por favor ingrese una ciudad");
//   }
// });

// async function fetchWeather() {
//   const weatherApi = await fetch("http://api.weatherapi.com/v1");
//   console.log(weatherApi);

//   function successFn(response) {
//     console.log(response);
//   }

//   weatherApi.then(successFn);
//   weatherApi.catch(() => console.log("soy un error"));
// }

// console.log(fetchWeather());

// async function pullWeather() {
//   const weatherApi = await fetch(
//     "http://api.weatherapi.com/v1/current.json?key=334bdebfb2b14fe0963195538231412&q=London&aqi=no"
//     );
//     console.log(weatherApi);

//     function successFn(response) {
//       console.log(response);
//     }
//     weatherApi.then(successFn);
//     weatherApi.catch(() => console.log("soy un error"));
//   }
// console.log(pullWeather());

// conts url =
// fetch(url)

function fetchWeather() {
  const location = "London";
}
