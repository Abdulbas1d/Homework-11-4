const container = document.querySelector("#container");

function createCard(data) {
    return `
        <div class="block">
            <img src="${data.id}" alt="">
            <h3>Album Id: ${data.userId}</h3>
            <h3>Id: ${data.title}</h3>
            <p>${data.completed}</p>
        </div>  
    `
}

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET"
    })

        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })

        .then (data => {
            container.innerHTML = "";
            data.forEach(element => {
                let card = createCard(element);
                container.innerHTML += card
            });
        })

        .catch (err => {
            console.log(err);
        })
})