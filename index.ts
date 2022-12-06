var frase:string = "o argollo e o melhor"

function ContarVogais(frase:string):number{
    let indexVogal:number = 0
    let letras:string[] = frase.split("")
    let vogais = ["a", "e", "i", "o", "u"]
    
    vogais.forEach(vogal => {
        letras.forEach(letra => {
           if (vogal == letra) {
            indexVogal++
           } 
        });
    });
    return indexVogal
}

console.log(ContarVogais(frase))

var palavra:string = " pneumoultramicroscopicossilicovulcanoconiotico"

function MeioDaFrase(palavra:string):string {
    let meio:string[] = palavra.split("")
    let index:number = meio.length
    let metade:string

    if (meio.length % 2 == 0) {
        index = index / 2
        metade = meio[index - 1] + meio[index]
    }else {
        index = Math.round(index / 2)
        metade = meio[index]
    }

    return metade
}

console.log(MeioDaFrase(palavra))

var numero:number = 5793

function AcharMaiorNumero(numero:number):number{
    let numeroString = numero.toString()
    let array = numeroString.split("")
    array = array.sort((a,b) => parseInt(b) - parseInt(a))
    let array2 = array.toString().replace(/,/g, "")
    
    return parseInt(array2)
}

console.log(AcharMaiorNumero(numero));