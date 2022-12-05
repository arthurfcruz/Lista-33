var frase:string = "o argollo e o melhor"

function ContarVogais(frase:string):number{
    let indexVogal:number = 0
    let letras:string[] = frase.split("")
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    
    letras.forEach(letra => {
        vogais.forEach(vogal => {
           if (vogal = letra) {
            indexVogal++
           } 
        });
    });
    return indexVogal
}

console.log(ContarVogais(frase))