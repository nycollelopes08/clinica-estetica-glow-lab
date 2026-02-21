// VALIDAÇÃO FORMULÁRIO
document.getElementById("formContato").addEventListener("submit", function(e){
e.preventDefault();
alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
});

// BOTÃO COMPRAR
document.querySelectorAll(".comprar").forEach(btn=>{
btn.addEventListener("click", ()=>{
alert("Produto adicionado ao carrinho!");
});
});