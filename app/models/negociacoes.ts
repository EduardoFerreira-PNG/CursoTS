import { Negociacao } from "./negociacao.js";

export class Negociacoes {  // nao preciso usar a tag ARRAY só colocar as chaves vazias após definir o tipo
    private negociacoes: Negociacao[]  = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[]{ // forma mais facil de escrever um array readonly (leitura)
        return this.negociacoes;
    }


}

