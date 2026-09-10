const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const total = preco * 2
    const desconto = total % 1
    const promocao = total - desconto

    resp.innerText = `Promoção de ${medicamento} - Leve 2 por apenas R$: ${promocao.toFixed(2)}`
})
