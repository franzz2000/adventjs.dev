function manufacture(gifts, materials) {
  // Code here
  let result = []
  gifts.forEach((gift)=>{
    let falta = false
    for(i in [...Array(gift.length).keys()])
      if(!materials.includes(gift[i])) falta=true
    if (!falta) result.push(gift)
  })
  console.log(result)
  return result
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts1 = ['juego', 'puzzle']
const materials1 = 'jlepuz'

manufacture(gifts1, materials1) // ["puzzle"]

const gifts2 = ['libro', 'ps5']
const materials2 = 'psli'

manufacture(gifts2, materials2) // []
