function autonomousDrive(store, movements) {
  const newStore = []
  store.forEach((fila) => {
    newStore.push(fila.split(""))
  })
 
  const encuentraInicio = (store) => {
    for (let [index, val] of store.entries()) {
        if(val.indexOf("!")!=-1)
         return [index, val.indexOf("!")]
    }
  }
  
  const iR = encuentraInicio(store)
  newStore[iR[0]][iR[1]] = '.'
  let pR = iR
  const maxX = store[0].length-1
  const maxY = store.length-1
  for(let move of movements) {
    if(move==='R' &&
         pR[1]<maxX &&
         newStore[
          pR[0]][pR[1]+1]!="*"
    ) {
      pR[1] = pR[1]+1
    }
    if(move==='L' &&
         pR[1]>0
    ) { 
       if (
        newStore[
          pR[0]]
          [pR[1]-1]!="*") 
          pR[1] = pR[1]-1}
    if(move==='D' &&
      pR[0]<maxY && newStore[pR[0]+1][pR[1]]!="*") {
      pR[0] = pR[0]+1 
    }
    if(move==='U' &&
      pR[0]>0 && newStore[pR[0]-1][pR[1]]!="*") {
        pR[0] = pR[0]-1 
    }
  }
  newStore[pR[0]][pR[1]] = '!'
  return newStore.map(fila=>fila.join(""))
}
