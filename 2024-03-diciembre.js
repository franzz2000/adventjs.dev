function organizeInventory(inventory) {
  // Code here
  let organizedInventory = {}

  inventory.forEach(item => {
    if (organizedInventory[item.category] === undefined) {
      organizedInventory[item.category] = {}
    }
    if (organizedInventory[item.category][item.name] === undefined) {
      organizedInventory[item.category][item.name] = 0
    }
    organizedInventory[item.category][item.name] += item.quantity
  })
  return  organizedInventory
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(JSON.stringify(organizeInventory(inventory)))

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(JSON.stringify(organizeInventory(inventory2)))

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }