<<<<<<< HEAD
=======
console.log('this will be logged when someone visits the homepage')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then(data => {
//         console.log(data)
//     })
// })



>>>>>>> 9a964441d061ad3b6adce14693e7c67593c4121c
// convert things marked in our html as 'form' to javascript so we can
// attach logic to them
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
<<<<<<< HEAD
const $random_btn = document.getElementById('random-btn')

const getRandomPlace = () => {
    const places = ['berlin', 'shanghai', 'new york', 'bali', 'dubai', 'nice', 'soul', 'tokyo', 'chicago', 'toronto', 'los angeles', 'dublin', 'london', 'lagos', 'harare', 'oslo', 'jamaca', 'mexico city', 'buenes airies', 'stockholm',
'frankfort', 'keyoto', 'mumbai', 'copenhagen', 'santiago de cuba', 'kinshasa', 'duesseldorf', 'st petersburg', 'busan', 'detroit', 'niamey', 'monico', 'joliet il']
    return places[Math.floor(Math.random() * places.length)]
}
=======


>>>>>>> 9a964441d061ad3b6adce14693e7c67593c4121c

weatherForm.addEventListener('submit', e => {
    e.preventDefault()
    const location = search.value
    console.log(location)
    fetch(`/weather?location=${location}`).then(response => {
    response.json().then(data => {
        if (data.error) {
            messageTwo.textContent = data.error
        } else {
        messageTwo.textContent = `It is ${data.temperature} degrees in ${data.location}`
        messageOne.textContent = `Info last updated: ${data.observation_time}`
        console.log(data.location, data.temperature)
        }
    })
})
<<<<<<< HEAD
})

$random_btn.addEventListener('click', e => {
    e.preventDefault()
    const location = getRandomPlace()
    console.log(location, 'in random button')
    fetch(`/weather?location=${location}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageTwo.textContent = data.error
            } else {
            messageTwo.textContent = `It is ${data.temperature} degrees in ${data.location}`
            messageOne.textContent = `Info last updated: ${data.observation_time}`
            console.log(data.location, data.temperature)
            }
        })
    })
=======
>>>>>>> 9a964441d061ad3b6adce14693e7c67593c4121c
})