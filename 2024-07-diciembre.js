/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  console.log("Packages:", packages)
  // Code here
  let regExp = /\(([^)]+)\)/;
  let matches = regExp.exec(packages);
  console.log(matches[0])
  if (matches && !packages.startsWith('(')) {
    console.log({Matches:matches[0]})
    fixPackages(matches[0])
  } else {
    return packages.slice(1,-1).split('').reverse().join('')
  }
  return packages 
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"