/*let pokemonList = [
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

*/

//Using IIFE to make variables for local use
let pokemonRepository = (function () {

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

  return{
    getAll: function() {
      return pokemonList;
    },
    add: function (pokemon) {
      pokemonList.push(pokemon);
      return {};
    }

  }
}) ();

/*Creating a loop function that can take a array 
and print some data of that array(name and height), 
also tells if it`s big.
*/
function loopFunction (pokemon) {

  const Sentence = pokemon.name + '(Height: ' + pokemon.height +')';

  if (pokemon.height >= 1.0) {
    document.write('<p>' + Sentence + ' - Wow, that is big!' + '</p>');
    } else {
      document.write('<p>' + Sentence + '</p>');
    }
}

pokemonRepository.getAll().forEach(loopFunction);

//Add a new pokemon´s data 

pokemonRepository.add(
  {
    name: 'Kakuna',
    height: 0.6, 
    type: ['bug' , 'poison']
  }
     
)

pokemonRepository.getAll().forEach(loopFunction);

pokemonRepository.getAll().filter(pokemon => pokemon.name === 'Bulbasaur').forEach(loopFunction);

/*
pokemonList.forEach(loopFunction);

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