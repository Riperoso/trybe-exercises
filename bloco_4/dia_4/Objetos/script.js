let player = {
  name:'Marta' ,
  lastName : 'Silva',
  age : 34, 
  medals : { golden: 2, silver: 3 },
};

console.log('A jogadora ' + player.name + player.lastname + 'Tem' + player.age)

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player)

console.log('A jogadora' + player.name + player.lastName + 'foi eleita a melhor do mundo por')

console.log('A jogadora possui' + medals.golden , 'Medalhas de ouro e ' , medals.silver + 'de prata.')