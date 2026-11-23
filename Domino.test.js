const test = require('node:test');
const assert = require('node:assert/strict');
const { Domino } = require('./Domino');

test('CT01 - Iniciar partida com dois jogadores', () => {
    const jogo = new Domino();

    assert.equal(jogo.jogadores.length, 2);
    assert.equal(jogo.turno, 0);
    assert.equal(jogo.status, 'em_andamento');
    assert.equal(jogo.vencedor, null);
});

test('CT02 - Adicionar peças para os jogadores', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);
    jogo.adicionarPeca(1, [3, 4]);

    assert.equal(jogo.jogadores[0].length, 1);
    assert.equal(jogo.jogadores[1].length, 1);
});

test('CT03 - Colocar a primeira peça na mesa', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);

    assert.deepEqual(jogo.jogar(0, 0), [[6, 6]]);
});

test('CT04 - Conectar peça na extremidade direita', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 5]);
    jogo.adicionarPeca(0, [2, 2]);
    jogo.adicionarPeca(1, [5, 3]);
    jogo.adicionarPeca(1, [1, 1]);

    jogo.jogar(0, 0);

    assert.deepEqual(jogo.jogar(1, 0), [[6, 5], [5, 3]]);
});

test('CT05 - Conectar peça na extremidade esquerda', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 5]);
    jogo.adicionarPeca(0, [2, 2]);
    jogo.adicionarPeca(1, [3, 6]);
    jogo.adicionarPeca(1, [1, 1]);

    jogo.jogar(0, 0);

    assert.deepEqual(jogo.jogar(1, 0), [[3, 6], [6, 5]]);
});

test('CT06 - Recusar peça que não combina com a mesa', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);
    jogo.adicionarPeca(0, [2, 2]);
    jogo.adicionarPeca(1, [1, 3]);
    jogo.adicionarPeca(1, [4, 4]);

    jogo.jogar(0, 0);

    assert.throws(
        () => jogo.jogar(1, 0),
        /não pode ser conectada/
    );
});

test('CT07 - Alternar o turno após uma jogada válida', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);
    jogo.adicionarPeca(0, [2, 2]);
    jogo.adicionarPeca(1, [6, 5]);
    jogo.adicionarPeca(1, [3, 3]);

    jogo.jogar(0, 0);

    assert.equal(jogo.turno, 1);

    jogo.jogar(1, 0);

    assert.equal(jogo.turno, 0);
});

test('CT08 - Impedir jogada fora do turno', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);
    jogo.adicionarPeca(0, [2, 2]);

    assert.throws(
        () => jogo.jogar(1, 0),
        /turno/
    );
});

test('CT09 - Recusar índice de peça inválido', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);

    assert.throws(
        () => jogo.jogar(0, 5),
        /Índice de peça inválido/
    );

    assert.throws(
        () => jogo.jogar(0, 1.5),
        /Índice de peça inválido/
    );
});

test('CT10 - Recusar peças com valores inválidos', () => {
    const jogo = new Domino();

    assert.throws(
        () => jogo.adicionarPeca(0, [8, 2]),
        /Peça inválida/
    );

    assert.throws(
        () => jogo.adicionarPeca(0, [1.5, 3]),
        /Peça inválida/
    );

    assert.throws(
        () => jogo.adicionarPeca(0, [2]),
        /Peça inválida/
    );
});

test('CT11 - Declarar vencedor quando o jogador fica sem peças', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);

    jogo.jogar(0, 0);

    assert.equal(jogo.status, 'vencedor');
    assert.equal(jogo.vencedor, 0);
});

test('CT12 - Impedir novas jogadas após o encerramento', () => {
    const jogo = new Domino();

    jogo.adicionarPeca(0, [6, 6]);

    jogo.jogar(0, 0);

    assert.throws(
        () => jogo.jogar(1, 0),
        /não está em andamento/
    );

    assert.throws(
        () => jogo.adicionarPeca(1, [5, 5]),
        /não está em andamento/
    );
});

test('CT13 - Recusar jogador com identificação inválida', () => {
    const jogo = new Domino();

    assert.throws(
        () => jogo.adicionarPeca(2, [6, 6]),
        /jogador deve ser identificado/
    );

    assert.throws(
        () => jogo.jogar(3, 0),
        /jogador deve ser identificado/
    );
});
