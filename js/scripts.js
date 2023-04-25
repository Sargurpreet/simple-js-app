let pokemonList = [
  {
    name: 'Charizard',
    height: 1.7, 
    type: ['fire' , 'flying']
  },

  {
    name: 'Pikachu',
    height: 0.4,
    type: ['Electric']
  },

  {
    name: 'Pidgeot',
    height: 1.5,
    type: ['flying' , 'Normal']
  },

  {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass' , 'poison']
  }
];

for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 1.0) {
  document.write('<p>' + pokemonList[i].name + ' (Height: ' + (pokemonList[i].height) +')' + ' - Wow, that is big!' );
  } else {
    document.write('<p>' + pokemonList[i].name + ' (Height: ' + (pokemonList[i].height) +')');
  }
}