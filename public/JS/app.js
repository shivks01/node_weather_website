const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading weather info please wait..'
    messagetwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                
                messageOne.textContent =data.error
            }
            else {
                messageOne.textContent = data.Location
                messagetwo.textContent = data.forecast
            }
        })
    })
})