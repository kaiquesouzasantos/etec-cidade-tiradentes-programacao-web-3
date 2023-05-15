function formatMoney(number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  }

function formatInputMoney(input) {
  // remove tudo que não for dígito
  let value = input.value.replace(/\D/g, '');
  
  // divide por 100 para obter o valor em reais
  value = value / 100;
  
  // formata como dinheiro
  value = formatMoney(value);
  
  // atualiza o valor do input
  input.value = value;
}