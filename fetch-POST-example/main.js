import { renderJsonResponse, renderRawResponse, renderResponse } from './helperFunctions.js'
import { REBRANDLY_API_KEY } from './api-key.js' // saved in separate file


// Information to reach API
const apiKey = REBRANDLY_API_KEY;
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
        },
        body: data
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(console.log('Request failed!'))
    }, networkError => console.log(networkError.message))
        .then(jsonResponse => {
            renderResponse(jsonResponse)
        })

}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
