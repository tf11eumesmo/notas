// Lista de itens entre strings:
const texto = '1Esta é2 uma 1lista2 de 1itens:2 '; 
const regex = /(?<=1)(.|\n)*?(?=2)/g; 
const itens = texto.match(regex);
console.log(itens); 

//descobrir dia da semana de uma data :

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
var data = '22/05/2023';
    var data = data.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1"); 
  var data = new Date(data);
    var NumeroDoDiaDaSemana = data.getDay();
      var NomeDoDiaDaSemana = diasDaSemana[NumeroDoDiaDaSemana];
console.log(NomeDoDiaDaSemana);

