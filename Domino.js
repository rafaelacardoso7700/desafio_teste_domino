class Domino {
    constructor() {
        this.jogadores = [[], []];
        this.mesa = [];
        this.turno = 0;
        this.status = 'em_andamento';
        this.vencedor = null;
    }

    validarJogador(jogador) {
        if (jogador !== 0 && jogador !== 1) {
            throw new Error('O jogador deve ser identificado por 0 ou 1.');
        }
    }

    validarPeca(peca) {
        if (
            !Array.isArray(peca) ||
            peca.length !== 2 ||
            !peca.every(valor =>
                Number.isInteger(valor) && valor >= 0 && valor <= 6
            )
        ) {
            throw new Error('Peça inválida. Use dois valores inteiros entre 0 e 6.');
        }
    }

    adicionarPeca(jogador, peca) {
        this.validarJogador(jogador);

        if (this.status !== 'em_andamento') {
            throw new Error('A partida não está em andamento.');
        }

        this.validarPeca(peca);

        this.jogadores[jogador].push([...peca]);
    }

    podeJogar(peca) {
        if (
            !Array.isArray(peca) ||
            peca.length !== 2 ||
            !peca.every(valor =>
                Number.isInteger(valor) && valor >= 0 && valor <= 6
            )
        ) {
            return false;
        }

        if (this.mesa.length === 0) {
            return true;
        }

        const inicio = this.mesa[0][0];
        const fim = this.mesa[this.mesa.length - 1][1];

        return peca.includes(inicio) || peca.includes(fim);
    }

    jogar(jogador, indice) {
        this.validarJogador(jogador);

        if (this.status !== 'em_andamento') {
            throw new Error('A partida não está em andamento.');
        }

        if (jogador !== this.turno) {
            throw new Error('Não é o turno deste jogador.');
        }

        if (
            !Number.isInteger(indice) ||
            indice < 0 ||
            indice >= this.jogadores[jogador].length
        ) {
            throw new Error('Índice de peça inválido.');
        }

        const peca = this.jogadores[jogador][indice];

        if (!this.podeJogar(peca)) {
            throw new Error('A peça não pode ser conectada à mesa.');
        }

        if (this.mesa.length === 0) {
            this.mesa.push([...peca]);
        } else {
            const inicio = this.mesa[0][0];
            const fim = this.mesa[this.mesa.length - 1][1];

            if (peca[1] === inicio) {
                this.mesa.unshift([...peca]);
            } else if (peca[0] === inicio) {
                this.mesa.unshift([peca[1], peca[0]]);
            } else if (peca[0] === fim) {
                this.mesa.push([...peca]);
            } else {
                this.mesa.push([peca[1], peca[0]]);
            }
        }

        this.jogadores[jogador].splice(indice, 1);

        if (this.jogadores[jogador].length === 0) {
            this.status = 'vencedor';
            this.vencedor = jogador;
        } else {
            this.turno = 1 - this.turno;
        }

        return this.mesa.map(item => [...item]);
    }
}

module.exports = { Domino };
