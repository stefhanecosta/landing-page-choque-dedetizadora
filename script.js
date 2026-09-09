console.log("Choque Dedetizadora online");
const formulario = document.getElementById("formularioLateral");
const formularioOrcamento = document.getElementById("formularioOrcamento");

// Número que vai receber a mensagem no WhatsApp
const numeroWhatsApp = "559887042702";

setTimeout(() => {
    formulario.classList.add("visivel");
}, 500);

formularioOrcamento.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const tipoLocal = document.getElementById("tipoLocal").value;
    const problema = document.getElementById("problema").value;
    const urgencia = document.getElementById("urgencia").value;

    let mensagem = "Olá! Gostaria de um orçamento.\n\n";
    mensagem += `*Nome:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;

    if (email) {
        mensagem += `*Email:* ${email}\n`;
    }

    mensagem += `*Tipo de local:* ${tipoLocal}\n`;
    mensagem += `*Tipo de problema:* ${problema}\n`;
    mensagem += `*Urgência:* ${urgencia}`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");

    formularioOrcamento.reset();
});

const cards = document.querySelectorAll('.card-processo');
let indiceAtual = 0;

function animarProximo() {
    // remove a classe de todos antes de começar o próximo
    cards.forEach(card => card.classList.remove('ativo'));

    // adiciona a classe no card da vez
    cards[indiceAtual].classList.add('ativo');
}

// escuta o fim da animação para passar pro próximo card
cards.forEach(card => {
    card.addEventListener('animationend', () => {
        indiceAtual = (indiceAtual + 1) % cards.length; // volta pro 0 depois do último
        animarProximo();
    });
});

// inicia o ciclo
animarProximo();
