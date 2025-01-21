//JSON JavaScript Object Notation
// chave e valor com objetivo de transferir dados
let invoice = {
    name: "Juliana",
    age: 20,
    products: {
        0: ["Mouse Logitech", 450.90],
        1: ["Teclado Mecânico", 160.50],
        2: ["Monitor 165hz", 880.90]
    }
}

generateInvoice(invoice);

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log(`---------------`);

//desestruturação
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`O produto é ${productName} no valor de ${productPrice}`);
    }
}
