// JavaScript para controlar a surpresa

document.getElementById("revealButton").addEventListener("click", function() {
    // Mostra a mensagem e a surpresa quando o botão for clicado
    var message = document.getElementById("message");
    message.style.display = "block";

    // Oculta o botão após ser clicado
    this.style.display = "none";
});

// Interatividade com os pets
document.getElementById("pet1").addEventListener("click", function() {
    alert("Oi! Eu sou a Poly, amo te ver sorrindo!");
});

document.getElementById("pet2").addEventListener("click", function() {
    alert("Oi! Sou a Meg, sempre pronta para brincar com você!");
});

document.getElementById("pet3").addEventListener("click", function() {
    alert("Oi! Eu sou a Lessie, estoy com um pouco de son......!");
});

document.getElementById("pet4").addEventListener("click", function() {
    alert("Oi mamãe, sou a sua Amora, sempre atenta para lhe proteger do Tom e Jerry!");
});
