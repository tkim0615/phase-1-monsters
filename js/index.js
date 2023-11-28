fetch('http://127.0.0.1:3000/monsters/?_limit=50&_page=1')
.then(resp => resp.json())
.then(monsterList => {

    monsterList.forEach(monster => {    //create div element which will be appended to existing div#monster=container element., append 3created elements to div then div to div id mon-con
     renderMonster(monster)
        
    })
    //create form with 4 inputs name, age, description, button(create)
    //append to form and append form to div container
    const createMonsterDiv = document.getElementById('create-monster')
    const monsterForm = document.createElement("form")
    monsterForm.id = "monster-form"
    const inputName = document.createElement('input')
    inputName.id = "name"
    const inputAge = document.createElement('input')
    inputAge.id = 'age'
    const inputDescription = document.createElement('input')
    inputDescription.id = 'description'
    const inputClick = document.createElement('button')
    monsterForm.append(inputName, inputAge, inputDescription, inputClick)
    createMonsterDiv.appendChild(monsterForm)

inputName.setAttribute('placeholder' ,   '...Name')
inputAge.setAttribute('placeholder', '...Age')
inputDescription.setAttribute('placeholder', '...Description')
inputClick.textContent = "Click"


//adding monster to list. capture value of 3 input.values in formElement. and set it to 3 keys of data, create new object
monsterForm.addEventListener('submit', e => {
e.preventDefault()

    const newMonsterInfo = {
        name: e.target[0].value,
        age: e.target[1].value,
        description: e.target[2].value
    }
    renderMonster(newMonsterInfo);

    // fetch("http://127.0.0.1:3000/monsters", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newMonsterInfo)
    //     })
    //     .then(resp => resp.json())
    //     .then(newMonster => {
    //         renderMonster(newMonster);
    //     })
       

})



const forwardButton = document.getElementById('forward')
forwardButton.addEventListener('click', e => {
    fetch('http://127.0.0.1:3000/monsters/?_limit=50&_page=2')
    .then(resp => resp.json())
    .then(secondMonsterList => {
        secondMonsterList.forEach(monster => {
            renderMonster(monster)
        })
    })

})


})

//global scope

function renderMonster(monster){
        const nameElement = document.createElement('h2')
        const ageElement = document.createElement('h4')
        const descriptionElement = document.createElement('p')

        const divElement = document.createElement('div')
        const divMonsterContainer = document.getElementById('monster-container')
        nameElement.textContent = monster.name
        ageElement.textContent = monster.age
        descriptionElement.textContent = monster.description
        divElement.append(nameElement, ageElement, descriptionElement)
        divMonsterContainer.appendChild(divElement)
}