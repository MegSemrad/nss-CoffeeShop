const url = "https://localhost:5001/api/beanvariety/";
const getAllCoffeesURL = "https://localhost:5001/api/coffee/";

// const contentTarget = document.querySelector("#displayAllBeanVarieties");


const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);

            // contentTarget.innerHTML += `
            // <h3> Here is a list of coffee bean varieties </h3>
            // <div>${beanVarieties.name}</div>
            // `
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}



function getAllCoffees() {
    return fetch(getAllCoffeesURL).then(resp => resp.json());
}

const AllCoffeesButton = document.querySelector("#show-coffees-button");
AllCoffeesButton.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});