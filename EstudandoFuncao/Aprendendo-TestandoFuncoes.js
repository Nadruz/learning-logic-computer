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

//função é uma cidadã de primeira classe
//função anônima -> Atribui uma função a uma variável
let ola = function(nome) {
    console.log(nome);
}
//ola("Ana Paula");

//função a uma propriedade de um objeto | Declara um objeto literal, tendo a propriedade "exibir" passa a ser uma função
let mensagem = {
    exibir: function(msg) {
        console.log(msg);
    }
}
mensagem.exibir("olá")

//função que é passada como argumento para outra função
function exibirSaudacao(nome, func) {
    func(nome);
}
exibirSaudacao("Ana Paula", ola);

//function exibirSaudacao() {
//     return function(nome, func) {
//        func(nome);
//    }
//}
//exibirSaudacao(("Ana Paula", ola));

//callback -> Quando passamos uma função para dentro de outra função que vai ser executada posteriormente (algo que é retornado)
