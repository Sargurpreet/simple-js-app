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
    
    function add (pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("pokemon-list");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      
      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      })
    }
      
    function showDetails (pokemon){
        console.log(pokemon);
    }
    


    return{
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
    };
}) ();



pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

/*Creating a loop function that can take a array 
and print some data of that array(name and height), 
also tells if it`s big.

function loopFunction (pokemon) {

  const Sentence = pokemon.name + '(Height: ' + pokemon.height +')';

  if (pokemon.height >= 1.0) {
    document.write('<p>' + Sentence + ' - Wow, that is big!' + '</p>');
    } else {
      document.write('<p>' + Sentence + '</p>');
    }
}
*/


//Add a new pokemon´s data 
/*
pokemonRepository.add(
  {
    name: 'Kakuna',
    height: 0.6, 
    type: ['bug' , 'poison']
  }
     
)
*/



/*
pokemonRepository.getAll().filter(pokemon => pokemon.name === 'Bulbasaur').forEach(loopFunction);


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