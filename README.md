**Rafaela Tanaka Cardoso 24062611-2**

**Vitor Hugo da Costa 23234248-2**

# Jogo de Dominó - Casos de Teste

## Concepção do Desafio

O desafio consiste na criação de casos de teste para uma partida de Dominó entre 2 jogadores, utilizando JavaScript e o framework Jest.
A ideia é testar as principais regras do jogo, desde o início da partida e a distribuição das peças até as jogadas, compras de peças e identificação do vencedor.

Foram consideradas as regras do dominó tradicional, utilizando 28 peças, numeradas de 0 a 6, com 7 peças distribuídas para cada jogador no início da partida.

## Funcionamento dos Casos de Teste

Os casos de teste foram separados para verificar diferentes situações que podem acontecer durante uma partida.

Foram criados testes para verificar:

- Início de uma partida com 2 jogadores;
- Distribuição correta das peças;
- Quantidade de peças restantes no monte;
- Impedimento de partidas com quantidade incorreta de jogadores;
- Aceitação de jogadas válidas;
- Recusa de jogadas inválidas;
- Compra de peças quando não existe uma jogada possível;
- Passagem de vez quando não existem mais peças para comprar;
- Impedimento de jogadas fora da vez;
- Identificação do vencedor quando um jogador fica sem peças;
- Encerramento da partida quando o jogo fica bloqueado;
- Comparação da pontuação dos jogadores e identificação de empate;
- Impedimento de novas jogadas após o encerramento da partida.

Os testes foram organizados utilizando o `describe()` para agrupar os cenários e o `test()` para identificar cada situação que deve ser verificada.

## Tecnologias Utilizadas

- JavaScript
- Jest

## Quantidade de Testes

Foram elaborados 13 casos de teste, considerando situações válidas e inválidas que podem acontecer durante uma partida de Dominó.

O objetivo é verificar se as regras estão sendo respeitadas e se o jogo apresenta o comportamento esperado em cada situação.


## Casos de Teste Desenvolvidos

CT01 - Iniciar partida com dois jogadores

Verifica se a partida começa com dois jogadores, turno inicial do jogador zero, status em andamento e sem vencedor definido.

CT02 - Adicionar peças para os jogadores

Verifica se é possível adicionar peças corretamente na mão de cada jogador.

CT03 - Colocar a primeira peça na mesa

Verifica se o primeiro jogador consegue colocar uma peça na mesa quando ela está vazia.

CT04 - Conectar peça na extremidade direita

Verifica se uma peça consegue ser conectada corretamente na extremidade direita da mesa.

CT05 - Conectar peça na extremidade esquerda

Verifica se uma peça consegue ser conectada corretamente na extremidade esquerda, invertendo sua posição quando necessário.

CT06 - Recusar peça que não combina com a mesa

Verifica se o jogo impede uma jogada quando a peça não possui nenhum número compatível com as extremidades da mesa.

CT07 - Alternar o turno após uma jogada válida

Verifica se a vez passa para o outro jogador depois que uma jogada é realizada corretamente.

CT08 - Impedir jogada fora do turno

Verifica se um jogador é impedido de jogar quando não é sua vez.

CT09 - Recusar índice de peça inválido

Verifica se o sistema impede uma jogada quando o índice informado não corresponde a uma peça válida na mão do jogador.

CT10 - Recusar peças com valores inválidos

Verifica se o jogo não permite adicionar peças com números fora do intervalo de 0 a 6, valores decimais ou quantidade incorreta de números.

CT11 - Declarar vencedor quando o jogador fica sem peças

Verifica se o jogador é declarado vencedor quando utiliza sua última peça.

CT12 - Impedir novas jogadas após o encerramento

Verifica se o sistema bloqueia novas jogadas e adições de peças depois que a partida termina.

CT13 - Recusar jogador com identificação inválida

Verifica se o sistema impede operações quando é informado um jogador diferente de 0 ou 1.
