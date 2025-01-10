// callback e funcao anonima
function calculoDesconto10Porcento(salario) {
    return salario * 0.1;
}
function calculoDesconto5Porcento(salario) {
    return salario * 0.05;
}

let calcularDescontoSalario = function(
    nome,
    salario,
    regraDesconto,
    exibirMensagem
    ) {
        let desconto = regraDesconto(salario);
        exibirMensagem(nome, salario, desconto);
    }

function exibirMensagemDescontoSalario(nome, salario, desconto) {
    console.log(`${nome}, seu salário é de: ${salario}, e seu desconto:  ${desconto} `)
}

calcularDescontoSalario("João",
    3000, 
    calculoDesconto10Porcento, 
    exibirMensagemDescontoSalario
);