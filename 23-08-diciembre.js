function organizeGifts(gifts) {
    // Code here
  const registro = /([0-9]+)([a-z])/g
  
  const array = [...gifts.matchAll(registro)]
  let resultado = ""
  array.forEach((gift, index)=>{
    let numero = Number(gift[1])
    let regalo = gift[2]
    let cajas = Math.floor(numero/10)
    let resto = numero % 10
    let pales = Math.floor(cajas/5)
    cajas = cajas - (pales*5)
    if(pales!=0) {
      resultado = resultado +
      ("["+regalo+"]").repeat(pales)
    }
    if( cajas!=0) resultado = resultado + ("{"+regalo+"}").repeat(cajas) 
    if(resto !=0) resultado = resultado +
      "("+regalo.repeat(resto)+")"
  })
  
  return resultado
}
