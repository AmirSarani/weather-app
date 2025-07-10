// document.getElementById("test").addEventListener("click", function () {
//   fetch("dd4d9eaaea4936d2cadaab0b50fcd357")
//     .then((res) => res.json())
//     .then((data) =>
//       data.forEach((elem) => {
//         console.log(elem);
//       })
//     );
// });

// document.getElementById("test").addEventListener("click", function () {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=dd4d9eaaea4936d2cadaab0b50fcd357"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data); // کل داده رو یکجا ببین
//       data.forEach((elem) => {
//         console.log(elem); // هر عنصر جداگانه رو ببین
//       });
//     });
// });

document.getElementById("Search").addEventListener("click", function () {
  let input = document.getElementById("input").value;
  let dama = document.getElementById("dama");
  let desc = document.getElementById("desc");
  let wind = document.getElementById("wind");
  let locat = document.getElementById("locat");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=dd4d9eaaea4936d2cadaab0b50fcd357&units=metric&lang=fa`
  )
    .then((res) => res.json())
    .then((data) => {
      dama.innerText = "°C" + "دما: " + Math.round(data.main.temp);
      desc.innerText = "وضعیت آسمان: " + data.weather[0].description;
      wind.innerText = "سرعت باد: " + data.wind.speed + " m/s";
      let iconCode = data.weather[0].icon;
      let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.querySelector(
        ".weather-icon"
      ).innerHTML = `<img src="${iconUrl}" alt="weather icon">`;

      setTimeout(() => {
        document.getElementById("input").value = "";
        locat.innerText = "Enter your new city";
      }, 10000);
    })

    .catch((err) => console.error("خطا:", err));
});
