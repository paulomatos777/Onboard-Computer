/* 
Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.

Seu script será usado no computador de bordo do carro.
 */

var dinheiro_disponivel = Number(
  prompt('Quanto o senhor possui na carterira destinado a abastecimento?\n')
)

var litros = dinheiro_disponivel / 5.89

var quantidade_de_combustivel = Math.round(litros)

var calculadora_de_km = litros * 20

var quantos_km_o_carro_pode_fazer = Math.round(calculadora_de_km)

document.write(
  `Com R$${dinheiro_disponivel} o senhor pode comprar ${quantidade_de_combustivel} litros de combustível, o suficiente para uma autonomia de ${quantos_km_o_carro_pode_fazer}`
)
