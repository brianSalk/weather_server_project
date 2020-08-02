// convert things marked in our html as 'form' to javascript so we can
// attach logic to them
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const $random_btn = document.getElementById('random-btn')

const getRandomPlace = () => {
    const places = ['berlin', 'shanghai', 'new york', 'bali', 'dubai', 'nice', 'soul', 'tokyo', 'chicago', 'toronto', 'los angeles', 'dublin', 'london', 'lagos', 'harare', 'oslo', 'jamaca', 'mexico city', 'buenes airies', 'stockholm',
'frankfort', 'keyoto', 'mumbai', 'copenhagen', 'santiago de cuba', 'kinshasa', 'duesseldorf', 'st petersburg', 'busan', 'detroit', 'niamey', 'monico', 'joliet il']
    return places[Math.floor(Math.random() * places.length)]
}

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
})