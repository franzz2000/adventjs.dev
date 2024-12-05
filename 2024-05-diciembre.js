/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  let pares = new Map() 
  let parejas = []

  shoes.forEach((shoe) => {
     if(!pares.has(shoe.size)) {
       pares.set(shoe.size, {I: 0, R: 0})
     }
     pares.get(shoe.size)[shoe.type]++
  })
  pares.forEach((value, key) => {
    parejas = parejas.concat(Array(Math.min(value.I, value.R)).fill(key))
  })
  return parejas
}


const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2))
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
// []