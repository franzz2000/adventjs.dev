function inBox(box){
  box = box.slice(1,box.length-1)
  console.log(box)
  for(let line of box) { 
    if (line.includes("*") &&
       line.indexOf("*") > 0 &&
      line.indexOf("*") < (line.length - 1)) {
      return true
    }    
  }
  return false
}

console.log(inBox([
  "###",
  "#*#",
  "###"
])) // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])) // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false