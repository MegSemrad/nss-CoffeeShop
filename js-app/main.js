const url = "https://localhost:5001/api/beanvariety/";
const getAllCoffeesURL = "https://localhost:5001/api/coffee/";


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


const AddBeanVarietyButton = document.querySelector("#addBeanVarietyButton");
AddBeanVarietyButton.addEventListener("click", () => {

    const name = document.querySelector(".beanVarietyNameInput").value
    const region = document.querySelector(".beanVarietyRegionInput").value
    const notes = document.querySelector(".beanVarietyNotesInput").value

    const newBeanObject = {
        name,
        region,
        notes
    }
    addBeanVariety(newBeanObject)
})


function addBeanVariety(newBeanObject) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBeanObject)
    })
        .then(getAllBeanVarieties)
}



// -----------------------------------------------------------------------------------


function getAllCoffees() {
    return fetch(getAllCoffeesURL).then(resp => resp.json());
}

const allCoffeesContainer = document.querySelector("#showCoffees");
const AllCoffeesButton = document.querySelector("#showCoffeesButton");
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

//Have NOT finsihed this section
const coffeeForm = document.querySelector("#coffeeForm");

const AddACoffeeButton = document.querySelector("#addACoffeeButton");
AddACoffeeButton.addEventListener("click", () => {
    return coffeeForm.innerHTML = `
    <input type = "text" id = "title" placeholder = "Coffee Name" >
        <select id="beanVariety" class="dropdown">
            <option value="0">Please select what type of bean variety...</option>
            ${beanVarietyCollection.map(
        (beanVariety) => `
                    <option value=${beanVariety.id}>
                      ${beanVariety.name}
                    </option
                `)
        }
        </select>
    <button id="saveCoffee">Save Coffee</button>
    `
})

const saveAddedCoffee = document.querySelector("#saveCoffee");

saveAddedCoffee.addEventListener("click", () => {
    // capture .values and save in new object and pass through addCoffee(obj)
    addCoffee()
})

function addCoffee() {
    return fetch(addCoffee).then(resp => resp.json());
}