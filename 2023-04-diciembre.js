function decode(message) {
  // Code here
  let regexp = /\(([^)(]+)\)/;
  while(true) {
    let matches = regexp.exec(message)
    if(matches === null) break
    let reverso = matches[1].split("").reverse().join("")
    message = message.replace(matches[0], reverso)
  }
  return message
}
