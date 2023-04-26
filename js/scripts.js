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
  const pokemon = pokemonList[i];
  const pokemonSentence = pokemon.name + '(Height: ' + pokemon.height +')';
  if (pokemonList[i].height >= 1.0) {
  document.write('<p>' + pokemonSentence + ' - Wow, that is big!' + '</p>');
  } else {
    document.write('<p>' + pokemonSentence + '</p>');
  }
}