function calculateTime(deliveries) {
  const crearHora = function (string) {
    return new Date("1970-01-01T" + string + "Z").getTime()
  }

  const startTime=crearHora("07:00:00")
  const horasMs = deliveries.map((hora)=> crearHora(hora))
  const totalMs = horasMs.reduce((previous, current)=>previous+current, 0)
  return startTime>totalMs?
    "-"+new Date(startTime-totalMs).toISOString().substring(11,19):
    new Date(totalMs-startTime).toISOString().substring(11,19)
}
