var frase = "o argollo e o melhor";
function ContarVogais(frase) {
    var indexVogal = 0;
    var letras = frase.split("");
    var vogais = ["a", "e", "i", "o", "u"];
    vogais.forEach(function (vogal) {
        letras.forEach(function (letra) {
            if (vogal == letra) {
                indexVogal++;
            }
        });
    });
    return indexVogal;
}
console.log(ContarVogais(frase));
var palavra = " pneumoultramicroscopicossilicovulcanoconiotico";
function MeioDaFrase(palavra) {
    var meio = palavra.split("");
    var index = meio.length;
    var metade;
    if (meio.length % 2 == 0) {
        index = index / 2;
        metade = meio[index - 1] + meio[index];
    }
    else {
        index = Math.round(index / 2);
        metade = meio[index];
    }
    return metade;
}
console.log(MeioDaFrase(palavra));
var numero = 5793;
function AcharMaiorNumero(numero) {
    var numeroString = numero.toString();
    var array = numeroString.split("");
    array = array.sort(function (a, b) { return parseInt(b) - parseInt(a); });
    var array2 = array.toString().replace(/,/g, "");
    return parseInt(array2);
}
console.log(AcharMaiorNumero(numero));
