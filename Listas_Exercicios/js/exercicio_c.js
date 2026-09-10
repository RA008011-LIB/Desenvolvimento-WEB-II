const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const terceiro = preco * 0.5
    const total = preco * 2 + terceiro

    resp.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)} | O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`
})
