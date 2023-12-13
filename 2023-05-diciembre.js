function drawGift(size, symbol) {
  // Code here
  if(size == 1) return "#\n"
  let texto = ["#".repeat(size)+symbol.repeat(size-2)+"#"]
  //texto.push("\n")
  for (let i=size-2;i>0;i--) {
    texto.unshift(" ".repeat(size-i-1)
               + "#" + symbol.repeat(size-2)
               +"#"+
               symbol.repeat(i-1)+"#")
    texto.push("#" + symbol.repeat(size-2)
               +"#"+
               symbol.repeat(i-1)+"#")
  }
  texto.unshift(" ".repeat(size-1) + "#".repeat(size))
  texto.push("#".repeat(size))
  return texto.join("\n") + "\n"
}
