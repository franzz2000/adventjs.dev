function createFrame(names) {
  // Code here
  const maxLength = Math.max(...names.map(name => name.length)) 
  let texto = ("*".repeat(maxLength+4)+"\n")

  texto += names.map(name => "* "+name+" ".repeat(maxLength-name.length)+" *").join("\n")
  
  texto += "\n"+("*".repeat(maxLength+4))

  return texto 
 }

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

console.log(createFrame(['midu']))


console.log(createFrame(['a', 'bb', 'ccc']))