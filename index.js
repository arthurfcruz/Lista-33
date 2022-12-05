var frase = "o argollo e o melhor";
function ContarVogais(frase) {
    var indexVogal = 0;
    var letras = frase.split("");
    var vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    letras.forEach(function (letra) {
        vogais.forEach(function (vogal) {
            if (vogal = letra) {
                indexVogal++;
            }
        });
    });
    return indexVogal;
}
console.log(ContarVogais(frase));
