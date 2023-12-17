function checkIsValidCopy(original, copy) {
  const isDegradation = function (letraOriginal, letraCopy) {
    const degradacion = [
      letraOriginal.match(/[A-Za-z]/)?letraOriginal:'','#','+',':','.',' ']
    if (letraOriginal.toLowerCase() === letraCopy ||
      degradacion.slice(degradacion.indexOf(letraOriginal))
      .includes(letraCopy)) return true
    return false
  }
  
  if (original.length != copy.length) return false
  
  const originalArray = original.split("")
  const copyArray = copy.split("")
  
  for (let i=0; i<original.length; i++) {
    if(!isDegradation(original[i], copy[i])) 
       return false
  }
  return true
}
