function adjustLights(lights) {
  let luces = ""
  let cuenta1 = 0
  let cuenta2 = 0
  let luces1 = Array.from(
    { length: Math.ceil(lights.length/2) }, () => ['🟢', '🔴'])
    .flat();
  let luces2 = Array.from(
    { length: Math.ceil(lights.length/2) }, () => ['🔴', '🟢'])
    .flat();
  
  lights.forEach((luz, index)=>{
    if (luz!=luces1[index]) cuenta1++
    if (luz!=luces2[index]) cuenta2++
  })
 
  return cuenta1>cuenta2?cuenta2:cuenta1
}
