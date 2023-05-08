
let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    function add (pokemon) {
      if ( typeof pokemon === 'object' && 'name' in pokemon){
        pokemonList.push(pokemon);
      } else {
        console.log("Pokemon isn't correct");
      }
      
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

    function loadList() {
      
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon ={
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
      
    function loadDetails(item) {
      let url = item.detailsUrl;
    
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

    function showLoadingMessage() {
      const loadingMesage = document.createElement('div');
      loadingMesage.innerText = 'Loading...';
      document.body.appendChild(loadingMesage);
    }

    function hideLoadingMessage() {
      const loadingMesage = document.createElement('div');
      
      document.body.removeChild(loadingMesage);
      
    }


    return{
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };
}) ();



pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
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