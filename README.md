# jogoDaVelha
Um jogo da velha responsivo com um algoritmo de minha própria autoria, leia o README.

# Algoritmo
Estava pensando em como poderia desenvolver um algoritmo para o jogo da velha, quando pensei em utilizar um array de valores booleanos. Os 9 primeiros seriam representados pelo jogador 1, e os outros 9 pelo jogador 2. Vou exemplificar minha visão:

| Jogador | 1 | - |
| ------------- | ------------- | ------------- |
| 0 | 1 | 2 |  
| 3 | 4 | 5 |
| 6 | 7 | 8 |

| Jogador | 2 | - |
| ------------- | ------------- | ------------- |
| 9 | 10 | 11  
| 12 | 13 | 14  
| 15 | 16 | 17  

A partir daqui, crie verificações horizontais, verticais e laterais com 'for'. Identifiquei um padrão: as horizontais sempre crescem de 1 em 1 para que seja vitória, ou seja, as possibilidades são:

Para jogador 1:

0 | 1 | 2 ou 3 | 4 | 5 ou 6 | 7 | 8 

Para jogador 2:

9 | 10 | 11  ou 12 | 13 | 14 ou 15 | 16 | 17  

Na vertical, segue o mesmo padrão, só que elas crescem de 3 em 3. Nas laterais, elas possuem um comportamento diferente. Existe um valor fixo para cada jogador, sendo 4 e 13 que são o centro de cada jogador, além de crescerem 2 e subtraírem 2 nas pontas, gerando assim somente duas possibilidades por jogador:

Para jogador 1:

0 | 4 | 8 ou 2 | 4 | 6

Para jogador 2:

9 | 13 | 17 ou 11 | 13 | 15

Assim, desenvolvi o algoritmo de resolução, criando uma pequena otimização colocando um contador que verifica a quantidade de jogadas. Somente quando as jogadas chegarem a 5, que é o mínimo para um jogador vencer, ele fará toda essa verificação acima. Também verifiquei o empate: caso chegue a 9 o número de jogadas e não houver vencedor, o jogo termina em empate.
