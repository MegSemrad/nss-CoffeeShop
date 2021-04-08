const url = "https://localhost:5001/api/beanvariety/";
const getAllCoffeesURL = "https://localhost:5001/api/coffee/";

allCoffeesContainer = document.querySelector("#showCoffees")

// -----------------------------------------------------------------------------------


function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});


// -----------------------------------------------------------------------------------


function getAllCoffees() {
    return fetch(getAllCoffeesURL).then(resp => resp.json());
}

const AllCoffeesButton = document.querySelector("#show-coffees-button");
AllCoffeesButton.addEventListener("click", () => {
    getAllCoffees()
        .then(fetchedCoffees => {
            fetchedCoffees.map(coffee =>
                allCoffeesContainer.innerHTML += `
                <ul>
                <li>${coffee.title}</li>
                <ul> `)
        })
});


// -----------------------------------------------------------------------------------