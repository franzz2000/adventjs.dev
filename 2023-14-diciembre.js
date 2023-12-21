function maxGifts (houses) {
  console.log(houses.slice(2))
  const dp = houses.slice(0, 2)
  for (const house of houses.slice(2)) {
    dp.push(Math.max(...dp.slice(0, -1)) + house)
  }
  console.log(dp)
  return Math.max(...dp)
}
