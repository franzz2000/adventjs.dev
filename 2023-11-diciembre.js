function getIndexsForPalindrome(word) {
  function reverseString (str) {
    return str.split('')
      .reduce((reversed, character) => character + reversed, '')
  }
  
  if(word===reverseString(word)) return []

  const array = word.split("")
  // Recorremos el array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Creamos una copia del array para no modificar el original
      const nuevaCombinacion = array.slice();

      // Intercambiamos los elementos en las posiciones i y j
      const temp = nuevaCombinacion[i];
      nuevaCombinacion[i] = nuevaCombinacion[j];
      nuevaCombinacion[j] = temp;
      let nuevaCombinacionText = nuevaCombinacion.join("")
      // Agregamos la nueva combinación al array de combinaciones
      if(nuevaCombinacionText==reverseString(nuevaCombinacion.join("")))
        return [i,j]
    }
  }
  
  return null
}

//getIndexsForPalindrome('anna') // []
//getIndexsForPalindrome('abab') // [0, 1]
//getIndexsForPalindrome('abac') // null
//getIndexsForPalindrome('aaaaaaaa') // []
//getIndexsForPalindrome('aaababa') // [1, 3]
//getIndexsForPalindrome('caababa') // null
