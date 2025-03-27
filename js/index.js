const base_url = "http://localhost:3000/characters"

document.addEventListener("DOMContentLoaded",()=> {
const characterInfo=document.getElementById("characterInfo")
})



fetch(base_url)
.then(res=> res.json())
.then(characters => {
    characters.forEach(character => {
        const characterContent = document.createElement('div')
        const characterImage = document.createElement("img");
    characterImage.src=character.image;
    characterImage.alt=character.image;
    characterImage.classList.add("character-image");

    const name = document.createElement("h3");
    name.textContent=character.name;
    
    const rating =document.createElement("input");
    rating.value= character.rating;
    rating.min = "0";
    rating.type="number";
    rating.classList.add("add-rating")

    const submit = document.createElement("button");
    submit.textContent= "Add"
    submit.classList.add("submit-rating")

    submit.addEventListener('click', ()=>{
         
    })


    characterContent.appendChild(characterImage)
    characterContent.appendChild(name)
    characterContent.appendChild(rating)
    characterInfo.appendChild(characterContent)
})
    });





    
    

