const submit = document.getElementById('submit')
const body = document.querySelector('#body')
const form = document.querySelector('#form')
submit.addEventListener('click', (event) => {
    event.preventDefault()
    const input = document.getElementById('nome')
    const name = input.value
    body.removeChild(form)

    const boas_vindas = document.createElement('h1')
    boas_vindas.innerText = `${name} seja bem-vindo !`
    body.appendChild(boas_vindas)
})