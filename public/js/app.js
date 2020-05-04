console.log('this will be logged when someone visits the homepage')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then(data => {
//         console.log(data)
//     })
// })



// convert things marked in our html as 'form' to javascript so we can
// attach logic to them
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', e => {
    e.preventDefault()
    const location = search.value
    console.log(location)
    fetch(`/weather?location=${location}`).then(response => {
    response.json().then(data => {
        if (data.error) {
            console.log(error)
            messageTwo.textContent = error
        } else {
        messageTwo.textContent = `It is ${data.temperature} degrees in ${data.location}!`
        console.log(data.location, data.temperature)
        }
    })
})
})