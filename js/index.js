const base_url = "http://localhost:3000/characters"

document.addEventListener("DOMContentLoaded",()=> {
const characterInfo=document.getElementById("characterInfo")
})



fetch(base_url)
.then(res=> res.json())
.then(chaeacters=>{
    chaeacters.forEach(character => {
        const characterContent = document.createElement('div')
    });
    const characterImage = document.createElement("div");
    characterImage.src=character.image;
    characterImage.alt=character.name;
    characterImage.classList.add("character-image");

    const name = document.createElement("name");
    name.textContent=character.name;
    
    const votes =document.createElement("input");
    votes.value= character.votes;

    characterContent.appendChild(characterImage)
    characterContent.appendChild(name)
    characterContent.appendChild(votes)
    characterInfo.appendChild(characterContent)
})

