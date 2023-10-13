export default eventHandler(async (req, res) => {

  const weather = await $fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)

  return weather

})