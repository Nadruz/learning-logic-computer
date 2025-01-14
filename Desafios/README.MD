# Projeto: Desafios de código

Este repositório contém diversos códigos organizados por arquivos, cada um representando uma funcionalidade relacionada ao universo Pokémon e a aventuras em masmorras. Abaixo você encontrará a explicação detalhada de cada arquivo.

---

## 1. **Arquivo: `capturandoPokemon.js`**

### Descrição:
Este código simula a escolha de um Pokémon inicial com base em uma entrada do treinador. Dependendo da entrada fornecida, o código determina qual Pokémon foi escolhido.

### Funcionamento do Código:

#### 1. **Entrada de Dados**:
```javascript
let escolhaDoTreinador = parseInt(gets());
```
- Captura a escolha do treinador como entrada e a converte em número inteiro com `parseInt`.

#### 2. **Condicional para Escolha do Pokémon**:
```javascript
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else {
    pokemonEscolhido = "Mewtwo";
}
```
- Define qual Pokémon será escolhido com base na entrada.

#### 3. **Saída de Dados**:
```javascript
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}
```
- Exibe no console qual Pokémon foi escolhido pelo treinador.

---

## 2. **Arquivo: `coletaDeTesouros.js`**

### Descrição:
Este código percorre as salas de uma masmorra e informa se há tesouro ou monstro em cada sala com base em arrays predefinidos.

### Funcionamento do Código:

#### 1. **Entrada de Dados**:
```javascript
const totalSalas = parseInt(gets());
```
- Captura o número total de salas como entrada e converte para número inteiro.

#### 2. **Arrays Predefinidos**:
```javascript
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];
```
- Define previamente quais salas possuem tesouros e monstros.

#### 3. **Loop nas Salas**:
```javascript
for (let sala = 1; sala <= totalSalas; sala++) {
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    if (temTesouro) {
        print("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        print("Monstro na sala " + sala + "!");
    }
}
```
- Verifica cada sala e exibe se há um tesouro ou um monstro usando o método `.includes()`.

---

## 3. **Arquivo: `combinandoNomesPokemons.js`**

### Descrição:
Este código cria um nome personalizado de Pokémon combinando uma palavra fornecida pelo usuário com o sufixo "saur".

### Funcionamento do Código:

#### 1. **Função para Combinação de Nomes**:
```javascript
function combinandoNomesPokemons(palavra) {
    const resultado = palavra + "saur";
    const palavraPokemon = resultado;
    return palavraPokemon;
}
```
- Recebe uma palavra como entrada e retorna o nome do Pokémon concatenado com "saur".

#### 2. **Entrada e Saída de Dados**:
```javascript
var nomeEntrada = gets();
var palavraGerada = combinandoNomesPokemons(nomeEntrada);
print(palavraGerada);
```
- Captura a entrada do usuário, chama a função e exibe o nome do Pokémon gerado.

---

## 4. **Arquivo: `geracaoDeBiomas.js`**

### Descrição:
Este código simula a geração de biomas a partir de golpes desferidos pelo usuário. Cada golpe é associado ciclicamente a um tipo de mineral.

### Funcionamento do Código:

#### 1. **Entrada de Dados**:
```javascript
const quantidadeGolpes = parseInt(gets());
```
- Captura a quantidade de golpes como entrada e a converte para número inteiro.

#### 2. **Array de Minerais**:
```javascript
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];
```
- Define os tipos de minerais disponíveis.

#### 3. **Loop nos Golpes**:
```javascript
for (let i = 1; i <= quantidadeGolpes; i++) {
    let minaIndex = (i - 1) % minerais.length;
    print(`${i}: ${minerais[minaIndex]}`);
}
```
- Usa o operador módulo (`%`) para alternar ciclicamente entre os minerais e exibe o índice do golpe seguido do mineral correspondente.

---

Aqui está o conteúdo de um arquivo `README.md` que reúne os três scripts (`gerenciamentoItensMagicos.js`, `jornadaDoHeroi.js` e `pontosDeExperiencia.js`):

## 5. **Arquivo: `gerenciamentoItensMagicos.js`**

### Funcionalidade

Este script implementa uma classe `ItemMagico` para gerenciar itens mágicos em um contexto de combate. O usuário pode personalizar os atributos do item, como o tipo, o dano e a resistência, e calcular o dano total que o item pode causar em combate, levando em consideração seu tipo.

#### Código

```javascript
// Definição da classe ItemMagico
class ItemMagico {
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia;
    }
    
    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

// Solicita ao usuário para digitar os atributos do item mágico
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Cria um objeto ItemMagico
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Exibe os atributos do item
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano em combate
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
```

### Como Usar

- O script solicita ao usuário inserir o tipo do item mágico, o dano e a resistência do item.
- O dano final é calculado e impresso.

---

## 6. **Arquivo: `jornadaDeHeroi.js`**

### Funcionalidade

Este script simula o movimento de um herói em uma jornada, calculando sua posição final com base na posição inicial e no total de passos dados durante a jornada.

#### Código

```javascript
// Solicita a posição inicial e o total de passos
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calcula a posição final
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final do herói
print("Posicao final do heroi:", posicaoFinal);
```

### Como Usar

- O script solicita ao usuário inserir a posição inicial do herói e o número de passos dados.
- A posição final do herói é calculada e exibida.

---

## 7. **Arquivo: `pontosDeExperiência.js`**

### Funcionalidade

Este script simula o cálculo de pontos de experiência (XP) ganhos por um personagem em um jogo. O cálculo é feito multiplicando dois valores inseridos pelo usuário e, em seguida, multiplicando o resultado por 100 para determinar a quantidade de XP ganha.

#### Código

```javascript
// Entrada de dados: dois números que representam fatores para o cálculo de XP
let num1 = parseInt(gets());
let num2 = parseInt(gets());

// Calcula o XP ganho
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
```

### Como Usar

- O script solicita ao usuário inserir dois valores (como nível e dificuldade) para calcular o XP ganho.
- O XP ganho é calculado e impresso.

---

### Como Executar os Códigos:
1. Certifique-se de ter o Node.js instalado.
2. Execute cada arquivo individualmente com o comando:
   ```bash
   node <nome_do_arquivo>.js
   ```
3. Forneça as entradas conforme solicitado em cada código.

---

### Observações:
- Os códigos foram desenvolvidos para serem usados em desafios ou simulações didáticas.
- Certifique-se de adaptar as funções `gets()` e `print()` caso esteja rodando os códigos fora de plataformas específicas como a DIO.