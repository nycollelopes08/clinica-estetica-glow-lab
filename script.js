// Animação suave ao rolar
window.addEventListener("scroll", ()=>{
document.querySelectorAll(".card").forEach(card=>{
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}
});
});

// Formulário
document.getElementById("formContato").addEventListener("submit", function(e){
e.preventDefault();
alert("Agendamento enviado com sucesso!");
});

// Botão comprar
document.querySelectorAll(".comprar").forEach(btn=>{
btn.addEventListener("click", ()=>{
alert("Produto adicionado ao carrinho!");
});
});