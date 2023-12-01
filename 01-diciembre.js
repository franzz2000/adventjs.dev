function findFirstRepeated(gifts) {
  // Code here
  let items = []
  for (let i=0; i<gifts.length; i++) {
    const item = gifts[i]
    if (items.includes(item)) {
      return item
    }
    items.push(item)
  }
  return -1
}
