function createXmasTree(height, ornament) {
  /* Code here */
  const anchura = (height*2)/2
  let lineas = ""
  lineas += "_".repeat(anchura - 1) + "*" + "_".repeat(anchura - 1) + "\n"
  for (let i = 0; i < height; i++) {
    lineas += "_".repeat(anchura - 1 - i) + ornament.repeat(i * 2 + 1) + "_".repeat(anchura - 1 - i) + "\n"
  }
  const tronco = "_".repeat(anchura - 1) + "#" + "_".repeat(anchura - 1)
  lineas += tronco + "\n" + tronco

  return lineas
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(10, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/