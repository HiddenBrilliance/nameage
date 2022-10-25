const url = 'https://api.agify.io?name=';


const getAge = async (name) => {
    const response = await fetch(url + name);
    return response.json();
}


const handleClickSubmit = () => {
    const nameInput = document.querySelector('#first-name')
    console.log(nameInput.value)
    getAge(nameInput.value)

}

const displayAge = () => {
    const container = document.querySelector('#age-display')
    console.log(container)
    container.innerHTML = `<h1> ${value} </h1>`

}



const initializeApp = () => {
    const submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', handleClickSubmit)
    container.adde
}

initializeApp()