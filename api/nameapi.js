const url = 'https://api.agify.io?name=';

const initializeApp = () => {
    const submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', handleClickSubmit)
}
const getAge = async (name) => {
    const response = await fetch(url + name);
    return await response.json();
}

const handleClickSubmit = async () => {
    const nameInput = document.querySelector('#first-name')
    const response = await getAge(nameInput.value)
    displayAge(response.age)
}

const displayAge = (age) => {
    const container = document.getElementById('age-display')
    container.innerHTML = `<h1>${age}</h1>`
}


initializeApp()