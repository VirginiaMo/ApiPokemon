
fetch( 'https://pokeapi.co/api/v2/pokemon')
.then(response=>response.json())
.then(json=>{ 
    printPokemons(json.results)
    console.log(json)
})
.catch(err => console.log(err));
    

function printPokemons(pokemons) {
    const container = document.getElementById('container')
    pokemons.forEach(pokemon => {

      
      

    (async () => {
      let abilities = "<ul id='abilities_" + pokemon.name  + "'>";

      //console.log("abilities before: " + abilities);
      await fetch( pokemon.url)
      .then(response=>response.json())
      .then(json=>{           
            json.abilities.forEach(element => {
              
                //console.log(element.ability.name);
                abilities = abilities + "<li>" + element.ability.name + "</li>";
                //console.log("abilities inside: " + abilities );
        
                
            });         
      })
      .catch(err => console.log(err));

      abilities = abilities + "</ul>";
      //console.log("abilities after: " + abilities);

      container.innerHTML = `
            ${container.innerHTML}
            <div class="card">
            <h6>${pokemon.name.toUpperCase() }</h6>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png"/>
            <button onclick="openButton('${pokemon.name}')" id="myBtn">Abilities:</button>
            ${abilities}

            </div> 
          `;
    })()

    

    });
}

function getPokemonId(url) {
    return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
  }



function openButton(pokemonName){

  let abilities = document.getElementById("abilities_" + pokemonName);
  
  if(abilities.style.visibility === "hidden" ){
    abilities.style.visibility = "visible"; 
  }
else {abilities.style.visibility = "hidden"}

}








