const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(frm.inA.value)
    const ladoB = Number(frm.inB.value)
    const ladoC = Number(frm.inC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        resp.innerText = "Lados não podem formar um triângulo"
    } else if (ladoA == ladoB && ladoB == ladoC) {
        resp.innerText = "Lados podem formar um triângulo | Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resp.innerText = "Lados podem formar um triângulo | Tipo: Isósceles"
    } else {
        resp.innerText = "Lados podem formar um triângulo | Tipo: Escaleno"
    }
})
