function findNaughtyStep(original, modified) {
  // Code here
  if (original===modified) return ''
  const max = original.length>modified.length?original.length:modified.length
  for (let i in [...Array(max).keys()]) {
    if(original[i]!=modified[i]) {
      return console.log(original.length<modified.length?modified[i]:original[i])
    }
  }
  return ''
}


const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original1 = 'stepfor'
const modified1 = 'stepor'
findNaughtyStep(original1, modified1) // 'f'

const original2 = 'abcde'
const modified2 = 'abcde'
//findNaughtyStep(original2, modified2) // ''
