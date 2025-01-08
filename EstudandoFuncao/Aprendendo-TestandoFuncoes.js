// declarando uma função sem retorno (void)
function exibirNomeDoUsuario(nome) {
    console.log("Olá, seja bem-vindo(a): " + nome);
}
exibirNomeDoUsuario("Julia");
exibirNomeDoUsuario("Andreia");

//declarando uma função com retorno (return)
//o return retorna os dados
function exibirNomeMaiuscula(nome){
    return nome.toUpperCase();
}
console.log("Olá seja bem-vindo(a): " + exibirNomeMaiuscula("Juliana"));
console.log("Olá seja bem-vindo(a): " + exibirNomeMaiuscula("André"));

//Outro exemplo de função com return
function realizarEmprestimo(valor){
    return valor + 2;
}
console.log("O juros aplicado sera de: " + realizarEmprestimo(2000));

//escopo de funções -> global/ local
//varável de escopo global
let nome = "Paulo";

function test(user){
//variável de escopo local
    nome = "João";
    console.log(nome);
}
test(nome);
