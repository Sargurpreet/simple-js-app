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

/*Creating a loop function that can take a array 
and print some data of that array(name and height), 
also tells if it`s big.
*/
function loopFunction (list) {

  const Sentence = list.name + '(Height: ' + list.height +')';

  if (list.height >= 1.0) {
    document.write('<p>' + Sentence + ' - Wow, that is big!' + '</p>');
    } else {
      document.write('<p>' + Sentence + '</p>');
    }
}

pokemonList.forEach(loopFunction);


/*
for (let i=0; i < pokemonList.length; i++) {
  const pokemon = pokemonList[i];
  const pokemonSentence = pokemon.name + '(Height: ' + pokemon.height +')';
  if (pokemonList[i].height >= 1.0) {
  document.write('<p>' + pokemonSentence + ' - Wow, that is big!' + '</p>');
  } else {
    document.write('<p>' + pokemonSentence + '</p>');
  }
}
*/