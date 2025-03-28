const base_url = "http://localhost:3000/characters"

document.addEventListener("DOMContentLoaded", () => {
    const characterInfo = document.getElementById("characterInfo")
    fetch(base_url)
    .then(res => res.json())
    .then(characters => {
        characters.forEach(character => {
            const characterContent = document.createElement('div')
            characterContent.classList.add('character-info')

            const characterImage = document.createElement("img");
            characterImage.src = character.imageSrc;
            characterImage.alt = character.name;
            characterImage.classList.add("character-image");

            const name = document.createElement("h3");
            name.textContent = character.name;
            name.classList.add("character-name")

            const voteDisplay = document.createElement("p");
            voteDisplay.textContent = `Votes: ${character.votes || 0}`;
            voteDisplay.classList.add("vote-display");

    const votes = document.createElement("input");
         votes.value = character.votes || 0;
         votes.type = "number";
         votes.min = "0";
         votes.classList.add("add-votes");

            const submit = document.createElement("button");
            submit.textContent = "Add Votes";
            submit.classList.add("submit-votes")

            submit.addEventListener('click', () => {
                const newVotes = parseFloat(votes.value);
                
                if ( newVotes < 0) {
                    return;
                }
                fetch(`${base_url}/${character.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ votes: newVotes })
                })
                .then(response => response.json())
                .then(updatedCharacter => {
                    voteDisplay.textContent = `Votes: ${updatedCharacter.votes}`;
                    voteDisplay.classList.add("vote-highlight");
                    setTimeout(() => voteDisplay.classList.remove("vote-highlight"), 1000);
                })
                .catch(error => {
                    console.error('Error updating votes:', error);
                    alert('Failed to update votes');
                });
            });
            characterContent.appendChild(characterImage);
            characterContent.appendChild(name);
            characterContent.appendChild(votes);
            characterContent.appendChild(submit);
            characterContent.appendChild(voteDisplay);
            characterInfo.appendChild(characterContent);
        });
    })
    .catch(error => {
        console.error("error");
    });

});