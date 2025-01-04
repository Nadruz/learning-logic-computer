let classificacao = "A"
let pontos = 90

switch (classificacao) {
    case "A":
        if (pontos >= 90) {
         console.log("Conseguiu nota máxima!");    
        } else {
            console.log ("Quase alcançou A!");
        }
    break;    
    
    case "B":
        if (pontos >=80) {
            console.log("Alcançou nota média!");
        } else {
            console.log ("Quase alcançou B!");
        }
    break;
    
    case "C":
        console.log("Desclassificado :(");
    break;

    default:
        console.log("Classificação não reconhecida.");
    break;
}
