class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if(this.tipo === "mago") {
            return (`O ${this.tipo} atacou usando magia`);
        } else if(this.tipo === "guerreiro") {
            return (`O ${this.tipo} atacou usando espada`);
        } else if(this.tipo === "monge") {
            return (`O ${this.tipo} atacou usando artes maciais`);
        } else if(this.tipo === "ninja") {
            return (`O ${this.tipo} atacou usando shuriken`);
        }
    } 
}

let mago = new heroi("MagoTrevoso", 107, "mago");
let guerreiro = new heroi("Cavalheiro da Lua", 20, "guerreiro");
let monge = new heroi("Aang", 112, "monge");
let ninja = new heroi("Naruto", 16, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

//Saída deseja -> mago
console.log(mago.atacar());


