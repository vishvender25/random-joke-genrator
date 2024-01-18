let jokeContainer = document.getElementById("joke");
let jokeGenerator = document.getElementById("get-random-joke");

let jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    jokeContainer.classList.remove('fade');
    fetch(jokeUrl)
    .then(respnse => respnse.json())
    .then(data => {
        let randomJoke = data.joke;
        jokeContainer.textContent = randomJoke;
        jokeContainer.classList.add('fade');
    })
}

jokeGenerator.addEventListener('click' , getJoke);
