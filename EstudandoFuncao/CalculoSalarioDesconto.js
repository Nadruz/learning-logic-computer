//calculo de um salário 
let salario = 1500;
let nome = "Juliana";


calcularDescontoSalario(nome, salario);
function calcularDescontoSalario(nome, salario) {
    if(salario > 1500) {
        let desconto = salario * 0.15;
        exibirMensagemDescontoSalario(nome, salario, desconto);
    } else {
        let desconto = salario * 0.2;
        exibirMensagemDescontoSalario(nome, salario, desconto);
    }
}

function exibirMensagemDescontoSalario(nome, salario, desconto){
    console.log(`${nome}, seu salário é: ${salario}, tem de desconto: ${desconto}`);
}