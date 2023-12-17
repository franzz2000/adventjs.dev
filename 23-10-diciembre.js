function createChristmasTree(ornaments, height) {
  let longitud = ornaments.length<height?ornaments.length:height
  let suma = 0
  let secuencia = [0]
  for (let i=1; i<=height; i++) {
    suma+=i
    secuencia.push(suma)
  }

  console.log(secuencia)
  ornaments = ornaments
    .repeat(Math
            .floor(suma/longitud))
    +ornaments.slice(0,suma%longitud)
  
  let arbol = []
  for(let i=0;i<height;i++) {
    arbol.push(" ".repeat(longitud-i)+ornaments.substring(secuencia[i],secuencia[i]+i+1).split("").join(" ")+"\n")
  }
  arbol.push(" ".repeat(longitud),"|")
  return arbol.join("")
}
