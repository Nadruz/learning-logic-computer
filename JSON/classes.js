class formaDeBolo {
    constructor(saborDaMassa, saborDoRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
    }

    escrever() {
        console.log(`O sabor do bolo é de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
    
    assar() {
        console.log("O bolo que está assando é de: " + this.saborDaMassa);
    }
}

let boloDeFesta = new formaDeBolo("chocolate", "chocolate ao leite");
let boloPremium = new formaDeBolo("baunilha", "morango");

boloDeFesta.escrever();
boloPremium.escrever();
boloPremium.assar();