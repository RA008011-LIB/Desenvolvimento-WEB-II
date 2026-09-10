const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if (valor < 1) {
        resp.innerText = "Valor Insuficiente"
    } else if (valor < 1.75) {
        resp.innerText = `Tempo: 30 min | Troco R$: ${(valor - 1).toFixed(2)}`
    } else if (valor < 3) {
        resp.innerText = `Tempo: 60 min | Troco R$: ${(valor - 1.75).toFixed(2)}`
    } else {
        resp.innerText = `Tempo: 120 min | Troco R$: ${(valor - 3).toFixed(2)}`
    }
})
